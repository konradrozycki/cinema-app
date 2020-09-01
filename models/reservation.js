const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const Schema = mongoose.Schema;

// Create a schema
const reservationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  tickets: {
    type: Number,
    required: true,
  },
  seats: {
    type: [String],
    required: true,
  },
  user: {
    type: ObjectID,
  },
});

// Create a model
const Reservation = mongoose.model("reservation", reservationSchema);

// Export the model
module.exports = Reservation;
