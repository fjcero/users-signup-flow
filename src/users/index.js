const express = require('express');
const Controller = require('./controller');

module.exports = app => {
  const router = express.Router();
  const userController = new Controller(app);

  app.use('/users/', router);

  // Config
  router.use(express.json());

  // Endpoints
  router.post('/signup', (req, res) => userController.signUp(req, res));
  router.get('/verify/:code', (req, res) => userController.verify(req, res));
};
