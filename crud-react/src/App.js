import React, { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

export default class App extends Component {
  state = { cartItems: [] };
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data != null) {
      this.setState({ cartItems: data });
    }
  }
  addToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  retreveData = (item) => {
    let exist = this.state.cartItems.find((ele) => ele.id === item.id);
    if (exist) {
      let cart = this.state.cartItems.map((ele) =>
        ele.id === item.id ? { ...exist, qty: exist.qty + 1 } : ele
      );
      this.setState({ cartItems: cart });
      this.addToLocalStorage(cart);
    } else {
      let cart = [...this.state.cartItems, { ...item, qty: 1 }];
      this.setState({ cartItems: cart });
      this.addToLocalStorage(cart);
    }
  };

  removeItem = (item) => {
    let exist = this.state.cartItems.find((ele) => ele.id === item.id);
    if (exist.qty > 1) {
      let cart = this.state.cartItems.map((ele) =>
        ele.id === item.id ? { ...exist, qty: exist.qty - 1 } : ele
      );
      this.setState({ cartItems: cart });
      this.addToLocalStorage(cart);
    }
  };

  removeProduct = (item) => {
    let cart = this.state.cartItems.filter((ele) => ele.id !== item.id);
    this.setState({ cartItems: cart });
    this.addToLocalStorage(cart);
  };
  render() {
    let totalQty = this.state.cartItems.reduce((x, y) => x + y.qty, 0);
    let totalPrice = this.state.cartItems.reduce(
      (x, y) => x + y.qty * y.price,
      0
    );
    return (
      <>
        <Header totalPrice={totalPrice} totalQty={totalQty} />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Products retreveData={this.retreveData} />
            </div>
            <div className="col-md-3">
              <Cart
                retreveData={this.retreveData}
                cartItems={this.state.cartItems}
                removeItem={this.removeItem}
                removeProduct={this.removeProduct}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
