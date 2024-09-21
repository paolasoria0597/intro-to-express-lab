
const express = require('express');
const app = express()

app.get('/greetings/userName', (req, res) => { 
    console.log(req.params.userName); 
    res.send(`Hello there, ${req.params.userName}`);
  });

  // Start the server after everything is defined
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});