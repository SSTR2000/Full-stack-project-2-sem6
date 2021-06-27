const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoomSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['HYGEINE', 'ELECTRICITY','FOOD','OTHER']
  },
  block: {
    type: String,
    enum: ['PG 1', 'PG 2', 'PG 3', 'PG 4'],
    required: true,
    trim: true
  },
  incharge: {
    type: String,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  }
});

module.exports = Student = mongoose.model("room", RoomSchema);
