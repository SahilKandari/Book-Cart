import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import {cartActions} from "../store/cart-slice";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;
  const addCartHandler = () => {
   
    dispatch(
      cartActions.addItemCart({
        title: title,
        price: price,
        id: id,
      })
    );
    
  };

  return (
    <div className="row product-section-body ">
      {" "}
      <ul>
        <li>
          <div className="col-6 product-body py-3 px-4">
            <div className="row">
              <h3 className="col-6 text-start">{title}</h3>
              <span className="col-3 offset-3">${price.toFixed(2)}</span>
            </div>
            <div className="row text-start pt-3">
              <p className="col-6 ">{description}</p>
            </div>
            <div className="row">
              <button type="button" onClick={addCartHandler} className="col-3 offset-9 btn">
                Add to Cart
              </button>
            </div>
          </div>
        </li>
        ;
      </ul>
    </div>
  );
};
export default ProductItem;
