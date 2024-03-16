import client from "./client";

export const getPosts = async type => {
  try {
    const response = await client.get(`/posts/${type}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPostDetail = async postId => {
  try {
    const response = await client.get(`/posts/${postId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postPost = async (type, post) => {
  try {
    const response = await client.post(`/posts/${type}`, post);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deletePost = async postId => {
  try {
    const response = await client.delete(`/posts/${postId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postHeart = async postId => {
  try {
    const response = await client.post(`/hearts`, { postId: postId });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
