// Product actions here

import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCTS,
} from "./product.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_PRODUCTS = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  // console.log("data")
  try {
    if (id) {
      let res = await axios.get("http://localhost:8080/products/" + id);
      console.log(res.data, "from single");

      return dispatch({ type: GET_SINGLE_PRODUCTS, payload: res.data });
    }
    
    let res = await axios.get("http://localhost:8080/products");

    console.log(res, "from redux actions");

    return dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: err.message });
  }
};
