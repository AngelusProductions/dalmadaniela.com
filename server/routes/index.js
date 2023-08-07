const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const stripeController = require('../controllers/stripeController');
const blogController = require('../controllers/blogController');

router.post(
  '/signup',
  userController.validateSignup,
  catchErrors(userController.createUser),
  authController.login
);

router.post('/stripe', stripeController.processPayment);

router.post('/auth/jwt', authController.decodeJwt);

router.post('/auth/password', authController.login);

router.post('/blogposts', blogController.getAllBlogPosts);
router.post('/blogposts/create', blogController.createBlogPost);

module.exports = router;
