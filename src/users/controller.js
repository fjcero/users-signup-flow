const md5 = require('md5');
const userRepository = require('./repository');
const emailService = require('../email.service');

module.exports = class SignUpController {
  constructor(app) {
    this.userRepository = new userRepository();
    this.emailService = new emailService();
  }

  async signUp(req, res) {
    const { username, email } = req.body;

    try {
      const user = await this.userRepository.create({ username, email });
      res.json({ ...user });

      // TODO: Email should be sent
      // hash will be id+email, for now
      // md5

    } catch (err) {
      // Handle if user already exists
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).json({
          error: { msg: 'Email is registered', code: 1, stack: err.stack, body: { ...req.body } },
        });
      }
    }
  }

  async verify(req, res) {
    const { code } = req.params;
    res.json({});
  }
};
