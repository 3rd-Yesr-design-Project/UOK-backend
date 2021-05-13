'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:19:41
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-11 10:02:09
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _subjectService = require('../services/subjectService');

var _subjectService2 = _interopRequireDefault(_subjectService);

var _resHelper = require('../utils/Helpers/resHelper');

var _resHelper2 = _interopRequireDefault(_resHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubjectController = function () {
  function SubjectController() {
    _classCallCheck(this, SubjectController);
  }

  _createClass(SubjectController, [{
    key: 'addSubject',
    value: async function addSubject(req, res) {
      //remove after the project

      try {
        await _subjectService2.default.addSubject(req.body);
        _resHelper2.default.created(res);
      } catch (error) {
        console.log(error);
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'addSubjectByUserId',
    value: async function addSubjectByUserId(req, res) {
      // remove after the project
      try {
        await _subjectService2.default.addSubjectByUserId(req.body);
        _resHelper2.default.updated(res);
      } catch (error) {
        console.log(error);
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'fetchSubjectByStudentIdAndYear',
    value: async function fetchSubjectByStudentIdAndYear(req, res) {
      try {
        var year = req.params.year;
        var subjects = await _subjectService2.default.fetchSubjectByStudentIdAndYear(req.user, year);
        _resHelper2.default.responseData(res, subjects);
      } catch (error) {
        console.log(error);
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'addSubjectResult',
    value: async function addSubjectResult(req, res) {
      try {
        var id = req.params.id;
        await _subjectService2.default.addSubjectResult(id, req.body);
        _resHelper2.default.updated(res);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }
  }, {
    key: 'fetchStudentSubjectByStudentNoAndYear',
    value: async function fetchStudentSubjectByStudentNoAndYear(req, res) {
      try {
        var year = req.params.year;
        var subject = await _subjectService2.default.getStudentSubjectByStudentNoAndYear(year, req.body);
        _resHelper2.default.responseData(res, subject);
      } catch (error) {
        _resHelper2.default.serverFailing(res, error.message);
      }
    }

    // async fetcbSubjectByUserId(req,res){
    //     try {
    //         const userId = req.params.userId;
    //         const year = req.params.year;
    //         const subjects = await subjectService.fetchSubjectByUserIdAndYear(userId,year);
    //         resHelper.responseData(res,subjects)
    //     } catch (error) {
    //         resHelper.serverFailing(res,error.message)
    //     }
    // }

  }, {
    key: 'fetchSubjectByYear',
    value: async function fetchSubjectByYear(req, res) {
      try {
        var subjects = await _subjectService2.default.fetchSubjectByYear(req.params.year);
        _resHelper2.default.responseData(res, subjects);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'fetchStudentsBySubjectAndAcedemicYear',
    value: async function fetchStudentsBySubjectAndAcedemicYear(req, res) {
      try {
        var academicYear = req.params.academicYear;
        var subjectId = req.params.subjectId;
        var students = await _subjectService2.default.fetchStudentsBySubjectAndAcedemicYear(subjectId, academicYear);
        _resHelper2.default.responseData(res, students);
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'updateResult',
    value: async function updateResult(req, res) {
      console.log('xxxxxxxxxxx');
      try {
        await _subjectService2.default.updateResult(req.body);
        _resHelper2.default.updated(res);
      } catch (error) {
        console.log(error);
      }
    }
  }]);

  return SubjectController;
}();

var subjectController = new SubjectController();
exports.default = subjectController;