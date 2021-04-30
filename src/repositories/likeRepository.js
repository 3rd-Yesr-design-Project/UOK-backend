/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:21:47
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:21:47
 */

const Like = require('../models').likes;

class LikeRepository {
  createLike(body) {
    return Like.create(body);
  }

  fetchLikeByUserIdAndPostId(userId, postId) {
    return Like.findOne({
      where: {
        user_id: userId,
        post_id: postId,
      },
    });
  }

  deleteLike(userId, postId) {
    return Like.destroy({
      where: {
        user_id: userId,
        post_id: postId,
      },
    });
  }
}

const likeRepository = new LikeRepository();
export default likeRepository;
