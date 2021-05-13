'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:20:09
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-04-30 06:20:09
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _commentRepository = require('../repositories/commentRepository');

var _commentRepository2 = _interopRequireDefault(_commentRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentService = function () {
  function CommentService() {
    _classCallCheck(this, CommentService);
  }

  _createClass(CommentService, [{
    key: 'createComment',
    value: function createComment(user, requestBody) {
      var postId = requestBody.postId,
          comment = requestBody.comment;


      var body = {
        user_id: user.userId,
        post_id: postId,
        comment: comment
      };

      return _commentRepository2.default.createComment(body);
    }
  }, {
    key: 'deleteComment',
    value: function deleteComment(commentId) {
      return _commentRepository2.default.deleteComment(commentId);
    }
  }]);

  return CommentService;
}();

var commentService = new CommentService();
exports.default = commentService;