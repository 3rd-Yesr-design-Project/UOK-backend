/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:19:17
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:19:17
 */

import postService from '../services/PostService';
import resHelper from '../utils/Helpers/resHelper';

class PostController {
  async fetchPosts(req, res) {
    try {
      const posts = await postService.fetchPosts();
      resHelper.responseData(res, posts);
    } catch (error) {
      console.log(error);
      resHelper.serverFailing(res, error.message);
    }
  }

  async createPost(req, res) {
    try {
      const post = await postService.createPost(req.user, req.body);
      resHelper.created(res, post);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }

  async deletePost(req, res) {
    try {
      await postService.deletePost(req.params.postId);
      resHelper.deleted(res);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }
}

const postController = new PostController();
export default postController;
