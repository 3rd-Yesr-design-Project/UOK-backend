/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:03
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:22:03
 */

const Post = require('../models').posts;
const Comment = require('../models').comments;
const Like = require('../models').likes;

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
      include: [{ model: Comment }, { model: Like }],
    });
  }
}

const postRepository = new PostRepository();
export default postRepository;
