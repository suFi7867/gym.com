// Product actions here

import axios from "axios";
import { ACTION_GET_PRODUCTS } from "../products/product.actions";
import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  GET_ADMIN_ERROR,
  GET_ADMIN_LOADING,
  GET_ADMIN_SUCCESS,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "./admin.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_ADMIN = () => async (dispatch) => {
  dispatch({ type: GET_ADMIN_LOADING });
  // console.log("data")
  try {
    let res1 = await axios.get("http://localhost:8080/cart");
    let res2 = await axios.get("http://localhost:8080/user");

    let data = { carts: res1.data, users: res2.data };

   // console.log(data);
  
    

    return dispatch({ type: GET_ADMIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ADMIN_ERROR, payload: err.message });
  }
};

export const ACTION_DELETE_PRODUCT =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_LOADING });
console.log(payload)
    try {
      await axios.delete(`http://localhost:8080/products/${payload}`, {
        headers: {
          "Content-Type": "application/json",
        }
       
      });
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
      console.log("i am here");
      return dispatch(ACTION_GET_PRODUCTS());
    } catch (err) {
      dispatch({ type: DELETE_PRODUCT_ERROR, payload: err.message });
    }
  };

export const ACTION_ADD_PRODUCT =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_LOADING });
    console.log(payload.area);
    try {
      await axios.post(`http://localhost:8080/products`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          data: payload,
        },
      });

      //  await axios.post(`http://localhost:8080/${payload.value}`, payload.area);

      return dispatch({ type: ADD_PRODUCT_SUCCESS });
    } catch (err) {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: err.message });
    }
  };

  //https://sample-backend-cvar.onrender.com/

//   {id: 20,name:'Sparx Womens Walking Shoes',quantity: 1,defaultImage: 'https://i.ibb.co/Qrrkx8m/81-Og-N4zwd-L-UX695.jpg',hoverImage: 'https://i.ibb.co/rG6F4S4/71s-Hcj-OLbu-L-SX695-SX-UX-SY-UY.jpg',price: 799,strikePrice: 1090,rating: 4,firstImages: [],secondImages: [],thirdImages: []}
