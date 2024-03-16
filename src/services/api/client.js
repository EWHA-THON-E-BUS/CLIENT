import axios from "axios";

const client = axios.create();
client.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL}`;
client.defaults.withCredentials = true;

const token = localStorage.getItem("token");

client.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;

export default client;
