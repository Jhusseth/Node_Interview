'use strict';
const mongoose = require('mongoose');

var mongoDB = require('../keys');

mongoose.connect(mongoDB.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.connection.once('open', () => {
    console.log('We are connected');
});

module.exports = mongoose;