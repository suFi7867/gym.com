import axios from "axios";
import {
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./register.types";

export const registerUser = (creds) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    let res = await axios.post(
      "http://localhost:8080/user/signup",
      creds
    );
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.message });
  }
};
