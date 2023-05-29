import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const Temp = atom({
  key: "Temp",
  default: "Temp",
  effects_UNSTABLE: [persistAtom],
});
