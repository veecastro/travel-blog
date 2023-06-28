const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      activities: [
        {
          name: {
            type: String,
            required: true
          },
          type: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          image: {
            type: String,
            required: true
          }
        }
      ],
      photos: [
        {
          image: {
            type: String,
            required: true
          },
          caption: {
            type: String,
            required: true
          }
        }
      ],
      tips: [
        {
          tip: {
            type: String,
            required: true
          }
        }
      ],
      food: [
        {
          name: {
            type: String,
            required: true
          },
          cuisine: {
            type: String,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          image: {
            type: String,
            required: true
          }
        }
      ]
    });

    
    // Compile our model based on the schema and export it
    module.exports = mongoose.model('Destination', destinationSchema);

