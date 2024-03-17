import client from "./client";

export const getMember = async () => {
  try {
    const response = await client.get(`/members/role`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const patchMember = async () => {
  try {
    const response = await client.patch(`/members/role`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
