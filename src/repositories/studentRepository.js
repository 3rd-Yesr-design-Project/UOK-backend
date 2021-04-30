/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:24
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:22:24
 */

const Student = require('../models').students;

class StudentRepository {
  fetchStudentByUserId(userId) {
    return Student.findOne({ where: { user_id: userId } });
  }
}

export default new StudentRepository();
