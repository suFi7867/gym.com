import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  PURCHASE_ERROR,
  PURCHASE_LOADING,
  PURCHASE_SUCCESS,
} from "./cart.types";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};

// GET_CART_ITEMS_LOADING
// GET_CART_ITEMS_SUCCESS
// GET_CART_ITEMS_ERROR

export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    /////////////////GET//////////////////

    case GET_CART_ITEMS_LOADING: {
      return {
        ...state,
        getCartItems: { loading: true, error: false },
      };
    }

    case GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        getCartItems: { loading: false, error: false },
        data: payload,
      };
    }

    case GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        getCartItems: { loading: false, error: true },
      };
    }

    /////////////////ADD//////////////////

    case ADD_ITEM_TO_CART_LOADING: {
      return {
        ...state,
        addCartItem: { loading: true, error: false },
      };
    }

    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        addCartItem: { loading: false, error: false },
        data: [...state.data, payload],
      };
    }

    case ADD_ITEM_TO_CART_ERROR: {
      return {
        ...state,
        addCartItem: { loading: false, error: true },
      };
    }


    case PURCHASE_LOADING : {
      return {
        ...state,
        updateCartItem: { loading: true, error: false },
      };
    }

    case PURCHASE_ERROR : {
      return {
        ...state,
        updateCartItem: { loading: false, error: true },
      };
    }

    case PURCHASE_SUCCESS : {
      return {
        ...state,
        updateCartItem: { loading: false, error: false },
        data: [],
      };
    }
    /////////////////REMOVE//////////////////

    default: {
      return state;
    }
  }
};
