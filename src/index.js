const express = require('express');

const PORT = 3000;

const app = express();

require('./users')(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
