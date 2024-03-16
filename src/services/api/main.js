import client from "./client";

export const getMainData = async () => {
  try {
    const response = await client.get(`/main`);

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
