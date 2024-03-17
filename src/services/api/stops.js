import client from "./client";

export const getAllTime = async stop_id => {
  try {
    const response = await client.get(`/stops/${stop_id}/all`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTime = async stop_id => {
  try {
    const response = await client.get(`/stops/${stop_id}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPinnedStops = async () => {
  try {
    const response = await client.get(`/stops/pin`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postPinnedStops = async list => {
  try {
    const response = await client.post(`/stops/pin`, { stopPinned: list });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
