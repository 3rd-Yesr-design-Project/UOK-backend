/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:20:19
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-10 23:40:38
 */

import likeRepository from '../repositories/likeRepository';

class LikeService {
  async updateLike(user, postId, requestBody) {
    const isLiked = await likeRepository.fetchLikeByUserIdAndPostId(
      user.userId,
      postId
    );

    if (!isLiked) {
      const body = {
        user_id: user.userId,
        post_id: postId,
      };
      return likeRepository.createLike(body);
    }

    return likeRepository.deleteLike(user.userId, postId);
  }
}

const likeService = new LikeService();
export default likeService;
