const { smileIdConfig } = require("../utils/smileIdService");
const smileIdentityCore = require("smile-identity-core");
const { v4: uuidv4 } = require("uuid");
const WebApi = smileIdentityCore.WebApi;

exports.initiateSmileId = async (req, res) => {
  const { selfieImage, country, id_type, id_number} = req.body;
  const connection = new WebApi(
    smileIdConfig.partnerId,
    smileIdConfig.callbackUrl,
    smileIdConfig.apiKey,
    smileIdConfig.sidServer
  );

  let partner_params = {
    job_id: uuidv4(),
    user_id: uuidv4(),
    job_type: 1,
  };

  let image_details = [
    {
      image_type_id: 2,
      image: selfieImage,
    },
  ];

  let id_info = {
    country: country,
    id_type: id_type,
    id_number: id_number,
    entered: "true",
  };

  let options = {
    return_job_status: true,
    return_history: true,
    return_image_links: false,
    signature: true,
  };

  try {
    const data = await connection.submit_job(
      partner_params,
      image_details,
      id_info,
      options
    );

    if (!req.body.userId) {
      return res.status(404).json({ message: "User not found" });
    }

    if (data.job_success) {
      const updatedUser = await User.findByIdAndUpdate( req.body.userId,
        { isVerified: true },
        { new: true }
      );

      return res.status(200).json({ message: "User verified successfully", user: updatedUser });
    } else {
      return res.status(400).json({ message: "User verification failed", error: data });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "User verification failed", error: error.message });
  }
};
