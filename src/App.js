import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ShopPage from "./components/ShopPage";

function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (productData, qtyCnt) => {
    if (cart.find((itm) => itm.id === productData.id)) {
      const newCart = [...cart];
      setCart(
        newCart.map((itm) => {
          if (itm.id === productData.id) {
            return { ...itm, qty: itm.qty + qtyCnt };
          }
          return itm;
        })
      );
    } else {
      const cartItem = { ...productData, qty: qtyCnt };
      setCart([...cart, cartItem]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop">
            <ShopPage addItem={addItemToCart} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
