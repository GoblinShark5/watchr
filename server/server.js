// import express, { json, urlencoded } from 'express';
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routes/api');

// const router = express.Router();
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('build'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/api', apiRouter);

app.use((req, res) =>
  res.status(404).send('Unable to find page'),
);

app.use((err, req, res) => {
  res.status(500).send('A global error occurred');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000');
});

//module.exports = app;
