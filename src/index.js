const express = require('express');
const server = express()

const app = express();

require('./controllers/authController')(app);

app.listen(3000);