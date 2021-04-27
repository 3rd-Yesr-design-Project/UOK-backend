import likeRepository from '../repositories/likeRepository';

class LikeService {
  async updateLike(user, postId, requestBody) {
    const isLiked = await likeRepository.fetchLikeByUserIdAndPostId(
      userId,
      postId
    );

    if (!isLiked) {
      const body = {
        user_id: user.userId,
        post_id: postId,
      };
      return likeRepository.createLike(body);
    }

    return likeRepository.deleteLike(userId, postId);
  }
}

const likeService = new LikeService();
export default likeService;
