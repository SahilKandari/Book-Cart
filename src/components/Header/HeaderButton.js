import React from "react";
import "./HeaderButton.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
const HeaderButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const showCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <div className="headerButton">
      <button className="btn" onClick={showCartHandler}>
        <p>My Cart</p>
        <span>{cartQuantity}</span>
      </button>
    </div>
  );
};
export default HeaderButton;
