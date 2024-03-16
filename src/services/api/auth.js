import client from "./client";

export const postAuthCode = async code => {
  try {
    const response = await client.post(`/auth/login`, {
      code: code,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};
