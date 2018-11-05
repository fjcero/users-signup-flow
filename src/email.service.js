const gmailSend = require('gmail-send');

module.exports = class EmailService {
  constructor() {
    this.config = {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    };

    this.transporter = gmailSend(this.config);
  }

  async sendMail(opts) {
    const mailOptions = {
      ...this.config,
      to: opts.user.email,
      subject: opts.subject,
      html: opts.html,
    };

    this.transporter(mailOptions, (err, info) => {
      if (err) console.log(err);

      console.log(info);
    });
  }
};
