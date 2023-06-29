var express = require('express');
var router = express.Router();

const destinationCtrl = require('../controllers/destinations');

/* GET users listing. */

router.get('/index', destinationCtrl.destinationList);
router.get('/new', destinationCtrl.destinationNewPost);
router.get('/:id/show', destinationCtrl.destinationShowPost);
router.post('/', destinationCtrl.destinationCreatePost);
router.delete('/:id', destinationCtrl.destinationDeletePost);
router.get('/:id/edit', destinationCtrl.destinationEditPost);
router.put('/:id', destinationCtrl.destinationUpdatePost)

module.exports = router;
