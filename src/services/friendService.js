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
}

const friendService = new FriendService();
export default friendService;
