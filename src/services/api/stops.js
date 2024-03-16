import client from "./client";

export const getAllTime = async stop_id => {
  try {
    const response = await client.get(`/stops/${stop_id}/all`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
