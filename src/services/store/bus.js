import { atom, selector } from "recoil";

export const dayState = atom({
  key: "dayState",
  default: "weekday",
});
