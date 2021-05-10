/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:11
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-10 08:43:25
 */

const Profile = require('../models').profiles;
const User = require('../models').users;

class ProfileRepository {
  createProfile(body) {
    return Profile.create(body);
  }

  updateProfile(userId, body) {
    return Profile.update(body, {
      where: {
        user_id: userId,
      },
    });
  }

  // fetchProfileByUserId(userId) {
  //   return Profile.findOne({
  //     include: [{ model: User }],
  //     where: {
  //       user_id: userId,
  //     },
  //   });
  // }
}

const profileRepository = new ProfileRepository();
export default profileRepository;
