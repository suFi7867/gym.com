import { useDispatch } from "react-redux";
import { ACTION_GET_PRODUCTS } from "../products/product.actions";
import {
  GET_ADMIN_ERROR,
  GET_ADMIN_LOADING,
  GET_ADMIN_SUCCESS,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
} from "./admin.types";

// Note: Do not update/change the initial state
const adminInitalState = {
  loading: false,
  error: false,
  data: { carts: [], users: [] },
};

export const adminReducer = (state = adminInitalState, { type, payload }) => {
  switch (type) {
    case GET_ADMIN_LOADING || DELETE_PRODUCT_LOADING || ADD_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_ADMIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case DELETE_PRODUCT_SUCCESS || ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case GET_ADMIN_ERROR || DELETE_PRODUCT_ERROR || ADD_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
