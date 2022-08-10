import "./Cart.css";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const onlyForTripping = useCallback(() => {
    axios
      .get(
        "https://redux-cart-6b446-default-rtdb.firebaseio.com/redux-cart.json"
      )
      .then((res) => {
        dispatch(cartActions.replaceDataReducer(res.data.items || []));
        dispatch(cartActions.totalQuantityReducer(res.data.totalQuantity));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);
  useEffect(() => {
    onlyForTripping();
  }, [onlyForTripping]);

  return (
    <div className="row cart-section my-3">
      <div className="col-4 cart-box">
        <div className="row text-center mt-3 ps-2">
          {cartItems.length !== 0 && <h2>Your Shopping Cart</h2>}
          {cartItems.length === 0 && <h2>Please add a book first</h2>}
        </div>

        {cartItems.map((item) => {
          return (
            <CartItems
              title={item.name}
              price={item.price}
              quantity={item.quantity}
              total={item.totalPrice}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
