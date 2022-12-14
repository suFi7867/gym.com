import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let res = await axios.post("http://localhost:8080/user/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    
    return res.data;
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
};

export const ActionLogout = () => ({ type: LOGOUT });
