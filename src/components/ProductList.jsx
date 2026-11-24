import { useState } from "react";
import Product from "./Product";
import products from "../data";

export default function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <>
      <div className="products-list">
        <h1 className="title">Desserts</h1>
        <div className="carts-section">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              desktopImg={product.imageDesktopSrc}
              tabletImg={product.imageTabletSrc}
              mobileImg={product.imageMobileSrc}
              imgAlt={product.imageAlt}
              price={product.price}
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
                <p className="order-title">{selected.name}</p>
                <div className="details">
                  <p className="numbers">1x</p>
                  <p className="order-price">@ $5.00</p>
                  <p className="order-total">$20.00</p>
                </div>
              </div>
              <img
                className="remove"
                src="images/icon-remove-item.svg"
                alt="Remove"
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
    </>
  );
}
