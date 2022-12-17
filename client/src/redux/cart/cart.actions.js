// Cart Actions here

import axios from "axios";
import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  PURCHASE_LOADING,
  PURCHASE_SUCCESS,
PURCHASE_ERROR
} from "./cart.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_CART = (token) => async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = await axios.get("http://localhost:8080/cart");
    //   console.log(res.data)
    const unique = res.data.find((el) => el.token == token);
    // console.log(unique)
    return dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: unique.cartData });
  } catch (err) {
    dispatch({ type: GET_CART_ITEMS_ERROR, payload: err.message });
  }
};

export const ACTION_ADD_ITEM_TO_CART =
  (payload = {}) =>
  async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });

    try {
      await axios.post("http://localhost:8080/cart", payload)
     .then((res)=> console.log(res.message))
     .catch((err)=> console.log(err.message))
     
    

      return dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: payload.data,
      });

    } catch (err) {
      console.log(err)
      dispatch({ type: ADD_ITEM_TO_CART_ERROR, payload: err.message });
    }
  };

// REMOVE_CART_ITEMS_LOADING   // REMOVE_CART_ITEMS_SUCCESS    // REMOVE_CART_ITEMS_ERROR

// export const ACTION_REMOVE_ITEM_CART =
//   (payload = {}) =>
//   async (dispatch) => {
//     dispatch({ type: REMOVE_CART_ITEMS_LOADING });

//     try {
//       await axios.post(`http://localhost:8080/cart/${payload.id}`, payload);
//       //console.log(payload);
//       return dispatch({ type: REMOVE_CART_ITEMS_SUCCESS });
//     } catch (err) {
//       dispatch({ type: REMOVE_CART_ITEMS_ERROR, payload: err.message });
//     }
//   };
export const ACTION_REMOVE_ITEM_CART = (payload=1)=> async (dispatch)=>{
    dispatch({ type: REMOVE_CART_ITEMS_LOADING})
   
  //  console.log(payload)
    try{
      await axios.patch(`http://localhost:8080/cart`, payload)

      return dispatch({ type : REMOVE_CART_ITEMS_SUCCESS })
         
    }catch(err){
        dispatch({ type : REMOVE_CART_ITEMS_ERROR , payload : err.message })
    }

}

export const ACTION_PURCHASE = ()=> async (dispatch)=>{
dispatch({type: PURCHASE_LOADING})

  dispatch({type: PURCHASE_ERROR})
  return dispatch({type: PURCHASE_SUCCESS})
}



//const deleteMethod = {
//  method: 'DELETE', // Method itself
//  headers: {
//   'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
//  },
//  body: JSON.stringify(payload)
//  // No need to have body, because we don't send nothing to the server.
// }
// // Make the HTTP Delete call using fetch api
// fetch(`http://localhost:8080/cart`, deleteMethod) 
// .then(response => response.json())
// .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
// .catch(err