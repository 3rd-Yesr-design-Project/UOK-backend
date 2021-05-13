'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:19:17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-10 08:53:54
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _PostService = require('../services/PostService');

var _PostService2 = _interopRequireDefault(_PostService);

var _resHelper = require('../utils/Helpers/resHelper');

var _resHelper2 = _interopRequireDefault(_resHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostController = function () {
  function PostController() {
    _classCallCheck(this, PostController);
  }

  _createClass(PostController, [{
    key: 'fetchPosts',
    value: async function fetchPosts(req, res) {
      try {
        var posts = await _PostService2.default.fetchPosts();
        console.log(posts);

        _resHelper2.default.responseData(res, posts);
      } catch (error) {
        console.log(error);
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'createPost',
    value: async function createPost(req, res) {
      try {
        var post = await _PostService2.default.createPost(req.user, req.body);
        _resHelper2.default.created(res, post);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'deletePost',
    value: async function deletePost(req, res) {
      try {
        await _PostService2.default.deletePost(req.params.postId);
        _resHelper2.default.deleted(res);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'fetchPostsByUserId',
    value: async function fetchPostsByUserId(req, res) {
      try {
        var posts = await _PostService2.default.fetchPostsByUserId(req.params.userId);
        _resHelper2.default.responseData(res, posts);
      } catch (error) {
        console.log(error);
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }]);

  return PostController;
}();

var postController = new PostController();
exports.default = postController;