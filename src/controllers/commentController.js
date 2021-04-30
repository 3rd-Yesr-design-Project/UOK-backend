/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:18:14
 * @Last Modified by: Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:19:05
 */

import commentService from '../services/commentService';
import resHelper from '../utils/Helpers/resHelper';

class CommentController {
  async createComment(req, res) {
    try {
      const comment = await commentService.createComment(req.user, req.body);
      resHelper.created(res, comment);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }

  async deleteCommnet(req, res) {
    try {
      await commentService.deleteComment(req.params.commentId);
      resHelper.deleted(res);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }
}

const commentController = new CommentController();
export default commentController;
