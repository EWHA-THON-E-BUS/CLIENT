import client from "./client";
import axios from "axios";

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
    const response = await client.post(`/items`, post, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
