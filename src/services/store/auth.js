import { atom, selector } from "recoil";

export const tokenState = atom({
  key: "tokenState",
  default: localStorage.getItem("token") || "",
});

export const isLoginState = atom({
  key: "isLoginState",
  default: !!localStorage.getItem("token"),
});
