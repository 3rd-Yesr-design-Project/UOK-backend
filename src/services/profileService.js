/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:20:38
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-16 16:56:20
 */

import profileRepository from '../repositories/profileRepository';
import userRepository from '../repositories/userRepository';

class ProfileService {
  createProfile(user, requestBody) {
    const {
      profileUrl,
      mobile,
      birthDay,
      status,
      gender,
      language,
      religioun,
      workingPlace,
      school,
      university,
      homeTown,
      currentCity,
    } = requestBody;

    const body = {
      user_id: user.userId,
      profile_url: profileUrl,
      mobile: mobile,
      birthday: birthDay,
      status: status,
      gender: gender,
      language: language,
      religioun: religioun,
      working_place: workingPlace,
      school: school,
      university: university,
      home_town: homeTown,
      current_city: currentCity,
    };

    return profileRepository.createProfile(body);
  }

  async updateProfile(userId, requestBody) {
    const {
      profileUrl,
      mobile,
      birthDay,
      status,
      gender,
      language,
      religioun,
      workingPlace,
      school,
      university,
      homeTown,
      currentCity,
    } = requestBody;

    const body = {
      profile_url: profileUrl,
      mobile: mobile,
      birthday: birthDay,
      status: status,
      gender: gender,
      language: language,
      religioun: religioun,
      working_place: workingPlace,
      school: school,
      university: university,
      home_town: homeTown,
      current_city: currentCity,
    };

    const profile = await profileRepository.updateProfile(userId, body);
    return profile[1][0].get();
  }

  async fetchProfileByUserId(user, profileUserId) {
    const a = await userRepository.fetchProfileByUserId(
      user.userId,
      profileUserId
    );
    console.log('hhhhhhhhhhhhhhhhhh', a);
    return a;
  }
}

const profileService = new ProfileService();
export default profileService;
