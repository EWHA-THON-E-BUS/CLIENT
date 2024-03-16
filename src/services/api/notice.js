import client from "./client";

export const getNotices = async () => {
  try {
    const response = await client.get(`/notices`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getNoticeDetail = async noticeId => {
  try {
    const response = await client.get(`/notices/${noticeId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postNotice = async post => {
  try {
    const response = await client.post(`/notices`, post);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteNotice = async noticeId => {
  try {
    const response = await client.delete(`/notices/${noticeId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
