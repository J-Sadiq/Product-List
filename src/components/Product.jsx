import { useState } from "react";

export default function Product({ name, category, img, price }) {
  return (
    <div className="cart">
      <picture className="product-img">
        <source media="(max-width: 500px)" srcSet={img.mobile} />

        <source media="(max-width: 800px)" srcSet={img.tablet} />

        <img className="product-img" src={img.desktop} />
      </picture>
      <h3 className="product-title">{category}</h3>
      <p className="product-des">{name}</p>
      <p className="product-price">${price}</p>
      <button className="add-btn">
        <img src="/images/icon-add-to-cart.svg" alt="" />{" "}
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
