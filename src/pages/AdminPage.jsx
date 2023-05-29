import React, { useState, useEffect } from "react";
import http from "../api/http";
import { ItemID } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [items, setItems] = useState(null);
  const [itemID, setItemId] = useRecoilState(ItemID);
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
    <div>
      "Admin Page"
      <div>
        <div>등록된 상품</div>
        {items
          ? items.map((item, idx) => (
              <Link
                to={`/update/${item.id}/${item.title}`}
                key={idx}
                onClick={(e) => setItemId(item.id)}
              >
                <div>
                  <div>{item.title}</div>
                  <img src={item.img} alt="이미지가 없습니다" />
                  <div>{item.price}</div>
                </div>
              </Link>
            ))
          : null}
      </div>
      <button>상품 등록하기</button>
    </div>
  );
};

export default AdminPage;
