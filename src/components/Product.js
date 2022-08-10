import "./Product.css";
import React from "react";
import ProductItem from "./ProductItem";

const Dummy_Product = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "The first book I've ever wrote",
  },
  {
    id: "p2",
    price: 8,
    title: "My second book",
    description: "The second book I've ever wrote",
  },
  {
    id: "p3",
    price: 4,
    title: "My third book",
    description: "The third book I've ever wrote",
  },
  {
    id: "p4",
    price: 5,
    title: "My fourth book",
    description: "The fourth book I've ever wrote",
  },
  {
    id: "p5",
    price: 7,
    title: "My fifth book",
    description: "The fifth book I've ever wrote",
  },
];
const Product = () => {
  return (
    <div className="row  product-section">
      <div className="row product-header py-3 ">
        <h2 className="col-5">BUY YOUR FAVORITE PRODUCTS</h2>
      </div>
      {Dummy_Product.map((product) => (
        <ProductItem
          title={product.title}
          id ={product.id}
          key={product.id}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};
export default Product;
