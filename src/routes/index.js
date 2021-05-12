import express, { Router } from 'express';
import commentController from '../controllers/commentController';
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
// route.put('/api/v1/user/profile/:userId',userController.createProfile);
// route.get('/api/v1/user/:id', userController.fetchUserById);
route.get('/api/v1/all-user', userController.fetchUsers);
route.post('/api/v1/user/forgetpassword', userController.fogetPassword);
route.post('/api/v1/user/resetpassword/:userId', userController.resetPassword);
route.post('/api/v1/user/search', userController.userSearch);
route.get(
  '/api/v1/whoAmI',
  authentication.GrantAccess(),
  userController.whoAmI
);

//profile
// route.post(
//   '/api/v1/profile',
//   authentication.GrantAccess(),
//   profileController.createProfile
// );
route.put('/api/v1/profile/:userId', profileController.updateProfile);
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
route.get('/api/v1/posts/:userId', postController.fetchPostsByUserId);
route.delete('/api/v1/post/:postId', postController.deletePost);
route.get('/api/v1/all-posts', postController.fetchPosts);

//comment
route.post(
  '/api/v1/comment',
  authentication.GrantAccess(),
  commentController.createComment
);
route.delete('/api/v1/comment/:commentId', commentController.deleteCommnet);

//like
route.put(
  '/api/v1/like/:postId',
  authentication.GrantAccess(),
  likeController.updateLike
);

//subject
route.post('/api/v1/subject', subjectController.addSubject); // remove after create the project
route.post('/api/v1/subject/user', subjectController.addSubjectByUserId); // remove after the project

route.get(
  '/api/v1/student/subject/:year',
  authentication.GrantAccess(),
  subjectController.fetchSubjectByStudentIdAndYear
);
// route.put('/api/v1/subject/result/:id', subjectController.addSubjectResult);
// route.get(
//   '/api/v1/user/subject/:year/:studentNo',
//   subjectController.fetchStudentSubjectByStudentNoAndYear
// );
route.get('/api/v1/year/subject/:year', subjectController.fetchSubjectByYear);
route.get(
  '/api/v1/subject/:academicYear/:subjectId',
  subjectController.fetchStudentsBySubjectAndAcedemicYear
);
route.put('/api/v1/result', subjectController.updateResult);
export default route;
