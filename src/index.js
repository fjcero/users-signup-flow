const express = require('express');

// TODO: move this to .env
const PORT = 3000;

const app = express();

// Register Users endpoints
require('./users')(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
