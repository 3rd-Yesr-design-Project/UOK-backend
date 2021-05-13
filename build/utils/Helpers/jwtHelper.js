'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JwtHelper = function () {
  function JwtHelper() {
    _classCallCheck(this, JwtHelper);
  }

  _createClass(JwtHelper, [{
    key: 'createResultLoginToken',
    value: function createResultLoginToken(userId, userType, email) {
      var payload = {
        userId: userId,
        userType: userType,
        email: email
      };

      return _jsonwebtoken2.default.sign(payload, process.env.JWT_SECRET_KEY);
    }
  }, {
    key: 'createSocialLoginToken',
    value: function createSocialLoginToken(userId, userType, email) {
      var payload = {
        userId: userId,
        userType: userType,
        email: email
      };

      return _jsonwebtoken2.default.sign(payload, process.env.JWT_SECRET_KEY);
    }
  }]);

  return JwtHelper;
}();

var jwtHelper = new JwtHelper();
exports.default = jwtHelper;