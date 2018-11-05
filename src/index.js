const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ silent: true });

const PORT = process.env.APP_PORT;

const app = express();

// Register Users endpoints
require('./users')(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
