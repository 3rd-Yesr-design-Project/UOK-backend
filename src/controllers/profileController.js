/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:19:29
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-17 17:33:02
 */

import profileService from '../services/profileService';
import resHelper from '../utils/Helpers/resHelper';

class ProfileController {
  async createProfile(req, res) {
    try {
      const profile = await profileService.createProfile(req.user, req.body);
      resHelper.created(res, profile);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }

  async updateProfile(req, res) {
    try {
      const userId = req.params.userId;
      const profile = await profileService.updateProfile(userId, req.body);
      resHelper.updated(res, profile);
    } catch (error) {
      console.log(error);
      resHelper.serverFailing(res, error.message);
    }
  }

  async fetchProfileByUserId(req, res) {
    try {
      const profile = await profileService.fetchProfileByUserId(
        req.params.userId
      );
      resHelper.responseData(res, profile);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }
}

const profileController = new ProfileController();
export default profileController;
