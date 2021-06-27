const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  batch: {
    type: String,
    required: true,

  },
  id: {
    type: String,
    unique: true,
  },
  room: {
    type: String,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE'],
    required: true,
  }
});

module.exports = Student = mongoose.model("student", StudentSchema);
