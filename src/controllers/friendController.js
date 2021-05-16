import friends from '../models/friends';
import friendService from '../services/friendService';
import resHelper from '../utils/Helpers/resHelper';

class FriendController {
  async addFriend(req, res) {
    try {
      await friendService.addFriend(req.user, req.body);
      resHelper.created(res);
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
}

const friendController = new FriendController();
export default friendController;
