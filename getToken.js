const axios = require('axios');

// Define the request data for obtaining the authentication token
const requestData = {
  companyName: 'Affordmed',
  clientID: '438fef6c-ca27-40b1-b6e4-7e68df4cc71b',
  clientSecret: 'GpzDszPvweGxRQco',
  ownerName: 'Sanket Srivastava',
  ownerEmail: 'srivastavasanket95@gmail.com',
  rollNo: '2001641550030',
};

// Make the POST request to the authentication endpoint
axios.post('http://20.244.56.144/train/auth', requestData)
  .then(response => {
    // Handle the response data
    const { token_type, access_token, expires_in } = response.data;
    console.log('Token Type:', token_type);
    console.log('Access Token:', access_token);
    console.log('Expires In:', expires_in);

    // You can use the access_token for further authenticated API requests.
  })
  .catch(error => {
    // Handle any errors
    console.error('Token request failed:', error);
  });
