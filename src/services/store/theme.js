import { atom, selector } from "recoil";

export const themeState = atom({
  key: "themeState",
  default: localStorage.getItem("theme") || "LIGHT",
});
