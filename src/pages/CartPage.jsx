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

  useEffect(() => {
    cart_list();
  }, []);

  return (
    <div>
      "Cart Page"
      {cartItems
        ? cartItems.map((cart, idx) => (
            <div key={idx}>
              <div>{cart.id}</div>
            </div>
          ))
        : null}
    </div>
  );
};

export default CartPage;
