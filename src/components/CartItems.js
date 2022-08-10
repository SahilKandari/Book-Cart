import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./CartItems.css";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const { title, price, quantity, total, id } = props;
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemCart({
        id,
        price,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemCart(id));
  };
  return (
    <div className="row cart-priceList py-3 = ">
      <div className="col-7 text-start">
        <h3 className="col-12">{title}</h3>
        <h3 className="col-12">x {quantity}</h3>
      </div>
      <div className="col-5 ">
        <div className="row">
          <h4 className="col-6 text-end">${total.toFixed(2)} </h4>
          <p className="col-6 text-start">(${price.toFixed(2)}/Item) </p>
        </div>
        <div className="row cart-button">
          {" "}
          <button onClick={removeItemHandler} className=" btn col-3 offset-4">
            <b>-</b>
          </button>
          <button onClick={addItemHandler} className=" btn col-3 ">
            <b>+</b>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
