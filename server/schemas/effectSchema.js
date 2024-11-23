const mongoose = require('mongoose');

const effectSchema = new mongoose.Schema({
  type: { type: String, required: true },
  value: { type: Number, required: true },
  target: { type: String, required: true },
  description: { type: String, required: true },
  isBeneficial: { type: Boolean, required: true }
});

module.exports = effectSchema;
