import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

let LocalToken = localStorage.getItem("token");
const check = (LocalToken!=undefined)
const checkAdminAuth = LocalToken ==="admin@gmail.com#admin"

console.log(typeof LocalToken)
// const AdminToken = "admin@gmail.com#admin";
const initialState = {
  token: {token: LocalToken},
  isAuth: check ,
  loading: false,
  error: false,
  AdminIsAuth: checkAdminAuth,
};
// console.log(token);
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      //localStorage.setItem("token", payload);
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
        error: false,
        AdminIsAuth: payload.token == "admin@gmail.com#admin",
      };
    }
    case LOGIN_ERROR: {
     // localStorage.setItem("token", payload);
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
        AdminIsAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
