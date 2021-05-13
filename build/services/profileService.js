'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:20:38
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-10 08:42:43
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _profileRepository = require('../repositories/profileRepository');

var _profileRepository2 = _interopRequireDefault(_profileRepository);

var _userRepository = require('../repositories/userRepository');

var _userRepository2 = _interopRequireDefault(_userRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProfileService = function () {
  function ProfileService() {
    _classCallCheck(this, ProfileService);
  }

  _createClass(ProfileService, [{
    key: 'createProfile',
    value: function createProfile(user, requestBody) {
      var profileUrl = requestBody.profileUrl,
          birthDay = requestBody.birthDay,
          status = requestBody.status,
          gender = requestBody.gender,
          school = requestBody.school,
          university = requestBody.university,
          homeTown = requestBody.homeTown,
          currentCity = requestBody.currentCity;

      var body = {
        user_id: user.userId,
        profile_url: profileUrl,
        birthday: birthDay,
        status: status,
        gender: gender,
        school: school,
        university: university,
        home_town: homeTown,
        current_city: currentCity
      };

      return _profileRepository2.default.createProfile(body);
    }
  }, {
    key: 'updateProfile',
    value: function updateProfile(userId, requestBody) {
      var profileUrl = requestBody.profileUrl,
          mobile = requestBody.mobile,
          birthDay = requestBody.birthDay,
          status = requestBody.status,
          gender = requestBody.gender,
          language = requestBody.language,
          religioun = requestBody.religioun,
          workingPlace = requestBody.workingPlace,
          school = requestBody.school,
          university = requestBody.university,
          homeTown = requestBody.homeTown,
          currentCity = requestBody.currentCity;


      var body = {
        profile_url: profileUrl,
        mobile: mobile,
        birthday: birthDay,
        status: status,
        gender: gender,
        language: language,
        religioun: religioun,
        working_place: workingPlace,
        school: school,
        university: university,
        home_town: homeTown,
        current_city: currentCity
      };

      return _profileRepository2.default.updateProfile(userId, body);
    }
  }, {
    key: 'fetchProfileByUserId',
    value: function fetchProfileByUserId(userId) {
      return _userRepository2.default.fetchProfileByUserId(userId);
    }
  }]);

  return ProfileService;
}();

var profileService = new ProfileService();
exports.default = profileService;