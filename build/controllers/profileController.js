'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:19:29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-10 08:42:08
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _profileService = require('../services/profileService');

var _profileService2 = _interopRequireDefault(_profileService);

var _resHelper = require('../utils/Helpers/resHelper');

var _resHelper2 = _interopRequireDefault(_resHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProfileController = function () {
  function ProfileController() {
    _classCallCheck(this, ProfileController);
  }

  _createClass(ProfileController, [{
    key: 'createProfile',
    value: async function createProfile(req, res) {
      try {
        var profile = await _profileService2.default.createProfile(req.user, req.body);
        _resHelper2.default.created(res, profile);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'updateProfile',
    value: async function updateProfile(req, res) {
      try {
        var userId = req.params.userId;
        await _profileService2.default.updateProfile(userId, req.body);
        _resHelper2.default.created(res);
      } catch (error) {
        console.log(error);
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'fetchProfileByUserId',
    value: async function fetchProfileByUserId(req, res) {
      try {
        var profile = await _profileService2.default.fetchProfileByUserId(req.params.userId);
        console.log('');
        _resHelper2.default.responseData(res, profile);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }]);

  return ProfileController;
}();

var profileController = new ProfileController();
exports.default = profileController;