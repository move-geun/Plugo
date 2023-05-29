import React, { useEffect, useState } from "react";
import http from "../api/http";
import { CartContainer, ItemContainer, ItemCard } from "./CartPage.style";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(null);
  const [cartLen, setCartLen] = useState(null);
  const cart_list = () => {
    http
      .get("/cart")
      .then((res) => {
        setCartItems(res.data);
        setCartLen(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const itemlDelete = (id) => {
    fetch(`http://localhost:4000/cart/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("delete item");
    });
    window.location.reload();
  };

  useEffect(() => {
    cart_list();
  }, []);

  return (
    <CartContainer>
      <div className="title">내 장바구니 ( {cartLen} )</div>
      <ItemContainer>
        <div className="leftContainer">
          <div className="checkbox">
            <input type="checkbox" name="allCheck" />
            <label htmlFor="allCheck">모두 선택</label>
            <input type="checkbox" name="allCancle" />
            <label htmlFor="allCancle">모두 해제</label>
          </div>
          {cartLen ? (
            cartItems.map((cart, idx) => (
              <ItemCard key={idx}>
                <div className="top">
                  <div>
                    <input type="checkbox" name="check" className="itemCheck" />
                    <label htmlFor="check"></label>
                  </div>
                  <div className="card">
                    <img src={cart.img} alt="" />
                  </div>
                  <div className="itemDetail">
                    <div className="itemStock">{cart.stock}</div>
                    <div className="itemTitle">{cart.title}</div>
                    <div className="itemPrice">{cart.price}</div>
                  </div>
                </div>
                <div className="bottom">
                  <div onClick={() => itemlDelete(cart.id)} className="delBtn">
                    장바구니 삭제
                  </div>
                  <div className="orderBtn">
                    <button>-</button>
                    <div>1</div>
                    <button>+</button>
                  </div>
                </div>
              </ItemCard>
            ))
          ) : (
            <div className="empty">
              장바구니가 비었습니다
              <div className="goShop">쇼핑하러 가기</div>
            </div>
          )}
        </div>
        <div className="rightContainer">
          <div className="flexbox">지출 요약</div>
          <div className="flexbox">
            <div>상품 정상가</div>
            <div>total 원</div>
          </div>
          <div className="flexbox">
            <div>상품 정상가</div>
            <div>total 원</div>
          </div>
          <div
            className="flexbox nowBtn"
            onClick={() => alert("기능 구현중입니다.")}
          >
            지금 주문하기
          </div>
        </div>
      </ItemContainer>
    </CartContainer>
  );
};

export default CartPage;
