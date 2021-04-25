const Subject = require('../models').subjects;
const StudentSubject = require('../models').student_subjects;
const User = require('../models').users;

class SubjectRepository {
  addSubject(body) {
    // remove after the project
    return Subject.create(body);
  }

  addSubjectByUserId(body) {
    return StudentSubject.create(body); //remove after the project
  }

  async fetchSubjectByUserIdAndYear(userId, year) {
    return User.findOne({
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
        id: userId,
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
    return StudentSubject.update(body, {
      where: {
        id: id,
      },
    });
  }

  fetchSubjectByYear(year) {
    return Subject.findAll({ where: { year } });
  }
}

const subjectRepository = new SubjectRepository();
export default subjectRepository;
