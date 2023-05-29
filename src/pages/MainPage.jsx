import React, { useEffect, useState } from "react";
import { MainContainer } from "./MainPage.style";
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
      {items
        ? items.map((item, idx) => (
            <Link
              to={`/detail/${item.id}/${item.title}`}
              key={idx}
              onClick={(e) => setItemId(item.id)}
            >
              <div>
                <div>{item.title}</div>
                <img src={item.img} alt="이미지가 없습니다" />
              </div>
            </Link>
          ))
        : null}
    </MainContainer>
  );
};

export default MainPage;
