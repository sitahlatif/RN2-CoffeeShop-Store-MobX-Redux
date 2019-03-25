import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";
import { connect } from "react-redux";
import * as actionCreators from "../../Stores/actions";

class HomePage extends Component {
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.items,
    coffee: state.coffee.coffeeShops
  };
};
const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(actionCreators.getCoffeeShops())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
