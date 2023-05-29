import React, { useEffect, useState } from "react";
import {
  MainContainer,
  Category,
  CardContainer,
  ItemCard,
} from "./MainPage.style";
import http from "../api/http";
import { ItemID } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [itemID, setItemId] = useRecoilState(ItemID);
  const [items, setItems] = useState(null);
  const item_list = () => {
    http
      .get("/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    item_list();
  }, []);

  return (
    <MainContainer>
      <Category>
        <input
          type="text"
          placeholder="검색하기"
          onClick={() => alert("구현중입니다")}
        />
        <div>모든 상품</div>
        <div>추천 상품</div>
        <div>특별 상품</div>
      </Category>
      <CardContainer>
        {items
          ? items.map((item, idx) => (
              <Link
                to={`/detail/${item.id}/${item.title}`}
                key={idx}
                onClick={(e) => setItemId(item.id)}
              >
                <ItemCard>
                  <img src={item.img} alt="이미지가 없습니다" />
                  <div className="stock"></div>
                  <div className="title">{item.title}</div>
                  <div className="price">Rp {item.price}</div>
                </ItemCard>
              </Link>
            ))
          : null}
      </CardContainer>
    </MainContainer>
  );
};

export default MainPage;
