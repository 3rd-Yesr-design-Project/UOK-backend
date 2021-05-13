'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:19:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-12 12:18:34
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _userService = require('../services/userService');

var _userService2 = _interopRequireDefault(_userService);

var _resHelper = require('../utils/Helpers/resHelper');

var _resHelper2 = _interopRequireDefault(_resHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserConatroller = function () {
  function UserConatroller() {
    _classCallCheck(this, UserConatroller);
  }

  _createClass(UserConatroller, [{
    key: 'socialLogin',
    value: async function socialLogin(req, res) {
      try {
        var user = await _userService2.default.socialLogin(req.body);
        _resHelper2.default.responseData(res, user);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'resultLogin',
    value: async function resultLogin(req, res) {
      try {
        var user = await _userService2.default.resultLogin(req.body);
        _resHelper2.default.responseData(res, user);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'createProfile',
    value: async function createProfile(req, res) {
      try {
        var userId = req.params.userId;
        var user = await _userService2.default.createProfile(userId, req.body);
        _resHelper2.default.updated(res);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }

    // async fetchUserById(req, res) {
    //   try {
    //     const user = await userService.fetchUserById(req.params.userId);
    //     console.log('xxxxxxxxxxxxxxx'.user);
    //     resHelper.responseData(res, user);
    //   } catch (error) {
    //     resHelper.serverFailing(res, error.message);
    //   }
    // }

  }, {
    key: 'addUserPassword',
    value: async function addUserPassword(req, res) {
      //remove after create the project
      try {
        var user = await _userService2.default.addUser(req.body);
        _resHelper2.default.created(res, user);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'fetchUsers',
    value: async function fetchUsers(req, res) {
      try {
        var users = await _userService2.default.fetchUsers();
        _resHelper2.default.responseData(res, users);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'fogetPassword',
    value: async function fogetPassword(req, res) {
      try {
        await _userService2.default.fogetPassword(req.body);
        _resHelper2.default.updated(res);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'resetPassword',
    value: async function resetPassword(req, res) {
      try {
        var userId = req.params.userId;
        console.log('yyyyyyyyyyy', userId);
        await _userService2.default.resetPassword(userId, req.body);
        _resHelper2.default.updated(res);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'userSearch',
    value: async function userSearch(req, res) {
      try {
        var users = await _userService2.default.userSearch(req.body);
        _resHelper2.default.responseData(res, users);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'whoAmI',
    value: async function whoAmI(req, res) {
      try {
        var user = await _userService2.default.whoAmI(req.user);
        _resHelper2.default.responseData(res, user);
      } catch (error) {
        console.log(error);
      }
    }
  }]);

  return UserConatroller;
}();

var userController = new UserConatroller();
exports.default = userController;