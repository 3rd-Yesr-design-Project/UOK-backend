import express, { Router } from 'express';
import commentController from '../controllers/commentController';
import friendController from '../controllers/friendController';
import likeController from '../controllers/likeController';
import postController from '../controllers/postController';
import profileController from '../controllers/profileController';
import subjectController from '../controllers/subjectController';
import userController from '../controllers/userController';
import authentication from '../middleware/authentication';

const route = express.Router();

//user
route.post('/api/v1/user/temp', userController.addUserPassword); //remove after create the project
route.post('/api/v1/social/login', userController.socialLogin);
route.post('/api/v1/result/login', userController.resultLogin);
route.get(
  '/api/v1/all-user',
  authentication.GrantAccess(),
  userController.fetchUsers
);
route.post('/api/v1/user/forgetpassword', userController.fogetPassword);
route.post('/api/v1/user/resetpassword/:userId', userController.resetPassword);
route.post(
  '/api/v1/user/search',
  authentication.GrantAccess(),
  userController.userSearch
);
route.get(
  '/api/v1/whoAmI',
  authentication.GrantAccess(),
  userController.whoAmI
);

//profile
route.post(
  '/api/v1/profile',
  authentication.GrantAccess(),
  profileController.createProfile
);
route.put(
  '/api/v1/profile/:userId',
  authentication.GrantAccess(),
  profileController.updateProfile
);
route.get(
  '/api/v1/profile/:userId',
  authentication.GrantAccess(),
  profileController.fetchProfileByUserId
);

//Post
route.post(
  '/api/v1/post',
  authentication.GrantAccess(),
  postController.createPost
);
route.get(
  '/api/v1/posts/:userId',
  authentication.GrantAccess(),
  postController.fetchPostsByUserId
);
route.delete(
  '/api/v1/post/:postId',
  authentication.GrantAccess(),
  postController.deletePost
);
route.get(
  '/api/v1/all-posts',
  authentication.GrantAccess(),
  postController.fetchPosts
);

//comment
route.post(
  '/api/v1/comment',
  authentication.GrantAccess(),
  commentController.createComment
);
route.delete(
  '/api/v1/comment/:commentId',
  authentication.GrantAccess(),
  commentController.deleteCommnet
);

//like
route.put(
  '/api/v1/like/:postId',
  authentication.GrantAccess(),
  likeController.updateLike
);

//subject
route.post(
  '/api/v1/subject',
  authentication.GrantAccess(),
  subjectController.addSubject
); // remove after create the project
route.post(
  '/api/v1/subject/user',
  authentication.GrantAccess(),
  subjectController.addSubjectByUserId
); // remove after the project

route.get(
  '/api/v1/student/subject/:year',
  authentication.GrantAccess(),
  subjectController.fetchSubjectByStudentIdAndYear
);
route.get(
  '/api/v1/year/subject/:year',
  authentication.GrantAccess(),
  subjectController.fetchSubjectByYear
);
route.get(
  '/api/v1/subject/:academicYear/:subjectId',
  authentication.GrantAccess(),
  subjectController.fetchStudentsBySubjectAndAcedemicYear
);
route.put(
  '/api/v1/result',
  authentication.GrantAccess(),
  subjectController.updateResult
);

//friedn
route.post(
  '/api/v1/friend',
  authentication.GrantAccess(),
  friendController.addFriend
);
route.get(
  '/api/v1/friend/friend/:friendId',
  authentication.GrantAccess(),
  friendController.fetchFriend
);
route.get(
  '/api/v1/friend/all-friends',
  authentication.GrantAccess(),
  friendController.fetchFriends
);
route.put(
  '/api/v1/friend/:requestId',
  authentication.GrantAccess(),
  friendController.changeRequestStatus
);
route.delete(
  '/api/v1/friend/:requestId',
  authentication.GrantAccess(),
  friendController.deleteFriendRequest
);
route.get(
  '/api/v1/friend/pending',
  authentication.GrantAccess(),
  friendController.getFriendRequest
);
export default route;
