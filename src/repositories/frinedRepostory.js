const Friend = require('../models').friends;

class FriendRepository {
  addFriend(body) {
    return Friend.create(body);
  }

  fetchFriend(userId, friendId) {
    return Friend.findOne({ where: { user_id: userId, friend_id: friendId } });
  }
}

const friendRepository = new FriendRepository();
export default friendRepository;
