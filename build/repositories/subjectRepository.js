'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Author: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Date: 2021-04-30 06:22:45
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @Last Modified time: 2021-05-11 09:35:09
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _sequelize = require('sequelize');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subject = require('../models').subjects;
var Student = require('../models').students;
var Result = require('../models').results;
var User = require('../models').users;

var SubjectRepository = function () {
  function SubjectRepository() {
    _classCallCheck(this, SubjectRepository);
  }

  _createClass(SubjectRepository, [{
    key: 'addSubject',
    value: function addSubject(body) {
      // remove after the project
      return Subject.create(body);
    }
  }, {
    key: 'addSubjectByUserId',
    value: function addSubjectByUserId(body) {
      return Result.create(body); //remove after the project
    }
  }, {
    key: 'fetchSubjectByStudentIdAndYear',
    value: async function fetchSubjectByStudentIdAndYear(studentId, year) {
      console.log(studentId, year);
      // return Student.findOne({
      //   // attributes: [],
      //   include: [
      //     {
      //       model: Subject,
      //       as: 'subjects',
      //       where: {
      //         year: year,
      //       },
      //     },
      //   ],
      //   where: {
      //     id: studentId,
      //   },
      // });

      return Student.findOne({
        // attributes: [],
        include: [{
          model: Result,
          include: [{
            model: Subject,
            where: { year: year }
          }]
        }],
        where: {
          id: studentId
        }
      });
    }
  }, {
    key: 'getStudentSubjectByStudentNoAndYear',
    value: async function getStudentSubjectByStudentNoAndYear(year, studentNo) {
      console.log('sssssssss', studentNo);
      return User.findOne({
        include: [{
          model: Subject,
          as: 'subjects',
          through: { where: { year: year } }
        }],
        where: {
          student_no: studentNo
        }
      });
    }
  }, {
    key: 'updateResult',
    value: function updateResult(id, body) {
      return Result.update(body, {
        where: {
          id: id
        }
      });
    }
  }, {
    key: 'fetchSubjectByYear',
    value: function fetchSubjectByYear(year) {
      return Subject.findAll({ where: { year: year } });
    }
  }, {
    key: 'fetchStudentsBySubjectAndAcedemicYear',
    value: function fetchStudentsBySubjectAndAcedemicYear(subjectId, academicYear) {
      console.log('bbbbbbbbbb', subjectId, academicYear);
      return Result.findAll({
        include: [{ model: Student }],
        where: {
          subject_id: subjectId,
          academic_year: academicYear
        }
      });
      // return Student.findAll({
      //   include: [
      //     {
      //       model: Subject,
      //       as: 'subjects',
      //       through: {
      //         where: { subject_id: subjectId, academic_year: academicYear },
      //       },
      //     },
      //   ],
      // });
    }
  }, {
    key: 'updateResultById',
    value: function updateResultById(id, body) {
      return Result.update(body, { where: { id: id } });
    }
  }]);

  return SubjectRepository;
}();

var subjectRepository = new SubjectRepository();
exports.default = subjectRepository;