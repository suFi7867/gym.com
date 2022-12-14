import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
  } from "./register.types";
  
 const initialState = {
    isRegistered: false,   
    loading: false,
    error: false,
  };
  export const registerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_REQUEST: {       
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case REGISTER_SUCCESS: {     
        return {
          ...state,
          isRegistered: true,
          successMessage: payload,
          loading: false,
          error: false,
        };
      }
      case REGISTER_ERROR: {      
        return {
          ...state,
          loading: false,
          error: true,
          errorMessage:payload
        };
      }     
      default: {
        return state;
      }
    }
  };
  