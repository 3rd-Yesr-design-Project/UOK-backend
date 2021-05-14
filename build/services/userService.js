'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:20:59
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-13 23:23:03
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _userRepository = require('../repositories/userRepository');

var _userRepository2 = _interopRequireDefault(_userRepository);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jwtHelper = require('../utils/Helpers/jwtHelper');

var _jwtHelper2 = _interopRequireDefault(_jwtHelper);

var _studentRepository = require('../repositories/studentRepository');

var _studentRepository2 = _interopRequireDefault(_studentRepository);

var _lecturerRepository = require('../repositories/lecturerRepository');

var _lecturerRepository2 = _interopRequireDefault(_lecturerRepository);

var _emailTemplateHelper = require('../utils/Helpers/emailTemplateHelper');

var _emailTemplateHelper2 = _interopRequireDefault(_emailTemplateHelper);

var _emailService = require('./emailService');

var _emailService2 = _interopRequireDefault(_emailService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, [{
    key: 'socialLogin',
    value: async function socialLogin(requestBody) {
      var email = requestBody.email,
          password = requestBody.password;

      var user = await _userRepository2.default.fetchUserByEmail(email);
      if (!user) {
        throw new Error('Your email is incorrect');
      }
      console.log(user);
      var isMatch = await _bcrypt2.default.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        throw new Error('Your password is not Match');
      }

      var token = _jwtHelper2.default.createSocialLoginToken(user.id, user.user_type, user.email);
      var loginUser = {
        id: user.id,
        name: user.name,
        user_type: user.user_type,
        studentNo: user.student_no
      };
      return { loginUser: loginUser, token: token };
    }
  }, {
    key: 'resultLogin',
    value: async function resultLogin(requestBody) {
      var email = requestBody.email,
          password = requestBody.password;

      console.log(email);

      var user = await _userRepository2.default.fetchUserByEmail(email);
      if (!user) {
        throw new Error('Your email is incorrect');
      }
      var isMatch = await _bcrypt2.default.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Your password is not Match');
      }

      var token = _jwtHelper2.default.createResultLoginToken(user.id, user.user_type, email);
      var loginUser = {
        id: user.id,
        name: user.name,
        user_type: user.user_type,
        profile: user.profile,
        student: user.student ? user.student : null
      };
      return { loginUser: loginUser, token: token };
    }
  }, {
    key: 'addUser',
    value: async function addUser(requestBody) {
      //remove after create the project
      var userType = requestBody.userType,
          password = requestBody.password,
          email = requestBody.email,
          name = requestBody.name;


      var salt = await _bcrypt2.default.genSalt(10);
      var newPassword = await _bcrypt2.default.hash(password, salt);

      var body = {
        user_type: userType,
        name: name,
        email: email,
        password: newPassword
      };

      return _userRepository2.default.createUser(body);
    }
  }, {
    key: 'fetchUsers',
    value: async function fetchUsers() {
      // const students = await studentRepository.fetchStudents();
      // const lecturers = await lecturerRepository.fetchLecturers();

      // const friend = [...students, ...lecturers];
      // return friend;
      return _userRepository2.default.fetchUsers();
    }
  }, {
    key: 'fogetPassword',
    value: async function fogetPassword(requestBody) {
      var email = requestBody.email;

      var existUser = await _userRepository2.default.fetchUserByEmail(email);
      if (!existUser) {
        throw new Error('Your Email does not exist');
      }
      var link = process.env.MAIN_URL + '/resetPassword/' + existUser.id;
      var subject = 'Reset Your Password';
      var template = _emailTemplateHelper2.default.forgetPasswordTemplate(link);
      _emailService2.default.sendMail(email, subject, template);
      return;
    }
  }, {
    key: 'resetPassword',
    value: async function resetPassword(userId, requestBody) {
      var password = requestBody.password;

      var salt = await _bcrypt2.default.genSalt(10);
      var newPassword = await _bcrypt2.default.hash(password, salt);
      var body = {
        password: newPassword
      };

      return _userRepository2.default.updateUserByUserId(userId, body);
    }
  }, {
    key: 'userSearch',
    value: function userSearch(requestBody) {
      var name = requestBody.name;

      return _userRepository2.default.userSearch(name);
    }
  }, {
    key: 'whoAmI',
    value: function whoAmI(user) {
      return _userRepository2.default.fetchUserByEmail(user.email);
    }
  }]);

  return UserService;
}();

var userService = new UserService();
exports.default = userService;