import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT, 
FORGET_REQUEST_,
FORGET_SUCCESS_,
  FORGET_ERROR_,
 GET_USER_REQUEST_,
 GET_USER_SUCCESS_,
 GET_USER_ERROR_
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let res = await axios.post("http://localhost:8080/user/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    //console.log(res.data)
    return res.data;
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
};

export const ForegetPassword = (email) => async (dispatch) => {
  //console.log(email)
  dispatch({ type: FORGET_REQUEST_ });
  
  try {
    let res = await axios.post("http://localhost:8080/user/reset-password/getOtp", {email: email});
    dispatch({ type: FORGET_SUCCESS_, payload: res.data });
    
    return res.data;
  } catch (error) {
    dispatch({ type: FORGET_ERROR_, payload: error.message });
  }
};

export const getUserData = (email) => async (dispatch) => {
 // console.log(email)
  dispatch({ type: GET_USER_REQUEST_, });
  
  try {
    let res1 = await axios.get("http://localhost:8080/cart/" + email );
    let res2 = await axios.get("http://localhost:8080/user/" + email);

    
    let data = { details: res2.data ,cart: res1.data.cart , purchase:  res1.data.purchase, wishlist: res1.data.wishlist   };

  // return console.log( data);

    return dispatch({ type:  GET_USER_SUCCESS_, payload: data });
  } catch (err) {
    dispatch({ type: GET_USER_ERROR_, payload: err.message });
  }
};


export const ActionLogout = () => ({ type: LOGOUT });
