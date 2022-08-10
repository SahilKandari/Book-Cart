import React, { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import axios from "axios";

function App() {
  const [initialState, setInitialState] = useState(true);
  const showCart = useSelector((state) => state.ui.cartIsShown);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (initialState) {
      setInitialState(false);

      return;
    }

    axios
      .put(
        "https://redux-cart-6b446-default-rtdb.firebaseio.com/redux-cart.json",
        cart
      )
      .then((response) => {
        console.log(response.data, "put response");
      })
      .catch((error) => {
        console.log(error.message);
      });
      
  }, [cart]);
  return (
    <div className="App ">
      <div className="fluid-container">
        <Header />
        {showCart && <Cart />}
        <Product />
      </div>
    </div>
  );
}

export default App;
