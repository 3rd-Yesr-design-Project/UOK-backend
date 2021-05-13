'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _commentController = require('../controllers/commentController');

var _commentController2 = _interopRequireDefault(_commentController);

var _likeController = require('../controllers/likeController');

var _likeController2 = _interopRequireDefault(_likeController);

var _postController = require('../controllers/postController');

var _postController2 = _interopRequireDefault(_postController);

var _profileController = require('../controllers/profileController');

var _profileController2 = _interopRequireDefault(_profileController);

var _subjectController = require('../controllers/subjectController');

var _subjectController2 = _interopRequireDefault(_subjectController);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _authentication = require('../middleware/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

//user
route.post('/api/v1/user/temp', _userController2.default.addUserPassword); //remove after create the project
route.post('/api/v1/social/login', _userController2.default.socialLogin);
route.post('/api/v1/result/login', _userController2.default.resultLogin);
// route.put('/api/v1/user/profile/:userId',userController.createProfile);
// route.get('/api/v1/user/:id', userController.fetchUserById);
route.get('/api/v1/all-user', _userController2.default.fetchUsers);
route.post('/api/v1/user/forgetpassword', _userController2.default.fogetPassword);
route.post('/api/v1/user/resetpassword/:userId', _userController2.default.resetPassword);
route.post('/api/v1/user/search', _userController2.default.userSearch);
route.get('/api/v1/whoAmI', _authentication2.default.GrantAccess(), _userController2.default.whoAmI);

//profile
// route.post(
//   '/api/v1/profile',
//   authentication.GrantAccess(),
//   profileController.createProfile
// );
route.put('/api/v1/profile/:userId', _profileController2.default.updateProfile);
route.get('/api/v1/profile/:userId', _authentication2.default.GrantAccess(), _profileController2.default.fetchProfileByUserId);

//Post
route.post('/api/v1/post', _authentication2.default.GrantAccess(), _postController2.default.createPost);
route.get('/api/v1/posts/:userId', _postController2.default.fetchPostsByUserId);
route.delete('/api/v1/post/:postId', _postController2.default.deletePost);
route.get('/api/v1/all-posts', _postController2.default.fetchPosts);

//comment
route.post('/api/v1/comment', _authentication2.default.GrantAccess(), _commentController2.default.createComment);
route.delete('/api/v1/comment/:commentId', _commentController2.default.deleteCommnet);

//like
route.put('/api/v1/like/:postId', _authentication2.default.GrantAccess(), _likeController2.default.updateLike);

//subject
route.post('/api/v1/subject', _subjectController2.default.addSubject); // remove after create the project
route.post('/api/v1/subject/user', _subjectController2.default.addSubjectByUserId); // remove after the project

route.get('/api/v1/student/subject/:year', _authentication2.default.GrantAccess(), _subjectController2.default.fetchSubjectByStudentIdAndYear);
// route.put('/api/v1/subject/result/:id', subjectController.addSubjectResult);
// route.get(
//   '/api/v1/user/subject/:year/:studentNo',
//   subjectController.fetchStudentSubjectByStudentNoAndYear
// );
route.get('/api/v1/year/subject/:year', _subjectController2.default.fetchSubjectByYear);
route.get('/api/v1/subject/:academicYear/:subjectId', _subjectController2.default.fetchStudentsBySubjectAndAcedemicYear);
route.put('/api/v1/result', _subjectController2.default.updateResult);
exports.default = route;