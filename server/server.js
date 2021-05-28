const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routes/api');

// Instantiate Express application
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Requests for static file are responded with the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Requests made to / are responded with index.html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// Requests made to /api are routed to api.js
app.use('/api', apiRouter);

// Any other requests are responded with a 404 status
app.use((req, res) =>
  res.status(404).send('Unable to find page'),
);

// Global error handler (triggered when next is invoked with argument)
app.use((err, req, res) => {
  res.status(500).send(err);
});

// Start listening at port 3000
app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});
