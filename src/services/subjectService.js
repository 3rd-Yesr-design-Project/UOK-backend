/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:20:49
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-18 18:23:41
 */

import studentRepository from '../repositories/studentRepository';
import subjectRepository from '../repositories/subjectRepository';

class SubjectService {
  addSubject(requestBody) {
    //remove after the project
    const { subjectCode, subject } = requestBody;
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

  async updateResult(requestBody) {
    for (const result of requestBody) {
      const body = {
        result: result.result,
      };
      await subjectRepository.updateResultById(result.id, body);
    }
  }
}

const subjectService = new SubjectService();
export default subjectService;
