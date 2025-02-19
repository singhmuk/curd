const express = require('express');
const { exec } = require('child_process');
const userRoutes = require('./routes/user');

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to handle webhook requests
app.post('/webhook', (req, res) => {
    console.log('Received webhook payload:', req.body);
  
    // Optionally, add validation of GitHub's payload signature here for security
  
    // Trigger the deploy script (adjust the path as needed)
    exec('/home/ec2-user/curd/deploy.sh', (error, stdout, stderr) => {
      if (error) {
        console.error('Deployment error:', error);
        return res.status(500).send('Deployment failed');
      }
      console.log('Deployment output:', stdout);
      res.send('Deployment triggered successfully');
    });
  });

  app.use('/users', userRoutes);
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
