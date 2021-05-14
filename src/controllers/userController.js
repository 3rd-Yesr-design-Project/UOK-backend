/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:19:50
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-14 22:03:29
 */

import userService from '../services/userService';
import resHelper from '../utils/Helpers/resHelper';

class UserConatroller {
  async socialLogin(req, res) {
    try {
      const user = await userService.socialLogin(req.body);
      resHelper.responseData(res, user);
    } catch (error) {
      console.log(error);
      resHelper.failedCustom(res, error);
    }
  }

  async resultLogin(req, res) {
    try {
      const user = await userService.resultLogin(req.body);
      resHelper.responseData(res, user);
    } catch (error) {
      console.log(error);
      resHelper.failedCustom(res, error);
    }
  }

  async createProfile(req, res) {
    try {
      const userId = req.params.userId;
      await userService.createProfile(userId, req.body);
      resHelper.updated(res);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }

  // async fetchUserById(req, res) {
  //   try {
  //     const user = await userService.fetchUserById(req.params.userId);
  //     console.log('xxxxxxxxxxxxxxx'.user);
  //     resHelper.responseData(res, user);
  //   } catch (error) {
  //     resHelper.serverFailing(res, error.message);
  //   }
  // }

  async addUserPassword(req, res) {
    //remove after create the project
    try {
      const user = await userService.addUser(req.body);
      resHelper.created(res, user);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUsers(req, res) {
    try {
      const users = await userService.fetchUsers();
      resHelper.responseData(res, users);
    } catch (error) {
      console.log(error);
    }
  }

  async fogetPassword(req, res) {
    try {
      await userService.fogetPassword(req.body);
      resHelper.updated(res);
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(req, res) {
    try {
      const userId = req.params.userId;
      await userService.resetPassword(userId, req.body);
      resHelper.updated(res);
    } catch (error) {
      console.log(error);
    }
  }

  async userSearch(req, res) {
    try {
      const users = await userService.userSearch(req.body);
      resHelper.responseData(res, users);
    } catch (error) {
      console.log(error);
    }
  }

  async whoAmI(req, res) {
    try {
      const user = await userService.whoAmI(req.user);
      resHelper.responseData(res, user);
    } catch (error) {
      console.log(error);
    }
  }
}

const userController = new UserConatroller();
export default userController;
