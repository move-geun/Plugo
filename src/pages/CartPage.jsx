import React, { useEffect, useState } from "react";
import http from "../api/http";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(null);
  const cart_list = () => {
    http
      .get("/cart")
      .then((res) => {
        setCartItems(res.data);
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
    <div>
      "Cart Page"
      {cartItems
        ? cartItems.map((cart, idx) => (
            <div key={idx}>
              <div>
                <div>{cart.id}</div>
                <div>{cart.title}</div>
                <img src={cart.img} alt="" />
              </div>
              <button onClick={() => itemlDelete(cart.id)}>
                장바구니에서 삭제
              </button>
            </div>
          ))
        : null}
    </div>
  );
};

export default CartPage;
