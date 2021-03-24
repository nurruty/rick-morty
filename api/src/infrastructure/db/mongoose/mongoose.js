'use strict';

const mongoose = require('mongoose');
const config = require('../../config');

const url = "mongodb://mongodb:27017"

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB database!');
});

module.exports = mongoose;
