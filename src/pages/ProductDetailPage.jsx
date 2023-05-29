import { ItemID } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import http from "../api/http";

const ProductDetailPage = () => {
  const nowItem = useRecoilValue(ItemID);
  const [nowDetail, setNowDetail] = useState(null);
  const item_detail = () => {
    http
      .get(`/items/${nowItem}`)
      .then((res) => {
        setNowDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    item_detail();
  }, []);

  return (
    <div>
      <div>
        {nowDetail.id}
        {nowDetail.title}
        {nowDetail.detail}
      </div>
    </div>
  );
};

export default ProductDetailPage;
