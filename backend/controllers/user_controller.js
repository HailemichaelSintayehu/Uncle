const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");

const User = require("../models/user")(sequelize, DataTypes);
const Subscription = require("../models/subscription")(sequelize, DataTypes);
const nodemailer = require("nodemailer");
const config = require("../config/config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const redis = require("redis");
const subscription = require("../models/subscription");
const { decodeToken } = require("../middleware/decodeToken");

const JWT_secret_code = process.env.JWT_SECRET || "Random-Token";
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

//Setup Redis
const redis_client = redis.createClient();
redis_client.on("error", (err) => console.log("Redis Client Error", err));
(async () => {
  await redis_client.connect();
})();

// sign a jwt token
function signin_token(email, id) {
  const jwtPayload = { email, id };
  return jwt.sign(jwtPayload, JWT_secret_code, {
    expiresIn: "12h",
  });
}

// get authentication token id
async function get_auth_token_id(req, res) {
  const { authorization } = req.headers;
  return await redis_client.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(400).json("Unauthorized.");
    }
    return res.status(200).json({ id: reply });
  });
}

//set redis token
async function set_token(key, value) {
  return Promise.resolve(await redis_client.set(key, value));
}

//create user session and store in redis
function create_session(user) {
  const { email, id } = user;
  const token = signin_token(email, id);

  return set_token(token, id)
    .then(() => {
      return { success: "true", user_id: id, token };
    })
    .catch((error) => {
      console.log("error logging in.", error);
    });
}

// function to handle user login
function handle_user_login(req) {
  return new Promise(async (resolve, reject) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        reject("Invalid credentials. User authentication failed.");
      }
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        resolve(user);
      } else {
        reject("Invalid user credentials. User authentication failed.");
      }
    } catch (error) {
      reject("Invalid user credentials. User Authentication failed.");
    }
  });
}

// login controller
exports.login_user = async (req, res, next) => {
  const { authorization } = req.headers;

  authorization
    ? get_auth_token_id(req, res)
    : handle_user_login(req)
        .then((user) => {
          if (user) {
            create_session(user).then((session) => {
              res.status(200).json({
                message: "login success",
                session: session,
                user: user,
              });
            });
          } else {
            res
              .status(401)
              .send("Invalid credentials. User authentication failed.");
          }
        })
        .catch((error) => {
          res
            .status(401)
            .send("Invalid credentials. User authentication failed. ");
        });
};

//registration controller
exports.register_user = (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  
  try {
    User.findOne({ where: { email: email } }).then((user) => {
      if (user) {
        return res.status(200).send("User with that email already exists");
      } else {
        (async () => {
          const salt = await bcrypt.genSalt(10);
          const hashedPass = await bcrypt.hash(password, salt);
          const code = Math.floor(100000 + Math.random() * 900000);
        
         // await user.save();
          await sendEmailNotification(email, code);
          const user = await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            password: hashedPass,
            verification_code: code,
            is_forget_password : true
          });

          await create_session(user).then((session) => {
            return res.status(201).json({
              message: "User registration successful",
              user: user,
              session: session,
            });
          });
        })();
      }
    });
  } catch (error) {
    return res
      .status(400)
      .send(
        "Registration failed due to incorrect or missing user information."
      );
  }
};

//function to update user profile
exports.update_user_profile = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send("Unauthorized access.");
  }
  const { firstname, lastname, email, phone } = req.body;

  try {
    const user = await User.findOne({ authorization: authorization });
    if (!user) {
      return res.status(404).send("user not found.");
    }
    if (firstname) {
      user.firstname = firstname;
    }
    if (lastname) {
      user.lastname = lastname;
    }
    if (email) {
      user.email = email;
    }
    if (phone) {
      user.phone = phone;
    }
    await user.save().then((user) => {
      return res
        .status(200)
        .json({ message: "profile update successful", user: user });
    });
  } catch (error) {
    return res
      .status(500)
      .send(error, "Profile update failed due to internal server error.");
  }
};

//subscription controller
exports.get_user_subscriptions = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send("User authentication failed due to missing or invalid token.");
  }

  const token = authorization.split(" ")[1]; // Extract the token from "Bearer <token>"
  const decoded = decodeToken(token);

  if (!decoded) {
    return res.status(401).send("Invalid authorization token.");
  }

  try {
    const user = await User.findByPk(decoded.id); // Assuming decoded token includes `{ id: userId }`
    if (!user) {
      return res.status(403).send("User not found.");
    }

    const subscriptions = await Subscription.findAll({
      where: { user_id: user.id },
    });

    const formatted_subscriptions = subscriptions.map((sub) => ({
      name:sub.name,
      image: sub.image,
      price: sub.price,
      quantity: sub.quantity,
      plan: sub.plan,
      user_id: user.id,
      option:sub.option,
      option:sub.option,
      email:sub.email,
      phone_number:sub.phone_number,
      residential_address:sub.residential_address,
      delivery_address:sub.delivery_address,
      preferred_communication_method:sub.preferred_communication_method,
      preferred_delivery_date:sub.preferred_delivery_date,
      stripe_subscription_item_id: sub.stripe_subscription_item_id,
      stripe_subscription_id: sub.stripe_subscription_id,
    }));

    return res.status(200).json(formatted_subscriptions);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return res.status(500).send(`Internal server error: ${error.message}`);
  }
};

exports.get_all_orders = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send("User authentication failed due to missing or invalid token.");
  }

  try {
   

    const subscriptions = await Subscription.findAll();

    const formattedSubscriptions = await Promise.all(subscriptions.map(async (sub) => {
      const user = await User.findByPk(sub.user_id);
      return {
        id: sub.id,
        name: sub.name,
        image: sub.image,
        price: sub.price,
        quantity: sub.quantity,
        plan: sub.plan,
        user_id: sub.user_id,
        first_name: user ? user.firstname : null,
        last_name: user ? user.lastname : null,
        option: sub.option,
        email: sub.email,
        phone_number: sub.phone_number,
        residential_address: sub.residential_address,
        delivery_address: sub.delivery_address,
        preferred_communication_method: sub.preferred_communication_method,
        preferred_delivery_date: sub.preferred_delivery_date,
        stripe_subscription_item_id: sub.stripe_subscription_item_id,
        stripe_subscription_id: sub.stripe_subscription_id,
      };
    }));
    
    const groupedSubscriptions = formattedSubscriptions.reduce((acc, sub) => {
      if (!acc[sub.user_id]) {
        acc[sub.user_id] = [];
      }
      acc[sub.user_id].push(sub);
      return acc;
    }, {});
    
    return res.status(200).json(groupedSubscriptions);
      } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return res.status(500).send(`Internal server error: ${error.message}`);
  }
};

exports.create_user_subscriptions = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send("User authentication failed due to missing or invalid token.");
  }

  const token = authorization.split(" ")[1]; // Extract the token from "Bearer <token>"
  const decoded = decodeToken(token);
  console.log(decoded, "&&&");
  if (!decoded) {
    return res.status(401).send("Invalid authorization token.");
  }



  const { subscriptions } = req.body;

  try {
    const user = await User.findByPk(decoded.id)
    if (!user) {
      return res
        .status(403)
        .send("User does not have permission to access the resources.");
    }

    const session = await stripe.checkout.sessions.retrieve(
      user.stripeSessionId
    );
    let subscription;     
    if( session?.mode=="payment"){
      subscription = await stripe.paymentIntents.retrieve(session.payment_intent);
    }else if(session.mode === "subscription") {
      subscription = await stripe.subscriptions.retrieve(session.subscription);
    }
    console.log(session,"---")

    const itemIds = session.mode === "subscription"?subscription.items.data.map((item) => item.id):subscription?.id;
    console.log(itemIds,"+++")

    const new_subscriptions = subscriptions.map((sub, index) => ({
      name: sub.name,
      image: sub.image,
      price: sub.price,
      quantity: sub.quantity,
      plan: sub.plan,
      user_id: user.id,
      option:sub?.option,
      email: sub.email,
      phone_number:  sub.phone_number,
      residential_address:  sub.residential_address,
      delivery_address: sub.delivery_address,
      preferred_delivery_date: sub.preferred_delivery_date,
      preferred_communication_method:  sub.preferred_communication_method,
      stripe_subscription_item_id: itemIds[index] || "",
      stripe_subscription_id: session.subscription,
    }));
    // return res.status(200).json(new_subscriptions);
    await Subscription.bulkCreate(new_subscriptions).then((subscriptions) => {
      return res.status(200).json({
        message: "Subscriptions added successfully.",
        subscriptions: subscriptions,
      });
    });
  } catch (error) {
    console.log(error, "e***");
    return res.status(500).send(error.message || "Internal Server Error");
  }
};

// update_user_subscriptions
exports.update_user_subscriptions = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send("user authentication failed.");
  }
  const subscriptionId = req.params.id;

  const { name, image, price, quantity, plan } = req.body;

  try {
    const user = await User.findOne({ authorization: authorization });
    if (!user) {
      return res
        .status(403)
        .send("User does not have permission to access the resources.");
    }
    const subscription = await Subscription.findOne({
      id: subscriptionId,
      user_id: user.id,
    });

    if (!subscription) {
      return res.status(404).send("subscription not found.");
    }

    subscription.name = name;
    subscription.image = image;
    subscription.price = price;
    subscription.quantity = quantity;
    subscription.plan = plan;

    await subscription.save().then((subscription) => {
      return res.status(200).json({
        message: "subscription update successful",
        subscription: subscription,
      });
    });
  } catch (error) {
    return res.status(500).send("could not update subscription.");
  }
};

exports.delete_user_subscriptions = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send("User authentication failed due to missing or invalid token.");
  }

  const token = authorization.split(" ")[1]; // Extract the token from "Bearer <token>"
  const decoded = decodeToken(token);
  console.log(decoded, "&&&");
  if (!decoded) {
    return res.status(401).send("Invalid authorization token.");
  }
  const { subscriptionItemId, subscriptionId } = req.body;
  try {
    const user = await User.findByPk(decoded.id)
   
    if (!user) {
      return res
        .status(403)
        .send("User does not have permission to access the resources.");
    }
    const subscription = await Subscription.findAll({
      where: { stripe_subscription_id: subscriptionId, user_id: user.id },
    });
    console.log(subscription,"user***")
    if (!subscription) {
      return res.status(404).send("Subscription not found.");
    }

    if (subscription.length === 1) {
      await stripe.subscriptions.cancel(subscription[0].stripe_subscription_id);
    } else {
      await stripe.subscriptionItems.del(subscriptionItemId);
    }

    await Subscription.destroy({
      where: {
        stripe_subscription_item_id: subscriptionItemId,
        user_id: user.id,
      },
    });
    return res.status(200).send({
      message: "Subscription item successfully cancelled and deleted.",
    });
  } catch (error) {
    console.log(error,"()()()")
    if (error.statusCode === 404) {
      return res.status(404).send("Subscription item not found.");
    }

    return res.status(500).send("could not update subscription.");
  }
};

exports.change_password = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res
      .status(401)
      .send("User authentication failed due to missing or invalid token.");
  }
  const token = authorization.split(" ")[1]; // Extract the token from "Bearer <token>"
  const decoded = decodeToken(token);
  if (!decoded) {
    return res.status(401).send("Invalid authorization token.");
  }

  try {
    const user = await User.findByPk(decoded.id); // Assuming decoded token includes `{ id: userId }`
    if (!user) {
      return res.status(403).send("User not found.");
    }

    const { password,newPassword } = req.body; // Assuming the new password is sent in the request body
    const passwordMatch = await comparePasswords(password, user.password);
    if (!passwordMatch){
      return res.status(401).send("Invalid current password please try again");
    }
    if (!newPassword) {
      return res.status(400).send("New password is required.");
    }

    // Validate password complexity, length, etc. as needed

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password in the database
    user.password = hashedPassword;
    await user.save();

    return res.status(200).send({
      message: "Password updated successfully.",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).send(`Internal server error: ${error.message}`);
  }
};
exports.changePasswordVerification = async (req, res) => {
  
  try {
    const {email}=req.body;
    const user = await User.findOne({ where: { email } }); // Assuming decoded token includes `{ id: userId }`
    if (!user) {
      return res.status(403).send("User not found.");
    }

    const {newPassword } = req.body; // Assuming the new password is sent in the request body
    if (!newPassword) {
      return res.status(400).send("New password is required.");
    }

    // Validate password complexity, length, etc. as needed

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Update user's password in the database
    user.password = hashedPassword;
    user.is_forget_password = false;
    user.verification_code = null;
    await user.save();
    return res.status(200).send({
      message: "Password updated successfully.",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).send(`Internal server error: ${error.message}`);
  }
};
exports.checkVerfiedCode = async (req, res) => {
  try {
    const {code}=req.body;
    console.log(code,req.body,"++++")
    const user = await User.findOne({ where: { verification_code:code } }); 
    if (!user) {
      return res.status(403).send("Invalid Verification Code Please Try Again");
    }
    user.isVerified = true;
    user.verification_code = null;
    const savedUser = await user.save();
    if (!savedUser) {
      console.log("User save failed for user with code:", code);
      return res.status(500).send("Failed to update user. Please try again.");
    }
    
    console.log("User verified successfully:", user);
    return res.status(200).send({
      message: "Verified User",
    });
  
  } catch (error) {
    console.error("Error Verified User:", error);
    return res.status(500).send(`Internal server error: ${error.message}`);
  }
};
exports.getUserByEmail = async (req, res) => {
  try {
    const email=req.params?.email;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User Not Found' });
    }
    return res.status(200).json({
      message: "Subscriptions added successfully.",
      data: user,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

};
exports.forgetPassword = async (req, res) => {
  try {
    const email=req?.body?.email;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'Email Does not exist' });
    }
    const code = Math.floor(100000 + Math.random() * 900000);
    console.log(email,user,code, "7777")
    user.verification_code = code;
    user.is_forget_password = true;
    await user.save();
    await sendEmailNotification(email, code);
    return res.status(200).send({
      message: "Verification code send's successfully",
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

};
exports.EmailSubscription = async (req, res) => {
  try {
    const email=req?.body?.email;
    const userMessage="Thank you for subscribing to Uncle Platform! We are thrilled to have you join our community. Your support means a lot to us. Enjoy exploring our features, and don't hesitate to reach out if you need assistance. We're here to help you get the most out of your subscription!";
    const AdminMessage=`We are pleased to inform you that we have a new subscriber on Uncle Platform from ${email} email.`;

    await sendEmailNotificationSubscrption(email,userMessage);
    await sendEmailNotificationSubscrptionReceiver(email,AdminMessage)
    return res.status(200).send({
      message: "Subscription send's successfully",
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

};
exports.sendVerificationCode = async (req, res) => {
  try {
    console.log(req,"tyui")
    const email=req?.body;
    
    const user = await User.findOne({ where: email  });
  
    if (!user) {
      return res.status(404).json({ error: 'Email Does not exist' });
    }
    console.log(req?.body,email,user,"^^^")
    const code = Math.floor(100000 + Math.random() * 900000);
    user.verification_code = code;
    await user.save();
    await sendEmailNotification(email.email, code);
    return res.status(200).send({
      message: "Verification code send's successfully",
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

};
async function comparePasswords(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
async function sendEmailNotification(email,code) {
  // Configure the SMTP transporter
  console.log(email,"000")
  const transporter = nodemailer.createTransport({
    host: "gmail", // Your SMTP server host
    port: "465", // SMTP port (typically 587 for TLS, 465 for SSL)
    secure: false, // true for 465, false for other ports
    tls: {
      secure: false,
      ignoreTLS: true,
      rejectUnauthorized: false,
    },
    service: "gmail",
    auth: {
      user: config.email.systemEmail, // Your email address
      pass: config.email.emailPassword, // Your email password
    },
  });

  // Compose email message
  const mailOptions = {
    from: config.email.systemEmail , // Sender address
    to: email, // Receiver address
    subject: "Uncle Verification Code", // Email subject
    text: `Please don't Show to any one \n code:${code}`,
  };

  // Send email
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error, "###");
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
}
async function sendEmailNotificationSubscrption(email,message) {
  // Configure the SMTP transporter
  console.log(email,"000")
  const transporter = nodemailer.createTransport({
    host: "gmail", // Your SMTP server host
    port: "465", // SMTP port (typically 587 for TLS, 465 for SSL)
    secure: false, // true for 465, false for other ports
    tls: {
      secure: false,
      ignoreTLS: true,
      rejectUnauthorized: false,
    },
    service: "gmail",
    auth: {
      user: config.email.systemEmail, // Your email address
      pass: config.email.emailPassword, // Your email password
    },
  });

  // Compose email message
  const mailOptions = {
    from: config.email.systemEmail , // Sender address
    to: email, // Receiver address
    subject: "Uncle Subscription", // Email subject
    text:message,
  };

  // Send email"
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error, "###");
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
}
async function sendEmailNotificationSubscrptionReceiver(email,message) {
  // Configure the SMTP transporter
  console.log(email,"000")
  const transporter = nodemailer.createTransport({
    host: "gmail", // Your SMTP server host
    port: "465", // SMTP port (typically 587 for TLS, 465 for SSL)
    secure: false, // true for 465, false for other ports
    tls: {
      secure: false,
      ignoreTLS: true,
      rejectUnauthorized: false,
    },
    service: "gmail",
    auth: {
      user: config.email.systemEmail, // Your email address
      pass: config.email.emailPassword, // Your email password
    },
  });

  // Compose email message
  const mailOptions = {
    from:email , // Sender address
    to: config.email.systemEmail  , // Receiver address
    subject: "Uncle Subscription", // Email subject
    text:message,
  };

  // Send email"
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error, "###");
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
}