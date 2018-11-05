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

      // Hash will be id (for now)
      // TODO: const code = md5(`${user._doc._id}${user._doc.email}`);
      const code = user._doc._id;

      // Send email to user
      await this.emailService.sendMail({
        user: { ...user._doc },
        subject: 'Verify your account',
        html: `
          <p>
            <a href="http://localhost:3000/users/verify/${code}">Click to verify your account</a>
          </p>
        `,
      });

      res.json({ ...user });
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

    try {
      const user = await this.userRepository.get({ _id: code });

      if (user.verified !== true) {
        await this.userRepository.verify(user);
      } else {
        res.status(409).json({
          error: {
            msg: `Account already verified`,
            code: 3,
            body: { ...req.params, ...user },
          },
        });
      }

      res.json(user);
    } catch (err) {
      res.status(404).json({
        error: {
          msg: `Verification code don't exists`,
          code: 2,
          stack: err.stack,
          body: { ...req.params },
        },
      });
    }
  }
};
