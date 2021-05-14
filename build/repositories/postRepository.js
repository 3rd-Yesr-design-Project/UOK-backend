'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:03
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-13 22:19:32
 */

var Post = require('../models').posts;
var Comment = require('../models').comments;
var Like = require('../models').likes;
var User = require('../models').users;
var Profile = require('../models').profiles;

var PostRepository = function () {
  function PostRepository() {
    _classCallCheck(this, PostRepository);
  }

  _createClass(PostRepository, [{
    key: 'createPost',
    value: function createPost(body) {
      return Post.create(body);
    }
  }, {
    key: 'deletePost',
    value: function deletePost(postId) {
      return Post.destroy({
        where: {
          id: postId
        }
      });
    }
  }, {
    key: 'fetchPosts',
    value: function fetchPosts() {
      return Post.findAll({
        include: [{
          model: User,
          include: [{ model: Profile, attributes: ['profile_url'] }]
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['name'],
            include: [{ model: Profile, attributes: ['profile_url'] }]
          }]
        }, { model: Like }]
      });
    }
  }, {
    key: 'fetchPostsByUserId',
    value: function fetchPostsByUserId(userId) {
      return Post.findAll({
        include: [{ model: User, attributes: ['name'] }, { model: Comment }, { model: Like }],
        where: {
          user_id: userId
        }
      });
    }
  }]);

  return PostRepository;
}();

var postRepository = new PostRepository();
exports.default = postRepository;