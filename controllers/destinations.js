
const Destination = require('../models/destination');

module.exports = {
  destinationList,
  destinationSingle,
  destinationNewPost,
  destinationCreatePost,
  destinationEditPost,
  destinationUpdatePost,
  destinationDeletePost

};

async function destinationList(req, res) {
  try {
    const destinations = await Destination.find({});
    res.render('destinations', { destinations });
  } catch (err) {
    console.log(err);
    res.render('error', { errorMsg: 'Error retrieving destinations' });
  }
}

async function destinationSingle(req, res) {
    try {
        const destinationSingle = await Destination.findById(req.params.id);
        res.render('destination', { destination: destinationSingle });
    } catch (err) {
        console.log(err);
        res.render('error', { errorMsg: 'Error retrieving destination' });
    }
}

function destinationNewPost(req, res) {
    res.render('new', { errorMsg: '' });
  }
  
  async function destinationCreatePost(req, res) {
  try {
    const destinationNewPost = {
        name: req.body.name,
        country: req.body.country,
        city: req.body.city,
        date: req.body.date,
        image: req.body.image,
        activities: [
          {
            name: req.body.activityName,
            type: req.body.activityType,
            price: req.body.activityPrice,
            image: req.body.activityImage
          }
        ],
        photos: [
          {
            image: req.body.photoImage,
            caption: req.body.photoCaption
          }
        ],
        tips: [
          {
            tip: req.body.tip
          }
        ],
        food: [
          {
            name: req.body.foodName,
            cuisine: req.body.foodCuisine,
            price: req.body.foodPrice,
            image: req.body.foodImage
          }
        ]
      };
      
    await Destination.create(destinationNewPost);
    res.redirect('/destinations');
  } catch (err) {
    console.log(err);
    res.render('new', { errorMsg: err.message});
  }
}

async function destinationEditPost(req, res) {
    try {
        destination.country = req.body.country;
        destination.city = req.body.city;
        destination.image = req.body.image;
        destination.date = req.body.date;
        destination.activities = [
          {
            name: req.body.activityName,
            type: req.body.activityType,
            price: req.body.activityPrice,
            image: req.body.activityImage
          }
        ];
        destination.photos = [
          {
            image: req.body.photoImage,
            caption: req.body.photoCaption
          }
        ];
        destination.tips = [
          {
            tip: req.body.tip
          }
        ];
        destination.food = [
          {
            name: req.body.foodName,
            cuisine: req.body.foodCuisine,
            price: req.body.foodPrice,
            image: req.body.foodImage
          }
        ];
        
        await destination.save();
        res.redirect('/destinations');
    } catch (err) {
        console.log(err);
        res.render('edit', { errorMsg: err.message });
    }
    }

    async function destinationUpdatePost(req, res) {
        try {
            const destination = await Destination.findById(req.params.id);
            res.render('edit', { destination, errorMsg: '' });
        } catch (err) {
            console.log(err);
            res.render('error', { errorMsg: 'Error retrieving destination' });
        }
    }


    async function destinationDeletePost(req, res) {
        try {
            await Destination.findByIdAndDelete(req.params.id);
            res.redirect('/destinations');
        } catch (err) {
            console.log(err);
            res.render('error', { errorMsg: 'Error deleting destination' });
        }
    }

