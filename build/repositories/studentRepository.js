'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:24
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-09 09:56:57
 */

var Student = require('../models').students;

var StudentRepository = function () {
  function StudentRepository() {
    _classCallCheck(this, StudentRepository);
  }

  _createClass(StudentRepository, [{
    key: 'fetchStudentByUserId',
    value: function fetchStudentByUserId(userId) {
      return Student.findOne({ where: { user_id: userId } });
    }
  }, {
    key: 'fetchStudents',
    value: function fetchStudents() {
      return Student.findAll();
    }
  }]);

  return StudentRepository;
}();

exports.default = new StudentRepository();