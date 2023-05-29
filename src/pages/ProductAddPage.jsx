import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import { AddContainer } from "./ProductAddPage.style";

const ProductAddPage = () => {
  const navigate = useNavigate();
  const [newId, setNewId] = useState(null);
  const createNewID = () => {
    http
      .get("/items")
      .then((res) => {
        setNewId(res.data[-1].id + 11);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [form, setForm] = useState({
    id: newId,
    title: "",
    stock: "",
    price: "",
    img: "",
    detail: "",
    detail2: "",
    size: "",
    pound: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const itemUpdate = () => {
    fetch(`http://localhost:4000/items/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    navigate("/admin");
  };
  useEffect(() => {
    createNewID();
  }, []);
  return (
    <AddContainer>
      <form onSubmit="return false">
        <div>
          <label htmlFor="title">
            상품명
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="상품명을 입력해주세요"
            />
          </label>
          <label htmlFor="stock">
            재고
            <input
              type="text"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="재고 유무를 입력해주세요"
            />
          </label>
          <label htmlFor="price">
            가격
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="가격을 입력해주세요"
            />
          </label>
          <label htmlFor="img">
            이미지 링크
            <input
              type="text"
              name="img"
              value={form.img}
              onChange={handleChange}
              placeholder="사진 링크를 입력해주세요"
            />
          </label>
          <label htmlFor="detail">
            상품설명
            <input
              type="text"
              name="detail"
              value={form.detail}
              onChange={handleChange}
              placeholder="상품 설명을 입력해주세요"
            />
          </label>
          <label htmlFor="detail2">
            상품설명2
            <input
              type="text"
              name="detail2"
              value={form.detail2}
              onChange={handleChange}
              placeholder="상품 설명을 입력해주세요"
            />
          </label>
          <label htmlFor="size">
            사이즈
            <input
              type="text"
              name="size"
              value={form.size}
              onChange={handleChange}
              placeholder="사이즈를 입력해주세요"
            />
          </label>
          <label htmlFor="pound">
            무게
            <input
              type="text"
              name="pound"
              value={form.pound}
              onChange={handleChange}
              placeholder="상품 무게를 입력해주세요"
            />
          </label>
        </div>
      </form>
      <div className="btnCase green" onClick={itemUpdate}>
        등록하기
      </div>
    </AddContainer>
  );
};

export default ProductAddPage;
