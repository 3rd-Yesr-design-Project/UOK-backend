import { Op } from 'sequelize';

const Subject = require('../models').subjects;
const Student = require('../models').students;
const Result = require('../models').results;
const User = require('../models').users;

class SubjectRepository {
  addSubject(body) {
    // remove after the project
    return Subject.create(body);
  }

  addSubjectByUserId(body) {
    return Result.create(body); //remove after the project
  }

  async fetchSubjectByStudentIdAndYear(studentId, year) {
    return Student.findOne({
      attributes: [],
      include: [
        {
          model: Subject,
          as: 'subjects',
          where: {
            year: year,
          },
        },
      ],
      where: {
        id: studentId,
      },
    });
  }

  async getStudentSubjectByStudentNoAndYear(year, studentNo) {
    console.log('sssssssss', studentNo);
    return User.findOne({
      include: [
        {
          model: Subject,
          as: 'subjects',
          through: { where: { year: year } },
        },
      ],
      where: {
        student_no: studentNo,
      },
    });
  }

  updateResult(id, body) {
    return Result.update(body, {
      where: {
        id: id,
      },
    });
  }

  fetchSubjectByYear(year) {
    return Subject.findAll({ where: { year } });
  }

  fetchStudentsBySubjectAndAcedemicYear(subjectId, academicYear) {
    return Result.findAll({
      include: [{ model: Student }],
      where: {
        subject_id: subjectId,
        academic_year: academicYear,
      },
    });
  }
}

const subjectRepository = new SubjectRepository();
export default subjectRepository;
