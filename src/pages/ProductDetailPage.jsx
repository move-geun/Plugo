import { useRecoilValue } from "recoil";
import { itemDetailSelector } from "../recoil/selector";
import { Link, useNavigate } from "react-router-dom";
import http from "../api/http";
import { useState, useEffect } from "react";
import {
  DetailContainer,
  ImageContainer,
  ItemContainer,
  PurchaseBox,
  DetailBox,
  AdressBox,
  ContactBox,
} from "./ProductDetailPage.style";

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
    <DetailContainer>
      <ImageContainer>
        <img src={nowItem.img} alt="이미지가 없습니다" />
      </ImageContainer>
      <ItemContainer>
        <div className="titleCase">
          {nowItem.stock === "True" ? (
            <div className="stock">재고있음</div>
          ) : (
            <div className="stock">품절</div>
          )}
          <div>{nowItem.title}</div>
          <div>{nowItem.price}</div>
        </div>

        <button
          onClick={(e) => {
            addCart();
          }}
        >
          <Link to={"/cart"}>장바구니에 추가 </Link>
        </button>

        <PurchaseBox>
          <div>color:</div>
          <div className="flexbox">
            <div className="purchase">
              <img src={nowItem.img} alt="이미지가 없습니다" />
              <div>
                <div>Black</div>
                <div>Rp {nowItem.price}</div>
              </div>
            </div>
            <div
              className="purchaseBtn"
              onClick={() => alert("기능 구현중입니다")}
            >
              구입하기
            </div>
          </div>
        </PurchaseBox>
        <DetailBox>
          <div>{nowItem.detail}</div>
          <div>{nowItem.deatil2}</div>
          <div>{nowItem.size}</div>
          <div>{nowItem.pound}</div>
        </DetailBox>
        <AdressBox>주소 찾기</AdressBox>
        <ContactBox onClick={() => alert("기능 구현중입니다")}>
          문의하기
        </ContactBox>
      </ItemContainer>
    </DetailContainer>
  );
};

export default ProductDetailPage;
