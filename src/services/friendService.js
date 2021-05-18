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

  async fetchFriends(user) {
    const a = await friendRepository.fetchFriends(user.userId);
    console.log('aaaaaaaaaa', a);
    return a;
  }

  async changeRequestStatus(requestId, requestBody) {
    const { status } = requestBody;
    const request = await friendRepository.fethRequestByRequestId(requestId);
    console.log('ggggggggggggggggggggg', request);
    const newReq = {
      user_id: request.friend_id,
      friend_id: request.user_id,
      status: 'accept',
    };
    await friendRepository.addFriend(newReq);
    const body = {
      status: status,
    };
    return friendRepository.changeRequestStatus(requestId, body);
  }

  async deleteFriendRequest(user, friendId) {
    await friendRepository.deleteFriendRequest(user.userId, friendId);
    return friendRepository.deleteFriendRequest(friendId, user.userId);
  }

  getFriendRequest(user) {
    return friendRepository.getFriendRequest(user.userId);
  }
}

const friendService = new FriendService();
export default friendService;
