const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const { decodeToken } = require("../middleware/decodeToken");
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");

const User = require("../models/user")(sequelize, DataTypes);

exports.checkout_cart = async (req, res, next) => {
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

  

  if (!decoded) {
    return res.status(401).send("Invalid authorization token.");
  }


  const { items } = req.body;
  try {
    const user = await User.findByPk(decoded.id)
    if (!user) {
      return res.status(403).send("User does not have permission to access the resources.");
    }
  console.log(items,"****")
    const line_items = items.map((item) => {
      const price_data = {
        currency: "kes",
        product_data: {
          name: item.appliance_id,
          description: item.option === "buy" ? "With Buying Option" :
                       item.option === "rental" ? `With Rental Option, Billed monthly for  ${item.plan} months ` : item.option === "refundable"?  `Refundable payment`:
                       `With Pay Upfront of ${item.plan} months Subscription`,
        },
        unit_amount: item.price * 100,
      };

      if (item.option !== "buy") {
        price_data.recurring = {
          interval: "month",
          interval_count: item.plan,
          
        };
      }

      return {
        price_data: price_data,
        quantity: item.quantity,
      };
    });

    const hasRecurringItems = items.some(item => item.option !== "buy");
    const session_params = {
      payment_method_types: ["card"],
      line_items: line_items,
      success_url: `${process.env.FRONT_END_URL}/checkout/success`,
      cancel_url: `${process.env.FRONT_END_URL}/checkout/failed`,
      mode: hasRecurringItems ? "subscription" : "payment",
    };

    const stripe_session = await stripe.checkout.sessions.create(session_params);
    console.log(user,"()")
    user.stripeSessionId = stripe_session.id;
    await user.save();

    return res.status(200).json({
      message: "Checkout session created successfully.",
      url: stripe_session.url,
    });
  } catch (error) {
    return res.status(400).send(`Error creating a checkout session. Please try again. ${error.message}`);
  }
};