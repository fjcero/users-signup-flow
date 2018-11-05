const userRepository = require('./repository');

module.exports = class SignUpController {
  constructor(app) {
    this.userRepository = new userRepository();
  }

  async signUp(req, res) {
    const { username, email } = req.body;

    // TODO: handle when user already exists
    try {
      await this.userRepository.create({ username, email });
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).json({
          error: { msg: 'Email is registered', code: 1, stack: err.stack, body: { ...req.body } },
        });
      }
    }

    res.json({});
  }

  async verify(req, res) {
    const { code } = req.params;
    res.json({});
  }
};
