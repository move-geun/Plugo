import { useRecoilValue } from "recoil";
import { itemDetailSelector } from "../recoil/selector";

const ProductDetailPage = () => {
  const nowItem = useRecoilValue(itemDetailSelector);
  return (
    <div>
      <div>{nowItem.title}</div>
      <img src={nowItem.img} alt="이미지가 없습니다" />
    </div>
  );
};

export default ProductDetailPage;
