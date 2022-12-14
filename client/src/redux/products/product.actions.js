// Product actions here

import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_PRODUCTS = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  // console.log("data")
  try {
    let res = await axios.get("http://localhost:8080/prducts");

    //console.log(data)

    return dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: err.message });
  }
};
