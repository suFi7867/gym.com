import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";


  import thunk from "redux-thunk";
  import { adminReducer } from "./admin/admin.reducer";
  import { authReducer } from "./auth/auth.reducer";
  import { cartReducer } from "./cart/cart.reducer";
  import { productReducer } from "./products/product.reducer";
  import { registerReducer } from "./register/register.reducer";

  const rootReducer = combineReducers({
    register: registerReducer,
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    admin: adminReducer
  });
  
  const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
  );
  