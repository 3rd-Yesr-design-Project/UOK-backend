'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _googleapis = require('googleapis');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OAuth2 = _googleapis.google.auth.OAuth2;

var oauth2Client = new OAuth2('569042713265-2aa4nougdukn643itu0q654r8oh2rjre.apps.googleusercontent.com', 'i6S-GJgeUUIcnlkdd85__8vp', // Client Secret
'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: '1//048wrHzE8OQhPCgYIARAAGAQSNgF-L9IrL55JhsGWOClAtL0CxVA0zicjMvSjFcRb8otqmVMUza5NzgJMkFTxscGbqqUWR8LyjA'
});
var accessToken = oauth2Client.getAccessToken();

var smtpTransport = _nodemailer2.default.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'shakthi.10jaya@gmail.com',
    clientId: '569042713265-2aa4nougdukn643itu0q654r8oh2rjre.apps.googleusercontent.com',
    clientSecret: 'i6S-GJgeUUIcnlkdd85__8vp',
    refreshToken: '1//048wrHzE8OQhPCgYIARAAGAQSNgF-L9IrL55JhsGWOClAtL0CxVA0zicjMvSjFcRb8otqmVMUza5NzgJMkFTxscGbqqUWR8LyjA',
    accessToken: accessToken
  }
});

var EmailService = function () {
  function EmailService() {
    _classCallCheck(this, EmailService);
  }

  _createClass(EmailService, [{
    key: 'sendMail',
    value: async function sendMail(email, subject, template) {
      var mailOptions = {
        from: 'shakthi.10jaya@gmail.com',
        to: email,
        subject: subject,
        generateTextFromHTML: true,
        html: template
      };

      // smtpTransport.sendMail(mailOptions, (error, response) => {
      //   error ? console.log(error) : console.log(response);
      //   smtpTransport.close();
      // });

      return await new Promise(function (resolve, reject) {
        return smtpTransport.sendMail(mailOptions, function (error, info) {
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
  }]);

  return EmailService;
}();

exports.default = new EmailService();