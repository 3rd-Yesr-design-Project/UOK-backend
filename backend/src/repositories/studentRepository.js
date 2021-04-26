const Student = require('../models').students;

class StudentRepository {
  fetchStudentByUserId(userId) {
    return Student.findOne({ where: { user_id: userId } });
  }
}

export default new StudentRepository();
