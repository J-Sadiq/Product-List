import { useState } from "react";

export default function Product({
  name,
  category,
  img,
  price,
  setSelectedProducts,
  quantity,
}) {
  const [isAdded, setIsadded] = useState(false);

  const increment = () => {
    setSelectedProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.name === name
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const decrement = () => {
    setSelectedProducts((currentProducts) => {
      const updatedProducts = currentProducts
        .map((product) =>
          product.name === name
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0);

      if (!updatedProducts.some((product) => product.name === name)) {
        setIsadded(false);
      }

      return updatedProducts;
    });
  };

  return (
    <div className="cart">
      <picture className="product-img">
        <source media="(max-width: 500px)" srcSet={img.mobile} />
        <source media="(max-width: 800px)" srcSet={img.tablet} />
        <img className="product-img" src={img.desktop} alt={name} />
      </picture>

      <h3 className="product-title">{category}</h3>
      <p className="product-des">{name}</p>
      <p className="product-price">${price.toFixed(2)}</p>

      {isAdded && quantity !== 0 ? (
        <button className="add-btn added-btn">
          <span onClick={decrement}>
            <img src={`images/icon-decrement-quantity.svg`} alt="decrement" />
          </span>

          {quantity}

          <span onClick={increment}>
            <img src="images/icon-increment-quantity.svg" alt="increment" />
          </span>
        </button>
      ) : (
        <button
          className="add-btn first-add"
          onClick={() => {
            setSelectedProducts((currentProducts) => [
              ...currentProducts,
              {
                imageTumbnail: img.thumbnail,
                name,
                category,
                price,
                quantity: 1,
              },
            ]);

            setIsadded(true);
          }}
        >
          <img src="images/icon-add-to-cart.svg" alt="" />
          <span>Add to Cart</span>
        </button>
      )}
    </div>
  );
}
