'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:18:14
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-04-30 06:19:05
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _commentService = require('../services/commentService');

var _commentService2 = _interopRequireDefault(_commentService);

var _resHelper = require('../utils/Helpers/resHelper');

var _resHelper2 = _interopRequireDefault(_resHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentController = function () {
  function CommentController() {
    _classCallCheck(this, CommentController);
  }

  _createClass(CommentController, [{
    key: 'createComment',
    value: async function createComment(req, res) {
      try {
        var comment = await _commentService2.default.createComment(req.user, req.body);
        _resHelper2.default.created(res, comment);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'deleteCommnet',
    value: async function deleteCommnet(req, res) {
      try {
        await _commentService2.default.deleteComment(req.params.commentId);
        _resHelper2.default.deleted(res);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }]);

  return CommentController;
}();

var commentController = new CommentController();
exports.default = commentController;