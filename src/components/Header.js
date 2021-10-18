import React, { useState } from "react";
import { Link } from "react-router-dom";
import bikeIcon from "../images/bike_icon_yellow.png";
import cartIcon from "../images/cart-blue.png";
import "../styles/header.css";
import search from "../images/search.png";
import ProductCard from "./ProductCard";

function Header(props) {
  const [showCart, setShowCart] = useState(false);

  const cartClass = showCart ? "cart-drawer active" : "cart-drawer";
  const showCartDrawer = () => {
    setShowCart(!showCart);
  };

  const cartCount = props.cart.reduce((prev, itm) => prev + itm.qty, 0);

  const subTotal = props.cart.reduce(
    (prev, itm) => prev + itm.price * itm.qty,
    0
  );

  return (
    <header>
      <div className="main-nav">
        <div className="bike-logo-bttn">
          <Link to="/">
            <img src={bikeIcon} alt="bike-icon" />
          </Link>
        </div>
        <div className="search-ctn">
          <input id="search" type="text" />
          <img id="search-icon" src={search} alt="search-icon" />
        </div>
        <div className="cart-ctn">
          <Link to="/shop">
            <div className="shop-bttn">SHOP</div>
          </Link>

          <div className="cart-logo-bttn" onClick={showCartDrawer}>
            <p style={{ visibility: cartCount === 0 ? "hidden" : "visible" }}>
              {cartCount}
            </p>
            <img src={cartIcon} alt="cart-icon" />
          </div>
        </div>
      </div>

      <div className={cartClass}>
        <div className="cart-drawer-nav">
          <h4>YOUR CART</h4>
          <div onClick={showCartDrawer}>x</div>
        </div>
        <div className="cart-display">
          {props.cart.map((item) => (
            <div className="cart-drawer-item">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <img src={item.picture} alt="product-pic" />
                <div>{item.name} </div>
              </div>

              <p style={{ textAlign: "right", marginRight: "40px" }}>
                {item.price} x {item.qty}
              </p>
            </div>
          ))}
        </div>
        <p className="subtotal">
          <strong>Subtotal:</strong> {subTotal}
        </p>
        <p>Shipping & Taxes calculated at checkout</p>
        <button>CHECKOUT</button>
      </div>
    </header>
  );
}

export default Header;
