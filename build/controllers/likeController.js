'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:19:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-04-30 06:19:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _likeService = require('../services/likeService');

var _likeService2 = _interopRequireDefault(_likeService);

var _resHelper = require('../utils/Helpers/resHelper');

var _resHelper2 = _interopRequireDefault(_resHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LikeController = function () {
  function LikeController() {
    _classCallCheck(this, LikeController);
  }

  _createClass(LikeController, [{
    key: 'updateLike',
    value: async function updateLike(req, res) {
      try {
        var postId = req.params.postId;
        await _likeService2.default.updateLike(req.user, postId, req.body);
        _resHelper2.default.updated(res);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }]);

  return LikeController;
}();

var likeController = new LikeController();
exports.default = likeController;