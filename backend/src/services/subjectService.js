import studentRepository from '../repositories/studentRepository';
import subjectRepository from '../repositories/subjectRepository';

class SubjectService {
  addSubject(requestBody) {
    //remove after the project
    const { subjectCode, subject } = requestBody;
    console.log('xxxxxxxxxx', academicYear);
    const body = {
      subject_code: subjectCode,
      subject: subject,
    };
    return subjectRepository.addSubject(body);
  }

  addSubjectByUserId(requestBody) {
    const { userId, subjectId, academicYear } = requestBody; //remove after the project created

    const body = {
      student_id: userId,
      subject_id: subjectId,
      academic_year: academicYear,
    };

    return subjectRepository.addSubjectByUserId(body);
  }

  async fetchSubjectByStudentIdAndYear(user, year) {
    const student = await studentRepository.fetchStudentByUserId(user.userId);
    console.log(student);
    return subjectRepository.fetchSubjectByStudentIdAndYear(student.id, year);
  }

  addSubjectResult(id, requestBody) {
    const { result } = requestBody;
    const body = {
      result: result,
    };

    return subjectRepository.updateResult(id, body);
  }

  getStudentSubjectByStudentNoAndYear(year, requestBody) {
    const { studentNo } = requestBody;
    return subjectRepository.getStudentSubjectByStudentNoAndYear(
      year,
      studentNo
    );
  }

  fetchSubjectByYear(year) {
    return subjectRepository.fetchSubjectByYear(year);
  }
  fetchStudentsBySubjectAndAcedemicYear(subjectId, academicYear) {
    return subjectRepository.fetchStudentsBySubjectAndAcedemicYear(
      subjectId,
      academicYear
    );
  }
}

const subjectService = new SubjectService();
export default subjectService;
