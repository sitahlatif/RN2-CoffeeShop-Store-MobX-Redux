import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

import { connect } from "react-redux";

class CoffeeCart extends Component {
  render() {
    let items = this.props.cart;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.items
  };
};
export default connect(mapStateToProps)(CoffeeCart);
