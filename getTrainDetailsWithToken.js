const axios = require('axios');

// Define the Authorization Token (replace 'YOUR_TOKEN' with the actual token)
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY1NzM2NDMsImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiI0MzhmZWY2Yy1jYTI3LTQwYjEtYjZlNC03ZTY4ZGY0Y2M3MWIiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAwMTY0MTU1MDAzMCJ9.KByk5cCa-QM-xbCb2-SYJ48XmjOVW41XkUuwzeVoJ4Q';

// Define request headers
const headers = {
  Authorization: `Bearer ${authToken}`
};

// Make the GET request to retrieve details for train number 2344
axios.get('http://20.244.56.144/train/trains/2344', { headers })
  .then(response => {
    // Handle the response data
    const trainDetails = response.data;
    console.log('Train details:', trainDetails);
  })
  .catch(error => {
    // Handle any errors
    console.error('Failed to retrieve train details:', error);
  });
