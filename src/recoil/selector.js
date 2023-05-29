import http from "../api/http";
import { selector } from "recoil";
import { ItemID } from "./atoms";

export const itemDetailSelector = selector({
  key: "itemDetailSelector",
  get: async ({ get }) => {
    const Id = get(ItemID);
    const res = await http.get(`/items/${Id}`);
    return res.data;
  },
});
