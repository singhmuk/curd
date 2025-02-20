const express = require('express');
const { exec } = require('child_process');
const userRoutes = require('./routes/user');

const app = express();
const port = 8000; // Updated to match Nginx's proxy_pass

app.use(express.json());

// Endpoint to handle webhook requests under /api/webhook
app.post('/api/webhook', (req, res) => {
  console.log('Received webhook payload:', req.body);

  // Optionally, validate GitHub's payload signature for security

  // Trigger the deploy script (ensure the path is correct)
  exec('/home/ubuntu/curd/deploy.sh', (error, stdout, stderr) => {
    if (error) {
      console.error('Deployment error:', error);
      return res.status(500).send('Deployment failed');
    }
    console.log('Deployment output:', stdout);
    res.send('Deployment triggered successfully');
  });
});

// Mount user routes under /api/users
app.use('/api/users', userRoutes);

// Listen on all interfaces so that external requests are accepted
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
