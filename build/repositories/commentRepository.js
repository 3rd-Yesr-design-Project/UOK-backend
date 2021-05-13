'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:21:39
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:21:39
 */

var Comment = require('../models').comments;

var CommentRepository = function () {
  function CommentRepository() {
    _classCallCheck(this, CommentRepository);
  }

  _createClass(CommentRepository, [{
    key: 'createComment',
    value: function createComment(body) {
      return Comment.create(body);
    }
  }, {
    key: 'deleteComment',
    value: function deleteComment(commentId) {
      return Comment.destroy({
        where: {
          id: commentId
        }
      });
    }
  }]);

  return CommentRepository;
}();

var commentRepository = new CommentRepository();
exports.default = commentRepository;