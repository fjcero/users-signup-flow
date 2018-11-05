const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://upstack:nUdDA3J23cNbEGJ@ds153093.mlab.com:53093/upstack-backend',
  { useNewUrlParser: true }
);

const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, lowercase: true, unique: true },
  verified: Boolean,
});

const User = mongoose.model('User', UserSchema);

module.exports = class UsersRepository {
  constructor() {}

  _prepareUserInput(user) {
    return user;
  }

  async create(user) {
    const u = new User(this._prepareUserInput(user));
    try {
      return await u.save();
    } catch(e) {
      throw e;
    }
  }
};
