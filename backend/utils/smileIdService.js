const axios = require('axios');

const smileIdConfig = {
  partnerId: 'your-partner-id',  
  apiKey: '25f13264-62d6-4e47-bc09-6bb066992451',        
  callbackUrl: 'https://api.smileidentity.com/uncle/callback' 
};


app.post('/api/initiate-document-verification', async (req, res) => {
  const { userId, documentImageFront, documentImageBack, selfieImage, userInfo } = req.body;

  const payload = {
    partner_id: smileIdConfig.partnerId,
    api_key: smileIdConfig.apiKey,
    callback_url: smileIdConfig.callbackUrl,
    job_type: 2, 
    user_id: userId,
    images: [
      { image_type_id: 1, image: documentImageFront },
      { image_type_id: 2, image: documentImageBack }, 
      { image_type_id: 0, image: selfieImage }
    ],
    user_info: userInfo
  };

  try {
    const response = await axios.post('https://api.smileidentity.com/v1/submit_job', payload);
    res.json(response.data);
  } catch (error) {
    console.error('Error initiating document verification:', error);
    res.status(500).json({ error: 'Document verification initiation failed' });
  }
});

app.post('/api/kyc-callback', async (req, res) => {
  const { user_id, job_status, result_code } = req.body; 

  try {
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.verified = job_status === 'completed' && result_code === '1012'; 
    await user.save();

    res.status(200).json({ message: 'User verification status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});