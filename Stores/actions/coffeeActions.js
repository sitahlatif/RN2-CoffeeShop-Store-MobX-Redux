import axios from "axios";

import * as actionTypes from "./types";

// const instance = axios.create({
//   baseURL: "http://coffee.q8fawazo.me/api/?format=json"
// });

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const CoffeeShop = res.data;
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: CoffeeShop
      });
    } catch (err) {}
  };
};

export const setCoffeeShopsLoading = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.COFFEESHOPS_LOADING
      //   payload:
    });
  };
};
