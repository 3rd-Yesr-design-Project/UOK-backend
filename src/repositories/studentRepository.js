/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:24
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-06 10:30:49
 */

const Student = require('../models').students;

class StudentRepository {
  fetchStudentByUserId(userId) {
    return Student.findOne({ where: { user_id: userId } });
  }

  fetchStudents() {
    return Student.findAll();
  }
}

export default new StudentRepository();
