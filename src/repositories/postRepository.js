/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:22:03
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-05-13 22:19:32
 */

const Post = require('../models').posts;
const Comment = require('../models').comments;
const Like = require('../models').likes;
const User = require('../models').users;
const Profile = require('../models').profiles;

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
      include: [
        {
          model: User,
          include: [{ model: Profile, attributes: ['profile_url'] }],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name'],
              include: [{ model: Profile, attributes: ['profile_url'] }],
            },
          ],
        },
        { model: Like },
      ],
    });
  }

  fetchPostsByUserId(userId) {
    return Post.findAll({
      include: [
        { model: User, attributes: ['name'] },
        { model: Comment },
        { model: Like },
      ],
      where: {
        user_id: userId,
      },
    });
  }
}

const postRepository = new PostRepository();
export default postRepository;
