const express = require('express');
const { exec } = require('child_process');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;

app.use(express.json());

app.post('/trigger-script', (req, res) => {
  const { token } = req.body;

  if (token === 'bewboh-diwjY1-minsuh') {
    // Replace 'path/to/script.sh' with the actual path to your shell script
    exec('sh /home/lokesh/mini-project/trigger.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${error}`);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        console.log(`Script executed successfully:\n${stdout}`);
        res.json({ message: 'Script executed successfully' });
      }
    });
  } else {
    res.status(403).json({ error: 'Invalid token' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

