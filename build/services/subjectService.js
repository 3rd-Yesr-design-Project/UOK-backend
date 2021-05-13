'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:20:49
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-12 19:05:40
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _studentRepository = require('../repositories/studentRepository');

var _studentRepository2 = _interopRequireDefault(_studentRepository);

var _subjectRepository = require('../repositories/subjectRepository');

var _subjectRepository2 = _interopRequireDefault(_subjectRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubjectService = function () {
  function SubjectService() {
    _classCallCheck(this, SubjectService);
  }

  _createClass(SubjectService, [{
    key: 'addSubject',
    value: function addSubject(requestBody) {
      //remove after the project
      var subjectCode = requestBody.subjectCode,
          subject = requestBody.subject;

      console.log('xxxxxxxxxx', academicYear);
      var body = {
        subject_code: subjectCode,
        subject: subject
      };
      return _subjectRepository2.default.addSubject(body);
    }
  }, {
    key: 'addSubjectByUserId',
    value: function addSubjectByUserId(requestBody) {
      var userId = requestBody.userId,
          subjectId = requestBody.subjectId,
          academicYear = requestBody.academicYear; //remove after the project created

      var body = {
        student_id: userId,
        subject_id: subjectId,
        academic_year: academicYear
      };

      return _subjectRepository2.default.addSubjectByUserId(body);
    }
  }, {
    key: 'fetchSubjectByStudentIdAndYear',
    value: async function fetchSubjectByStudentIdAndYear(user, year) {
      var student = await _studentRepository2.default.fetchStudentByUserId(user.userId);
      // console.log(student);
      return _subjectRepository2.default.fetchSubjectByStudentIdAndYear(student.id, year);
    }
  }, {
    key: 'addSubjectResult',
    value: function addSubjectResult(id, requestBody) {
      var result = requestBody.result;

      var body = {
        result: result
      };

      return _subjectRepository2.default.updateResult(id, body);
    }
  }, {
    key: 'getStudentSubjectByStudentNoAndYear',
    value: function getStudentSubjectByStudentNoAndYear(year, requestBody) {
      var studentNo = requestBody.studentNo;

      return _subjectRepository2.default.getStudentSubjectByStudentNoAndYear(year, studentNo);
    }
  }, {
    key: 'fetchSubjectByYear',
    value: function fetchSubjectByYear(year) {
      return _subjectRepository2.default.fetchSubjectByYear(year);
    }
  }, {
    key: 'fetchStudentsBySubjectAndAcedemicYear',
    value: function fetchStudentsBySubjectAndAcedemicYear(subjectId, academicYear) {
      return _subjectRepository2.default.fetchStudentsBySubjectAndAcedemicYear(subjectId, academicYear);
    }
  }, {
    key: 'updateResult',
    value: async function updateResult(requestBody) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = requestBody[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var result = _step.value;

          var body = {
            result: result.result
          };
          await _subjectRepository2.default.updateResultById(result.id, body);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return SubjectService;
}();

var subjectService = new SubjectService();
exports.default = subjectService;