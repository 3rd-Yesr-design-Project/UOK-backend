/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:54
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-17 18:34:39
 */

const Sequelize = require('sequelize');
const User = require('../models').users;
const Profile = require('../models').profiles;
const Student = require('../models').students;
const { Op } = Sequelize;

class UserRepository {
  createUser(body) {
    return User.create(body);
  }

  updateUserByUserId(userId, body) {
    return User.update(body, {
      where: {
        id: userId,
      },
    });
  }

  fetchUserByEmail(email) {
    return User.findOne({
      include: [
        { model: Profile },
        { model: Student, attributes: ['student_no'] },
      ],
      where: {
        email: email,
      },
    });
  }

  userSearch(name) {
    return User.findAll({
      attributes: ['id', 'name'],
      include: [{ model: Profile, attributes: ['profile_url'] }],
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      limit: 10,
    });
  }

  fetchUsers() {
    return User.findAll({
      attributes: ['id', 'name'],
      include: [{ model: Profile, attributes: ['profile_url'] }],
    });
  }

  fetchProfileByUserId(userId) {
    return User.findOne({
      attributes: ['id', 'name', 'email'],
      include: [{ model: Profile }],
      where: {
        id: userId,
      },
    });
  }
}

const userRepository = new UserRepository();
export default userRepository;
