import client from "./client";

export const getItems = async search => {
  try {
    const response = await client.get(
      `/items?keyword=${search.keyword}&date=${search.date}`,
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getItemDetail = async itemsId => {
  try {
    const response = await client.get(`/items/${itemsId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postItem = async post => {
  try {
    const response = await client.post(`/items`, post);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteItem = async itemsId => {
  try {
    const response = await client.delete(`/items/${itemsId}`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getS3ImgUrl = async imgMeta => {
  let uploadURL = "";
  const endPoint = process.env.REACT_APP_S3_API_ENDPOINT;
  try {
    const res = await axios.post(endPoint, {
      fileName: "qwefdsac/" + imgMeta.name,
    });

    uploadURL = res.data;
    const headers = {
      "Content-Type": imgMeta.type,
    };
    const upload = await axios.put(uploadURL, imgMeta, {
      headers,
    });
    return uploadURL.split("?")[0];
  } catch (err) {
    console.log(err);
  }
};
