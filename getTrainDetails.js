const axios = require('axios');

// Define the Authorization Token (replace 'YOUR_TOKEN' with the actual token)
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTY1NzMzMDksImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiI0MzhmZWY2Yy1jYTI3LTQwYjEtYjZlNC03ZTY4ZGY0Y2M3MWIiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAwMTY0MTU1MDAzMCJ9.n23zibD7nJAjtuaXEwYXTQWIzr_rt7JDvbMyG22o3lY';

// Define request headers
const headers = {
  Authorization: `Bearer ${authToken}`
};

// Make the GET request to retrieve train details
axios.get('http://20.244.56.144/train/trains', { headers })
  .then(response => {
    // Handle the response data
    const trainDetails = response.data;
    console.log('Train details:', trainDetails);
  })
  .catch(error => {
    // Handle any errors
    console.error('Failed to retrieve train details:', error);
  });
