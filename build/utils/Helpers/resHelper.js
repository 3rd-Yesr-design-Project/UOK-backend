'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResHelper = function () {
  function ResHelper() {
    _classCallCheck(this, ResHelper);
  }

  _createClass(ResHelper, [{
    key: 'created',
    value: function created(res, data) {
      res.status(200).send({
        success: true,
        message: 'Created',
        data: data
      });
    }
  }, {
    key: 'updated',
    value: function updated(res) {
      res.status(200).send({
        success: true,
        message: 'Updated',
        data: null
      });
    }
  }, {
    key: 'deleted',
    value: function deleted(res) {
      res.status(200).send({
        success: true,
        message: 'Deleted',
        data: null
      });
    }
  }, {
    key: 'failedCustom',
    value: function failedCustom(res, message) {
      res.status(403).send({
        success: false,
        message: message,
        data: null
      });
    }
  }, {
    key: 'successCustom',
    value: function successCustom(res, message) {
      res.status(200).send({
        success: true,
        message: message,
        data: null
      });
    }
  }, {
    key: 'responseData',
    value: function responseData(res, data) {
      res.status(200).send({
        success: true,
        message: null,
        data: data
      });
    }
  }, {
    key: 'serverFailing',
    value: function serverFailing(res, message) {
      res.status(500).send({
        success: false,
        message: message,
        data: null
      });
    }
  }, {
    key: 'unauthorized',
    value: function unauthorized(res) {
      res.status(401).send({
        success: false,
        message: 'Unauthorized',
        data: null
      });
    }
  }]);

  return ResHelper;
}();

var resHelper = new ResHelper();
exports.default = resHelper;