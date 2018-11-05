const nodemailer = require('nodemailer');

module.exports = class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zonamailbox@gmail.com',
        pass: 'Bb123456!',
      },
    });
  }

  async sendMail(opts) {
    const mailOptions = {
      from: 'zonamailbox@gmail.com',
      to: opts.user.email,
      subject: opts.subject,
      html: opts.message,
    };

    this.transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);

      console.log('Message sent: %s', info.messageId);
      console.log(info);
    });
  }
};
