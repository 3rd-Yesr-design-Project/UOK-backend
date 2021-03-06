/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:19:41
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-18 11:23:44
 */

import subjectService from '../services/subjectService';
import resHelper from '../utils/Helpers/resHelper';

class SubjectController {
  async addSubject(req, res) {
    //remove after the project

    try {
      await subjectService.addSubject(req.body);
      resHelper.created(res);
    } catch (error) {
      console.log(error);
      resHelper.serverFailing(res, error.message);
    }
  }

  async addSubjectByUserId(req, res) {
    // remove after the project
    try {
      await subjectService.addSubjectByUserId(req.body);
      resHelper.updated(res);
    } catch (error) {
      console.log(error);
      resHelper.serverFailing(res, error.message);
    }
  }

  async fetchSubjectByStudentIdAndYear(req, res) {
    try {
      const year = req.params.year;
      const subjects = await subjectService.fetchSubjectByStudentIdAndYear(
        req.user,
        year
      );
      resHelper.responseData(res, subjects);
    } catch (error) {
      console.log(error);
      resHelper.serverFailing(res, error.message);
    }
  }

  async addSubjectResult(req, res) {
    try {
      const id = req.params.id;
      await subjectService.addSubjectResult(id, req.body);
      resHelper.updated(res);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }

  async fetchStudentSubjectByStudentNoAndYear(req, res) {
    try {
      const year = req.params.year;
      const subject = await subjectService.getStudentSubjectByStudentNoAndYear(
        year,
        req.body
      );
      resHelper.responseData(res, subject);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }

  async fetchSubjectByYear(req, res) {
    try {
      const subjects = await subjectService.fetchSubjectByYear(req.params.year);
      resHelper.responseData(res, subjects);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchStudentsBySubjectAndAcedemicYear(req, res) {
    try {
      const academicYear = req.params.academicYear;
      const subjectId = req.params.subjectId;
      const students =
        await subjectService.fetchStudentsBySubjectAndAcedemicYear(
          subjectId,
          academicYear
        );
      resHelper.responseData(res, students);
    } catch (error) {
      console.log(error);
    }
  }

  async updateResult(req, res) {
    try {
      await subjectService.updateResult(req.body);
      resHelper.updated(res);
    } catch (error) {
      console.log(error);
    }
  }
}

const subjectController = new SubjectController();
export default subjectController;
