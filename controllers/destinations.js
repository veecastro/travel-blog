
const Destination = require('../models/destination');

module.exports = {
  destinationList,
  destinationShowPost,
  destinationNewPost,
  destinationCreatePost,
  destinationEditPost,
  destinationUpdatePost,
  destinationDeletePost

};

async function destinationList(req, res) {
  try {
    const destinations = await Destination.find({});
    res.render('destinations/index', { destinations, title: 'all destinations' });
  } catch (err) {
    console.log(err);
    res.render('error', { errorMsg: 'Error retrieving destinations', error: err });
  }
}


async function destinationShowPost(req, res) {
  try {
    const destination = await Destination.findById(req.params.id);
    res.render('destinations/show', { destination, title: 'Destination Details' });
  } catch (err) {
    console.log(err);
    res.render('error', { errorMsg: 'Error retrieving destination' });
  }
}

function destinationNewPost(req, res) {
    res.render('destinations/new', { errorMsg: '' });
  }

  async function destinationCreatePost(req, res) {
    try {
      const newDestination = {
        country: req.body.country,
        city: req.body.city,
        date: req.body.date,
        image: req.body.image,
        activities: [],
        photos: [],
        tips: [],
        foods: []
      };

      // for (let i = 0; i < req.body.photos.length; i++) {
      //   const photo = {
      //     image: req.body.photos[i].image,
      //     caption: req.body.photos[i].caption
      //   };
      //   newDestination.photos.push(photo);
      // }
  
      await Destination.create(newDestination);
      res.redirect('/destinations/index');
    } catch (err) {
      console.log(err);
      res.render('destinations/new', { errorMsg: err.message });
    }
  }
  
  async function destinationEditPost(req, res) {
    try {
      const destination = await Destination.findById(req.params.id);
      res.render('destinations/edit', { title: 'Edit destination', destination });
    } catch (err) {
      console.log(err);
    }
  }

  async function destinationUpdatePost(req, res) {
    try {
      await Destination.findByIdAndUpdate(req.params.id, req.body);
      const destinations = await Destination.find({});
      res.render('destinations/index', { destinations, title: 'all destinations' });
    } catch (err) {
      console.log(err);
      res.render('error', { errorMsg: 'Error updating destination', error: err });
    }
  }

     async function destinationDeletePost(req, res) {
        try {
            await Destination.findByIdAndRemove(req.params.id);
            // const destinations = await Destination.find({});
            res.redirect('/destinations/');
        } catch (err) {
            console.log(err);
            res.render('error', { errorMsg: 'Error deleting destination' });
        }
    }

