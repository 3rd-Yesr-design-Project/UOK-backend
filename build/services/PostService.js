'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:20:28
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-10 08:48:41
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _postRepository = require('../repositories/postRepository');

var _postRepository2 = _interopRequireDefault(_postRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostService = function () {
  function PostService() {
    _classCallCheck(this, PostService);
  }

  _createClass(PostService, [{
    key: 'createPost',
    value: function createPost(user, requestBody) {
      var title = requestBody.title,
          postUrl = requestBody.postUrl,
          description = requestBody.description;


      var body = {
        user_id: user.userId,
        title: title,
        post_url: postUrl,
        description: description
      };

      return _postRepository2.default.createPost(body);
    }
  }, {
    key: 'deletePost',
    value: function deletePost(postId) {
      return _postRepository2.default.deletePost(postId);
    }
  }, {
    key: 'fetchPosts',
    value: function fetchPosts() {
      return _postRepository2.default.fetchPosts();
    }
  }, {
    key: 'fetchPostsByUserId',
    value: function fetchPostsByUserId(userId) {
      return _postRepository2.default.fetchPostsByUserId(userId);
    }
  }]);

  return PostService;
}();

var postService = new PostService();
exports.default = postService;