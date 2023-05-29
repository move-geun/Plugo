import { useRecoilValue } from "recoil";
import { itemDetailSelector } from "../recoil/selector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProductDetail = () => {
  const navigate = useNavigate();
  const NowItem = useRecoilValue(itemDetailSelector);
  const [form, setForm] = useState({
    id: NowItem.id,
    title: NowItem.title,
    stock: NowItem.stock,
    price: NowItem.price,
    img: NowItem.img,
    detail: NowItem.detail,
    detail2: NowItem.detail2,
    size: NowItem.size,
    pound: NowItem.pound,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const itemUpdate = () => {
    fetch(`http://localhost:4000/items/${NowItem.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
    navigate("/admin");
  };

  const itemlDelete = () => {
    fetch(`http://localhost:4000/items/${NowItem.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("delete item");
    });
    navigate("/admin");
  };

  return (
    <div>
      <form onSubmit="">
        <div>
          <label htmlFor="title">
            상품명
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="stock">
            재고
            <input
              type="text"
              name="stock"
              value={form.stock}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            가격
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="img">
            이미지 링크
            <input
              type="text"
              name="img"
              value={form.img}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="detail">
            상품설명
            <input
              type="text"
              name="detail"
              value={form.detail}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="detail2">
            상품설명2
            <input
              type="text"
              name="detail2"
              value={form.detail2}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="size">
            사이즈
            <input
              type="text"
              name="size"
              value={form.size}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="pound">
            무게
            <input
              type="text"
              name="pound"
              value={form.pound}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={itemUpdate}>저장</button>
      </form>

      <button onClick={itemlDelete}>아이템 삭제</button>
    </div>
  );
};

export default AdminProductDetail;
