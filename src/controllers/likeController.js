/*
 * @Author: Anjana (anjanashakthi95@gmail.com)
 * @Date: 2021-04-30 06:19:00
 * @Last Modified by:   Anjana (anjanashakthi95@gmail.com)
 * @Last Modified time: 2021-04-30 06:19:00
 */

import likeService from '../services/likeService';
import resHelper from '../utils/Helpers/resHelper';

class LikeController {
  async updateLike(req, res) {
    try {
      const postId = req.params.postId;
      await likeService.updateLike(req.user, postId, req.body);
      resHelper.updated(res);
    } catch (error) {
      resHelper.serverFailing(res, error.message);
    }
  }
}

const likeController = new LikeController();
export default likeController;
