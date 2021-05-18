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
      include: [{ model: User, as: 'friend', attributes: ['id', 'name'] }],
      where: { user_id: userId, status: 'accept' },
    });
  }

  changeRequestStatus(requestId, body) {
    return Friend.update(body, { where: { id: requestId } });
  }

  fethRequestByRequestId(requestId) {
    return Friend.findOne({ where: { id: requestId } });
  }

  deleteFriendRequest(userId, friendId) {
    return Friend.destroy({ where: { user_id: userId, friend_id: friendId } });
  }

  getFriendRequest(userId) {
    return Friend.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        friend_id: userId,
        status: 'pending',
      },
    });
  }
}

const friendRepository = new FriendRepository();
export default friendRepository;
