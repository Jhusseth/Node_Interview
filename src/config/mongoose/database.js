'use strict';
const mongoose = require('mongoose');

var mongoDB  = "mongodb+srv://jhusseth:<filipjfray>@cluster0.kpkb1.mongodb.net/<test_interview>?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.connection.once('open', () => {
    console.log('We are connected');
});

module.exports = mongoose;