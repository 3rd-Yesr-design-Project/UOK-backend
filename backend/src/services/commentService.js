import commentRepository from '../repositories/commentRepository';

class CommentService {
  createComment(user, requestBody) {
    const { postId, comment } = requestBody;

    const body = {
      user_id: user.userId,
      post_id: postId,
      comment: comment,
    };

    return commentRepository.createComment(body);
  }

  deleteComment(commentId) {
    return commentRepository.deleteComment(commentId);
  }
}

const commentService = new CommentService();
export default commentService;
