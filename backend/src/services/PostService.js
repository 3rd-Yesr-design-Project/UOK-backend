import postRepository from '../repositories/postRepository';

class PostService {
  createPost(user, requestBody) {
    const { title, postUrl, description } = requestBody;

    const body = {
      user_id: user.userId,
      title: title,
      post_url: postUrl,
      description: description,
    };

    return postRepository.createPost(body);
  }

  deletePost(postId) {
    return postRepository.deletePost(postId);
  }

  fetchPosts() {
    return postRepository.fetchPosts();
  }
}

const postService = new PostService();
export default postService;
