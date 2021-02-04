'use strict';
const mongoose = require('../config/mongoose/database'),
  dataSchema = require('../config/schemas/schemas').dataSchema;

const models = {
    Accommodation: mongoose.model('Accommodation', dataSchema)
};

module.exports = models;