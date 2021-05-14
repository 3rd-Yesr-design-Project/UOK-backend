/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:20:59
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-14 22:02:52
 */

import userRepository from '../repositories/userRepository';
import bcrypt from 'bcrypt';
import jwtHelper from '../utils/Helpers/jwtHelper';
import studentRepository from '../repositories/studentRepository';
import lecturerRepository from '../repositories/lecturerRepository';
import emailTemplateHelper from '../utils/Helpers/emailTemplateHelper';
import emailService from './emailService';

class UserService {
  async socialLogin(requestBody) {
    const { email, password } = requestBody;
    const user = await userRepository.fetchUserByEmail(email);
    if (!user) {
      throw new Error('Your email is incorrect');
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      throw new Error('Your password is not Match');
    }

    const token = jwtHelper.createSocialLoginToken(
      user.id,
      user.user_type,
      user.email
    );
    const loginUser = {
      id: user.id,
      name: user.name,
      user_type: user.user_type,
      studentNo: user.student_no,
    };
    return { loginUser, token };
  }

  async resultLogin(requestBody) {
    const { email, password } = requestBody;
    console.log(email);

    const user = await userRepository.fetchUserByEmail(email);
    if (!user) {
      throw new Error('Your email is incorrect');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Your password is not Match');
    }

    const token = jwtHelper.createResultLoginToken(
      user.id,
      user.user_type,
      email
    );
    const loginUser = {
      id: user.id,
      name: user.name,
      user_type: user.user_type,
      profile: user.profile,
      student: user.student ? user.student : null,
    };
    return { loginUser, token };
  }

  async addUser(requestBody) {
    //remove after create the project
    const { userType, password, email, name } = requestBody;

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    const body = {
      user_type: userType,
      name: name,
      email: email,
      password: newPassword,
    };

    return userRepository.createUser(body);
  }

  async fetchUsers() {
    // const students = await studentRepository.fetchStudents();
    // const lecturers = await lecturerRepository.fetchLecturers();

    // const friend = [...students, ...lecturers];
    // return friend;
    return userRepository.fetchUsers();
  }

  async fogetPassword(requestBody) {
    const { email } = requestBody;
    const existUser = await userRepository.fetchUserByEmail(email);
    if (!existUser) {
      throw new Error('Your Email does not exist');
    }
    const link = `${process.env.MAIN_URL}/resetPassword/${existUser.id}`;
    const subject = 'Reset Your Password';
    const template = emailTemplateHelper.forgetPasswordTemplate(link);
    emailService.sendMail(email, subject, template);
    return;
  }

  async resetPassword(userId, requestBody) {
    const { password } = requestBody;
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    const body = {
      password: newPassword,
    };

    return userRepository.updateUserByUserId(userId, body);
  }

  userSearch(requestBody) {
    const { name } = requestBody;
    return userRepository.userSearch(name);
  }

  whoAmI(user) {
    return userRepository.fetchUserByEmail(user.email);
  }
}

const userService = new UserService();
export default userService;
