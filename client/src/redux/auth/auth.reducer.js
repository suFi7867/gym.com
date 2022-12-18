import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,  FORGET_REQUEST_,FORGET_SUCCESS_, FORGET_ERROR_,
  GET_USER_REQUEST_,
  GET_USER_SUCCESS_,
  GET_USER_ERROR_
} from "./auth.types";

let LocalToken = JSON.parse(localStorage.getItem("token"));
const check = (LocalToken!=undefined)


  let checkAdminAuth = LocalToken?.email ==="admin@gmail.com"

 

console.log(LocalToken?.email == "admin@gmail.com" , check)
// const AdminToken = "admin@gmail.com#admin";
const initialState = {
  token:  LocalToken,
  isAuth: check ,
  loading: false,
  error: false,
  AdminIsAuth: checkAdminAuth,
  userData : {  details : {} , cart: [], purchase: [], wishlist: [] }
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST || FORGET_REQUEST_ || GET_USER_REQUEST_: {
      //localStorage.setItem("token", payload);
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
        error: false,
        AdminIsAuth: payload?.email ==="admin@gmail.com"
      };
    }


    case GET_USER_SUCCESS_: {
     
      return {
        ...state,
        loading: false,
        error: false,
        userData : payload
        
      };
    }
    case LOGIN_ERROR || FORGET_ERROR_ || GET_USER_ERROR_: {
     // localStorage.setItem("token", payload);
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };
    }
    case FORGET_SUCCESS_: {
      return {
        ...state,
        loading: false,
        error: false
      };
    }

    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
        AdminIsAuth: false,
        userData : {  details : {} , cart: [], purchase: [], wishlist:[] }
      };
    }
    default: {
      return state;
    }
  }
};
