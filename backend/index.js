require("dotenv").config();
const express = require("express");
const database = require("./models/index");
const { sequelize } = require("./models");
const { DataTypes } = require("sequelize");

var cors = require("cors");

const Appliance = require("./models/appliance")(sequelize, DataTypes);
const data = require("./data/appliances");

const user_routes = require("./routes/user_routes");
const appliance_routes = require("./routes/appliance_routes");
const contactus_route = require("./routes/contactus_routes");
const kyc_route = require('./routes/kyc_routes')

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: [
    "https://appliannce-rental-platform.vercel.app/",
    "http://localhost:3000",
  ],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main application routes calls
app.use(user_routes);
app.use(appliance_routes);
app.use(contactus_route);
app.use(kyc_route);

// load database
(async function populate_database() {
  try {
    const count = await Appliance.count();
    if (count === 0 || count < data.length) {
      await Appliance.bulkCreate(data);
      console.log("database populated successfully");
    }
  } catch (error) {
    console.error("Error populating database", error);
  }
})();

// function to start server
(async () => {
  try {
    await database.sequelize.sync().then(() => {
      app.listen(port, () => {
        console.log(`App running on port ${port}`);
      });
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
