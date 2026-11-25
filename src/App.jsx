import { useState } from "react";
import Product from "./components/Product";
import products from "./data/product.json";

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState([
    {
      imageTumbnail: "images/waffle-thumbnail.jpg",
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
      quantity: 1,
    },
  ]);

  const duplicates = selectedProducts.filter(
    (product, index) =>
      products.findIndex((p) => p.name === product.name) !== index,
  );

  return (
    <main>
      <div className="products-list">
        <h1 className="title">Desserts</h1>
        <div className="carts-section">
          {products.map((product) => (
            <Product
              key={product.name}
              name={product.name}
              category={product.category}
              img={product.image}
              price={product.price}
              setSelectedProducts={setSelectedProducts}
            />
          ))}
        </div>
      </div>
      {/* Order-List */}
      {selectedProducts.length > 0 ? (
        <div className="orders-list order-box">
          <h2 className="order-cart-title">
            Selected Products ({selectedProducts.length})
          </h2>
          {selectedProducts.map((selected) => (
            <div className="order">
              <div>
                <p className="order-title">{selected.category}</p>
                <div className="details">
                  <p className="numbers">{selected.quantity}x</p>
                  <p className="order-price">@ ${selected.price}</p>
                  <p className="order-total">
                    ${(selected.quantity * selected.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <img
                className="remove"
                src="images/icon-remove-item.svg"
                alt="Remove"
                onClick={() => {
                  setSelectedProducts((products) =>
                    products.filter(
                      (current) => selected.name !== current.name,
                    ),
                  );
                }}
              />
            </div>
          ))}
          <div className="total">
            <p className="order-total">Order Total</p>
            <p className="total-price">$40.00</p>
          </div>
          <div className="info">
            <img src="images/icon-carbon-neutral.svg" alt="Tree" />
            <p className="carbon">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>
          <button className="order-btn">Confirm Order</button>
        </div>
      ) : (
        <div className="no-order order-box">
          <h2 className="order-cart-title">Selected Products (0)</h2>
          <div className="empty-box">
            <img
              className="img-empty"
              src="images/empty-cart.svg"
              alt="Empty"
            />
            <p className="empty">Your added items will appear here</p>
          </div>
        </div>
      )}
    </main>
  );
}
