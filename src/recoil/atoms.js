import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const ItemID = atom({
  key: "ItemID",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
