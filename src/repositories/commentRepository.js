/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:21:39
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:21:39
 */

const Comment = require('../models').comments;

class CommentRepository {
  createComment(body) {
    return Comment.create(body);
  }

  deleteComment(commentId) {
    return Comment.destroy({
      where: {
        id: commentId,
      },
    });
  }
}

const commentRepository = new CommentRepository();
export default commentRepository;
