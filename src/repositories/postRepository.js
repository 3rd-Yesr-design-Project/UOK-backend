/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:03
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-10 08:49:28
 */

const Post = require('../models').posts;
const Comment = require('../models').comments;
const Like = require('../models').likes;
const User = require('../models').users;

class PostRepository {
  createPost(body) {
    return Post.create(body);
  }

  deletePost(postId) {
    return Post.destroy({
      where: {
        id: postId,
      },
    });
  }

  fetchPosts() {
    return Post.findAll({
      include: [{ model: User }, { model: Comment }, { model: Like }],
    });
  }

  fetchPostsByUserId(userId) {
    return Post.findAll({
      where: {
        user_id: userId,
      },
    });
  }
}

const postRepository = new PostRepository();
export default postRepository;
