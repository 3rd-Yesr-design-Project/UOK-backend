'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:11
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-10 08:43:25
 */

var Profile = require('../models').profiles;
var User = require('../models').users;

var ProfileRepository = function () {
  function ProfileRepository() {
    _classCallCheck(this, ProfileRepository);
  }

  _createClass(ProfileRepository, [{
    key: 'createProfile',
    value: function createProfile(body) {
      return Profile.create(body);
    }
  }, {
    key: 'updateProfile',
    value: function updateProfile(userId, body) {
      return Profile.update(body, {
        where: {
          user_id: userId
        }
      });
    }

    // fetchProfileByUserId(userId) {
    //   return Profile.findOne({
    //     include: [{ model: User }],
    //     where: {
    //       user_id: userId,
    //     },
    //   });
    // }

  }]);

  return ProfileRepository;
}();

var profileRepository = new ProfileRepository();
exports.default = profileRepository;