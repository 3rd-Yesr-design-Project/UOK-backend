import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  '569042713265-2aa4nougdukn643itu0q654r8oh2rjre.apps.googleusercontent.com',
  'i6S-GJgeUUIcnlkdd85__8vp', // Client Secret
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token:
    '1//048wrHzE8OQhPCgYIARAAGAQSNgF-L9IrL55JhsGWOClAtL0CxVA0zicjMvSjFcRb8otqmVMUza5NzgJMkFTxscGbqqUWR8LyjA',
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'shakthi.10jaya@gmail.com',
    clientId:
      '569042713265-2aa4nougdukn643itu0q654r8oh2rjre.apps.googleusercontent.com',
    clientSecret: 'i6S-GJgeUUIcnlkdd85__8vp',
    refreshToken:
      '1//048wrHzE8OQhPCgYIARAAGAQSNgF-L9IrL55JhsGWOClAtL0CxVA0zicjMvSjFcRb8otqmVMUza5NzgJMkFTxscGbqqUWR8LyjA',
    accessToken: accessToken,
  },
});

class EmailService {
  async sendMail(email, subject, template) {
    const mailOptions = {
      from: 'shakthi.10jaya@gmail.com',
      to: email,
      subject: subject,
      generateTextFromHTML: true,
      html: template,
    };

    // smtpTransport.sendMail(mailOptions, (error, response) => {
    //   error ? console.log(error) : console.log(response);
    //   smtpTransport.close();
    // });

    return await new Promise((resolve, reject) => {
      return smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email Not Sent', error);
          return reject(error);
        } else {
          smtpTransport.close();
          console.log('Email sent: ' + info.response);
          return resolve(info);
        }
      });
    });
  }
}

export default new EmailService();
