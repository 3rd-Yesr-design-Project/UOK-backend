const Lecturer = require('../models').lecturers;

class LecturerRepository {
  fetchLecturers() {
    return Lecturer.findAll();
  }
}

export default new LecturerRepository();
