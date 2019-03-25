import React, { Component } from "react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";
import { connect } from "react-redux";

class CoffeeList extends Component {
  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;
    if (loading) {
      return <Spinner />;
    }

    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(CoffeeList);
