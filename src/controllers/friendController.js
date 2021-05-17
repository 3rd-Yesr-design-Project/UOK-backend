import friends from '../models/friends';
import friendService from '../services/friendService';
import resHelper from '../utils/Helpers/resHelper';

class FriendController {
  async addFriend(req, res) {
    try {
      const friend = await friendService.addFriend(req.user, req.body);
      resHelper.created(res, friend);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchFriend(req, res) {
    try {
      const friendId = req.params.friendId;
      const friend = await friendService.fetchFriend(req.user, friendId);
      resHelper.responseData(res, friend);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchFriends(req, res) {
    try {
      const friends = await friendService.fetchFriends(req.user);
      resHelper.responseData(res, friends);
    } catch (error) {
      console.log(error);
    }
  }

  async changeRequestStatus(req, res) {
    try {
      const requestId = req.params.requestId;
      await friendService.changeRequestStatus(requestId, req.body);
      resHelper.updated(res);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteFriendRequest(req, res) {
    try {
      await friendService.deleteFriendRequest(req.params.requestId);
      resHelper.deleted(res);
    } catch (error) {
      console.log(error);
    }
  }

  async getFriendRequest(req, res) {
    try {
      const data = await friendService.getFriendRequest(req.user);
      resHelper.responseData(res, data);
    } catch (error) {
      console.log(error);
    }
  }
}

const friendController = new FriendController();
export default friendController;
