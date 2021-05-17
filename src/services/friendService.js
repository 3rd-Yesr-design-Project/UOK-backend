import friendRepository from '../repositories/frinedRepostory';

class FriendService {
  addFriend(user, requestBody) {
    const { friendId } = requestBody;
    const body = {
      user_id: user.userId,
      friend_id: friendId,
      status: 'pending',
    };
    return friendRepository.addFriend(body);
  }

  fetchFriend(user, friendId) {
    return friendRepository.fetchFriend(user.userId, friendId);
  }

  fetchFriends(user) {
    return friendRepository.fetchFriends(user.userId);
  }

  changeRequestStatus(requestId, requestBody) {
    const { status } = requestBody;
    const body = {
      status: status,
    };
    return friendRepository.changeRequestStatus(requestId, body);
  }

  deleteFriendRequest(requestId) {
    return friendRepository.deleteFriendRequest(requestId);
  }

  getFriendRequest(user) {
    return friendRepository.getFriendRequest(user.userId);
  }
}

const friendService = new FriendService();
export default friendService;
