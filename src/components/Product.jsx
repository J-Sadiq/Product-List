import { useState } from "react";

export default function Product({
  name,
  description,
  desktopImg,
  tabletImg,
  mobileImg,
  imgAlt,
  price,
}) {
  return (
    <div className="cart">
      <picture className="product-img">
        <source media="(max-width: 500px)" srcSet={mobileImg} />

        <source media="(max-width: 800px)" srcSet={tabletImg} />

        <img className="product-img" src={desktopImg} alt={imgAlt} />
      </picture>
      <h3 className="product-title">{name}</h3>
      <p className="product-des">{description}</p>
      <p className="product-price">{price}</p>
      <button className="add-btn">
        <img src="/images/icon-add-to-cart.svg" alt="" />{" "}
        <span>Add to Cart</span>
      </button>
    </div>
  );
}
