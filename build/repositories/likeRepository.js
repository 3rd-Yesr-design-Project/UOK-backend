'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:21:47
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:21:47
 */

var Like = require('../models').likes;

var LikeRepository = function () {
  function LikeRepository() {
    _classCallCheck(this, LikeRepository);
  }

  _createClass(LikeRepository, [{
    key: 'createLike',
    value: function createLike(body) {
      return Like.create(body);
    }
  }, {
    key: 'fetchLikeByUserIdAndPostId',
    value: function fetchLikeByUserIdAndPostId(userId, postId) {
      return Like.findOne({
        where: {
          user_id: userId,
          post_id: postId
        }
      });
    }
  }, {
    key: 'deleteLike',
    value: function deleteLike(userId, postId) {
      return Like.destroy({
        where: {
          user_id: userId,
          post_id: postId
        }
      });
    }
  }]);

  return LikeRepository;
}();

var likeRepository = new LikeRepository();
exports.default = likeRepository;