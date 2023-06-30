const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    country: String,
    city: String,
    date: Date,
    image: String,
    activities: [
      {
        name: String,
        type: String,
        image: String,
      },
    ],
    photos: [
      {
        image: String,
        caption: String,
      },
    ],
    tips: [
      {
        tip: String,
      },
    ],
    foods: [
      {
        name: String,
        cuisine: String,
        image: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Destination", destinationSchema);
