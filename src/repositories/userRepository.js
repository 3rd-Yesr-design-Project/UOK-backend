/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:54
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-09 07:25:53
 */

const Sequelize = require('sequelize');
const User = require('../models').users;
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
      attributes: ['id', 'email', 'user_type', 'name'],
      where: {
        email: email,
      },
    });
  }

  userSearch(name) {
    return User.findAll({
      attributes: ['id', 'name'],
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      limit: 10,
    });
  }
}

const userRepository = new UserRepository();
export default userRepository;
