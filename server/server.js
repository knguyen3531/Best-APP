const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Adjust the path to serve static files from the 'client/dist' directory
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Include your routes
require('./routes/htmlRoutes')(app);

// Start the server
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
