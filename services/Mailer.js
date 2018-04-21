const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
const http = require('https');

sgMail.setApiKey(keys.sendGridKey);

class Mailer {
  constructor({ subject, recipients }, content) {
    this.message = {};
    this.message.from = 'test1@emaily.com';
    this.message.subject = subject;
    this.message.html = content;
    this.message.to = this.formatAddresses(recipients);
    this.message.html = content;
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return email;
    });
  }

  async send() {
    const response = await sgMail.sendMultiple(this.message);
    return response;
  }
}

module.exports = Mailer;
