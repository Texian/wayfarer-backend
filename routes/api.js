const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// Path starts at 'api/v1'

// -------- User Routes
router.get('/users', ctrl.users.index)
router.get('/users/:id', ctrl.users.show);
router.post('/users', ctrl.users.create);
router.put('/users/:id', ctrl.users.update);


//posts
// router.get('/posts', ctrl.posts.index);
// router.get('/posts/:id', ctrl.posts.show);
// router.post('/posts', ctrl.posts.create);
// router.put('/posts/:id', ctrl.posts.update);
// router.delete('/posts/:id', ctrl.posts.destroy);

//Cities
router.get('/cities', ctrl.cities.index);
router.get('/cities/:id', ctrl.cities.show);
router.post('/cities', ctrl.cities.create);
router.put('/cities/:id', ctrl.cities.update);
router.delete('/cities/:id', ctrl.cities.destroy);

module.exports = router;