const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

const absolutePath = path.join(__dirname, 'public');
const publicMiddleware = express.static(absolutePath);

app.use(publicMiddleware);
