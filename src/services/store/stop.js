import { atom, selector } from "recoil";

export const selectedListState = atom({
  key: "selectedListState", // 상태를 식별하는 고유한 키
  default: [false, false, false, false, false, false, false, false], // 초기 상태
});
