'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:54
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-12 22:18:47
 */

var Sequelize = require('sequelize');
var User = require('../models').users;
var Profile = require('../models').profiles;
var Op = Sequelize.Op;

var UserRepository = function () {
  function UserRepository() {
    _classCallCheck(this, UserRepository);
  }

  _createClass(UserRepository, [{
    key: 'createUser',
    value: function createUser(body) {
      return User.create(body);
    }
  }, {
    key: 'updateUserByUserId',
    value: function updateUserByUserId(userId, body) {
      return User.update(body, {
        where: {
          id: userId
        }
      });
    }
  }, {
    key: 'fetchUserByEmail',
    value: function fetchUserByEmail(email) {
      return User.findOne({
        include: [{ model: Profile }],
        where: {
          email: email
        }
      });
    }
  }, {
    key: 'userSearch',
    value: function userSearch(name) {
      return User.findAll({
        attributes: ['id', 'name'],
        include: [{ model: Profile, attributes: ['profile_url'] }],
        where: {
          name: _defineProperty({}, Op.like, '%' + name + '%')
        },
        limit: 10
      });
    }
  }, {
    key: 'fetchUsers',
    value: function fetchUsers() {
      return User.findAll({
        attributes: ['id', 'name'],
        include: [{ model: Profile, attributes: ['profile_url'] }]
      });
    }
  }, {
    key: 'fetchProfileByUserId',
    value: function fetchProfileByUserId(userId) {
      return User.findOne({
        attributes: ['id', 'name', 'email'],
        include: [{ model: Profile }],
        where: {
          id: userId
        }
      });
    }
  }]);

  return UserRepository;
}();

var userRepository = new UserRepository();
exports.default = userRepository;