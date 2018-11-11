const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const emails = require('./routes/api/emails');

// Initialize app
const app = express();

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Use Routes
app.use('/api/emails', emails);

//Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on TCP port ${port}`);
});
