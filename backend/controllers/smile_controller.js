const smileIdentityCore = require("smile-identity-core");
const WebApi = smileIdentityCore.WebApi;
const { sequelize } = require("../models");
const { DataTypes } = require("sequelize");

const User = require("../models/user")(sequelize, DataTypes);

exports.start = async (req, res, next) => {
  const id = req.body.user_id;
  const user_image_id = req.body.user_image_id;
  const user_image = req.body.user_image;
  try {
    const user = await User.findByPk(id);
    console.log(req.body,"******")
    const partner_id = "6941"; 
    const default_callback = "http://localhost:3001/";
    const api_key = "32e533d3-32ca-4ccc-82c6-76ca9d57c0bc";
    const sid_server = 0; // Set to 1 for production

    // Partner parameters for the job
    let job=1;
    const partner_params = {
      job_id: `job7`,
      user_id: "user2",
      job_type: 1, // Job type 1 typically indicates a basic ID validation job
    };

    // Image details - ensure these contain valid base64 encoded image data
    const image_details = [
      {
        image_type_id: 0, // Typically 0 for selfie images
        image:user?.user_image , // Replace with actual base64 encoded selfie image
      },
    ];

    // ID info
    const id_info = {
      first_name: user?.firstname,
      last_name: user?.lastname,
      country: "KE", // Kenya
      id_type: "NATIONAL_ID",
      id_number: "12345678",
      entered: true, // Indicates that the information was entered manually
      email:user?.email
      
    };

    // Options for the job submission
    const options = {
      return_job_status: true,
      return_history: true,
      return_image_links: false,
    };

    // Initialize the WebApi connection
    const connection = new WebApi(partner_id, default_callback, api_key, sid_server);

    // Submit the job and get the response
    const response = await connection.submit_job(partner_params, image_details, id_info, options);

    // Log and return the response
    console.log(response,"Finalize");
    return response;
  } catch (error) {
    // Handle and log any errors
    console.error("An error occurred:", error.message);
    throw error; // Re-throw the error if you want to propagate it further
  }
        
};