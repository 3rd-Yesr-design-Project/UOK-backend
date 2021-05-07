/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:54
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-07 22:50:36
 */

const User = require('../models').users;

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
      where: {
        email: email,
      },
    });
  }
}

const userRepository = new UserRepository();
export default userRepository;
