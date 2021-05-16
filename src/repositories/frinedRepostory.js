const Friend = require('../models').friends;
const User = require('../models').users;

class FriendRepository {
  addFriend(body) {
    return Friend.create(body);
  }

  fetchFriend(userId, friendId) {
    return Friend.findOne({ where: { user_id: userId, friend_id: friendId } });
  }

  fetchFriends(userId) {
    return Friend.findAll({
      include: [{ model: User, attributes: ['id', 'name'] }],
      where: { user_id: userId },
    });
  }
}

const friendRepository = new FriendRepository();
export default friendRepository;
