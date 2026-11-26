import { useState } from "react";

export default function Product({
  name,
  category,
  img,
  price,
  setSelectedProducts,
  quantity,
  setQuantity,
}) {
  const [isAdded, setIsadded] = useState(false);
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

      {isAdded && quantity !== 0 ? (
        <button className="add-btn added-btn">
          <span
            onClick={() => {
              setSelectedProducts((currentProducts) => {
                if (quantity > 1) {
                  setQuantity((num) => num - 1);
                  return currentProducts.map((product) =>
                    product.name === name
                      ? { ...product, quantity: product.quantity - 1 }
                      : product,
                  );
                } else {
                  setIsadded(false);
                  return currentProducts.filter(
                    (product) => product.name !== name,
                  );
                }
              });
            }}
          >
            <img src="images/icon-decrement-quantity.svg" alt="decrement" />
          </span>
          {quantity}
          <span
            onClick={() => {
              setSelectedProducts((currentProducts) => {
                const existingProduct = currentProducts.find(
                  (product) => product.name === name,
                );

                if (existingProduct) {
                  setQuantity((num) => num + 1);
                  return currentProducts.map((product) =>
                    product.name === name
                      ? { ...product, quantity: product.quantity + 1 }
                      : product,
                  );
                }
              });
            }}
          >
            <img src="images/icon-increment-quantity.svg" alt="" />
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
                name: name,
                category: category,
                price: price,
                quantity: quantity,
              },
            ]);

            setIsadded(true);
          }}
        >
          <img src="/images/icon-add-to-cart.svg" alt="" />{" "}
          <span>Add to Cart</span>
        </button>
      )}
    </div>
  );
}
