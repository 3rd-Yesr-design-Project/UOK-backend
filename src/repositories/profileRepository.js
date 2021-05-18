/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:11
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-18 11:25:30
 */

const Profile = require('../models').profiles;

class ProfileRepository {
  createProfile(body) {
    return Profile.create(body);
  }

  updateProfile(userId, body) {
    return Profile.update(body, {
      where: {
        user_id: userId,
      },
      returning: true,
    });
  }
}

const profileRepository = new ProfileRepository();
export default profileRepository;
