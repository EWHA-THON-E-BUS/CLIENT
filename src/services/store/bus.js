import { atom, selector } from "recoil";

export const isWeekdayState = atom({
  key: "isWeekdayState",
  default: true,
});

export const isSaturdayState = atom({
  key: "isSaturdayState",
  default: true,
});
