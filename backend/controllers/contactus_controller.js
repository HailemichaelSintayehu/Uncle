const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
const config = require("../config/config");
const Appliance = require("../models/appliance")(sequelize, DataTypes);

const ContactUs = require("../models/contactus")(sequelize, DataTypes);

exports.get_all_contactUs = async (req, res, next) => {
  try {
    await ContactUs.findAll().then((contactus) => {
      return res.status(200).json({ contactus: contactus });
    });
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
};

exports.createContact = async (req, res) => {
  const { name, phone, email, message,product_id } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send("Missing required fields.");
  }
  try {
    // Create a new contact message entry
    const newContact = await ContactUs.create({
      name,
      phone,
      email,
      message,
      product_id,
    });
    const appliance = await Appliance.findByPk(product_id);
    console.log(appliance,"777")
    await sendEmailNotification(name, email, message,appliance);
    // Respond with success and the contact information
    return res.status(201).json({
      message: "Contact message received successfully.",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return res.status(500).send("Could not process contact message.");
  }
};
async function sendEmailNotification(name, email, message,appliance) {
  // Configure the SMTP transporter
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
    from: { email }, // Sender address
    to: config.email.systemEmail, // Receiver address
    subject: appliance?"New Email for Product Question":"New Contact Form Submission", // Email subject
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n${appliance ? "Product name: " + (appliance.item_name || "") : ""}`,
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
