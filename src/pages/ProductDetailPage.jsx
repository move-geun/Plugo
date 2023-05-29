import { useRecoilValue, useRecoilState } from "recoil";
import { itemDetailSelector } from "../recoil/selector";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const nowItem = useRecoilValue(itemDetailSelector);
  const addCart = () => {
    const data = {
      id: nowItem.id,
      title: nowItem.title,
      stock: nowItem.stock,
      img: nowItem.img,
      price: nowItem.price,
    };
    fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div>{nowItem.title}</div>
      <img src={nowItem.img} alt="이미지가 없습니다" />
      <Link to={"/cart"}>
        <button
          onClick={(e) => {
            addCart();
          }}
        >
          장바구니에 추가
        </button>
      </Link>
    </div>
  );
};

export default ProductDetailPage;
