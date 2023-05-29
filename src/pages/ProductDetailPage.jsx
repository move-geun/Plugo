import { useRecoilValue } from "recoil";
import { itemDetailSelector } from "../recoil/selector";
import { Link, useNavigate } from "react-router-dom";
import http from "../api/http";
import { useState, useEffect } from "react";

const ProductDetailPage = () => {
  const nowItem = useRecoilValue(itemDetailSelector);
  const [cartNum, setCartNum] = useState([]);
  const navigate = useNavigate();

  // 장바구니에 담겨 있는 요소 확인
  const getCart = () => {
    http
      .get("/cart")
      .then((res) => {
        const datas = res.data;
        for (let i = 0; i < datas.length; i++) {
          setCartNum((prev) => [...prev, datas[i].id]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCart = () => {
    // 이미 장바구니에 추가되어 있다면 바로 장바구니로 이동
    if (cartNum.includes(nowItem.id)) {
      navigate("/cart");
    } else {
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
    }
  };

  useEffect(() => {
    getCart();
  }, []);

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
