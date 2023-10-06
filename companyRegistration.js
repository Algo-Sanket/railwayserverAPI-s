const axios = require('axios');

// Define the request data
const requestData = {
  companyName: 'Affordmed',
  ownerName: 'Sanket Srivastava',
  rollNo: '2001641550030',
  ownerEmail: 'srivastavasanket95@gmail.com',
  accessCode: 'PGsiuz'
};

// Make the POST request to the API endpoint
axios.post('http://20.244.56.144/train/register', requestData)
  .then(response => {
    // Handle the response data
    console.log('Registration successful:', response.data);
    // Save clientID and clientSecret securely
  })
  .catch(error => {
    // Handle any errors
    console.error('Registration failed:', error);
  });
