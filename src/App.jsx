import { useState } from "react";
import Product from "./components/Product";
import products from "./data/product.json";

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  // Calculate total price
  const totalPrice = selectedProducts.reduce(
    (total, product) => total + product.quantity * product.price,
    0,
  );

  return (
    <main>
      <div className="products-list">
        <h1 className="title">Desserts</h1>
        <div className="carts-section">
          {products.map((product) => {
            const selectedProduct = selectedProducts.find(
              (selected) => selected.name === product.name,
            );

            return (
              <Product
                key={product.name}
                name={product.name}
                category={product.category}
                img={product.image}
                price={product.price}
                setSelectedProducts={setSelectedProducts}
                quantity={selectedProduct?.quantity || 0}
              />
            );
          })}
        </div>
      </div>

      {/* Order List */}
      {selectedProducts.length > 0 ? (
        <div className="orders-list order-box">
          <h2 className="order-cart-title">
            Selected Products ({selectedProducts.length})
          </h2>

          {selectedProducts.map((selected) => (
            <div className="order" key={selected.name}>
              <div>
                <p className="order-title">{selected.category}</p>

                <div className="details">
                  <p className="numbers">{selected.quantity}x</p>

                  <p className="order-price">@ ${selected.price.toFixed(2)}</p>

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
                  setSelectedProducts((currentProducts) =>
                    currentProducts.filter(
                      (product) => product.name !== selected.name,
                    ),
                  );
                }}
              />
            </div>
          ))}

          <div className="total">
            <p className="order-total">Order Total</p>
            <p className="total-price">${totalPrice.toFixed(2)}</p>
          </div>

          <div className="info">
            <img src="images/icon-carbon-neutral.svg" alt="Tree" />

            <p className="carbon">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>

          <button className="order-btn" onClick={() => setConfirmed(true)}>
            Confirm Order
          </button>
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

      {/* Order Confirmation */}
      {confirmed && selectedProducts.length > 0 && (
        <>
          <div className="order-confirm">
            <img
              className="confirm-icon"
              src="images/icon-order-confirmed.svg"
              alt="Confirmed"
            />

            <div>
              <h2 className="confirm-title">Order Confirmed</h2>

              <p className="confirm-des">We hope you enjoy your food!</p>
            </div>

            <ul className="product-list">
              {selectedProducts.map((product) => (
                <li className="product-item" key={product.name}>
                  <div className="itme-p-left">
                    <img
                      className="item-img"
                      src={product.imageTumbnail}
                      alt={product.category}
                    />

                    <div>
                      <p className="item-name">{product.category}</p>

                      <div className="item-des">
                        <p className="quantity">{product.quantity}x</p>

                        <p className="item-price">
                          @ ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="total-item-price">
                    ${(product.quantity * product.price).toFixed(2)}
                  </p>
                </li>
              ))}

              <li className="product-item order-item">
                <p className="order-item-title">Order Total</p>

                <p className="total-order-price">${totalPrice.toFixed(2)}</p>
              </li>
            </ul>

            <button
              className="order-btn"
              onClick={() => {
                setSelectedProducts([]);
                setConfirmed(false);
              }}
            >
              Start New Order
            </button>
          </div>

          <div className="overlay"></div>
        </>
      )}
    </main>
  );
}
