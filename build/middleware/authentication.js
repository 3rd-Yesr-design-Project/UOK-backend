'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resHelper = require('../utils/Helpers/resHelper');

var _resHelper2 = _interopRequireDefault(_resHelper);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _userRepository = require('../repositories/userRepository');

var _userRepository2 = _interopRequireDefault(_userRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authentication = function () {
  function Authentication() {
    _classCallCheck(this, Authentication);
  }

  _createClass(Authentication, [{
    key: 'GrantAccess',
    value: function GrantAccess() {
      return async function (req, res, next) {
        var token = req.headers.authorization;
        console.log(token);
        if (!token) {
          _resHelper2.default.unauthorized(res);
        }

        try {
          var payload = _jsonwebtoken2.default.verify(token, process.env.JWT_SECRET_KEY);
          console.log(payload);
          var isUser = await _userRepository2.default.fetchUserByEmail(payload.email);
          if (!isUser) {
            throw new Error('Your Email is Not Exist');
          }
          req.user = payload;
          next();
        } catch (error) {
          console.log(error);
          _resHelper2.default.unauthorized(res);
        }
      };
    }
  }]);

  return Authentication;
}();

exports.default = new Authentication();