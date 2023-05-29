import React, { useState, useEffect } from "react";
import http from "../api/http";
import { ItemID } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { AdminContainer, ItemCard } from "./AdminPage.style";

const AdminPage = () => {
  const [items, setItems] = useState(null);
  const [updateItem, setUpdateItem] = useState(1);
  const [itemID, setItemId] = useRecoilState(ItemID);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: updateItem.id,
    title: updateItem.title,
    stock: updateItem.stock,
    price: updateItem.price,
    img: updateItem.img,
    detail: updateItem.detail,
    detail2: updateItem.detail2,
    size: updateItem.size,
    pound: updateItem.pound,
  });

  const item_detail = () => {
    http
      .get(`/items/${itemID}`)
      .then((res) => {
        setUpdateItem(res.data);
        setForm({
          id: res.data.id,
          title: res.data.title,
          stock: res.data.stock,
          price: res.data.price,
          img: res.data.img,
          detail: res.data.detail,
          detail2: res.data.detail2,
          size: res.data.size,
          pound: res.data.pound,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const itemUpdate = () => {
    fetch(`http://localhost:4000/items/${updateItem.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  const itemlDelete = () => {
    fetch(`http://localhost:4000/items/${updateItem.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("delete item");
    });
    window.location.reload();
  };

  useEffect(() => {
    item_list();
    item_detail();
  }, [itemID]);

  return (
    <div>
      <Link to={"/addproduct"}>
        <button>상품 등록하기</button>
      </Link>
      <AdminContainer>
        <div className="leftContainer">
          <div className="title">등록된 상품</div>
          <div>
            {items
              ? items.map((item, idx) => (
                  <ItemCard key={idx} onClick={(e) => setItemId(item.id)}>
                    <img src={item.img} alt="이미지가 없습니다" />
                    <div className="flexCol">
                      <div>{item.title}</div>
                      <div>{item.price}</div>
                    </div>
                  </ItemCard>
                ))
              : null}
          </div>
        </div>
        <div className="rightContainer">
          <form onSubmit="return false">
            <div>
              <img src={form.img} alt="이미지가 없습니다" />
              <label htmlFor="title">
                상품명
                <input
                  type="text"
                  name="title"
                  value={"" || form.title}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="stock">
                재고
                <input
                  type="text"
                  name="stock"
                  value={"" || form.stock}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="price">
                가격
                <input
                  type="text"
                  name="price"
                  value={"" || form.price}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="img">
                이미지 링크
                <input
                  type="text"
                  name="img"
                  value={"" || form.img}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="detail">
                상품설명
                <input
                  type="text"
                  name="detail"
                  value={"" || form.detail}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="detail2">
                상품설명2
                <input
                  type="text"
                  name="detail2"
                  value={"" || form.detail2}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="size">
                사이즈
                <input
                  type="text"
                  name="size"
                  value={"" || form.size}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="pound">
                무게
                <input
                  type="text"
                  name="pound"
                  value={"" || form.pound}
                  onChange={handleChange}
                />
              </label>
            </div>
          </form>
          <div className="btnCase">
            <div className="green" onClick={itemUpdate}>
              저장
            </div>
            <div className="red" onClick={itemlDelete}>
              아이템 삭제
            </div>
          </div>
        </div>
      </AdminContainer>
    </div>
  );
};

export default AdminPage;
