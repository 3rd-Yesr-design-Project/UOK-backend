'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:20:19
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-10 23:40:38
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _likeRepository = require('../repositories/likeRepository');

var _likeRepository2 = _interopRequireDefault(_likeRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LikeService = function () {
  function LikeService() {
    _classCallCheck(this, LikeService);
  }

  _createClass(LikeService, [{
    key: 'updateLike',
    value: async function updateLike(user, postId, requestBody) {
      var isLiked = await _likeRepository2.default.fetchLikeByUserIdAndPostId(user.userId, postId);

      if (!isLiked) {
        var body = {
          user_id: user.userId,
          post_id: postId
        };
        return _likeRepository2.default.createLike(body);
      }

      return _likeRepository2.default.deleteLike(user.userId, postId);
    }
  }]);

  return LikeService;
}();

var likeService = new LikeService();
exports.default = likeService;