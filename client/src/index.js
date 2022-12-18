import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npm i @chakra-ui/icons

// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

// npm i react-icons
//npm i @chakra-ui/icons

// npm i react-search-autocomplete

// npm i react-custom-scrollbars-2

// npm i redux react-redux redux-thunk
// npm i axios
//npm i react-multi-carousel

// npm i react-vis

// npm i sass
// npm i node-sass
// npm i react-transition-group
// npm install --save-dev sass-loader sass webpack

//react-search-autocomplete

// npm i framer-motion

// npm i react-slick
//  npm install slick-carousel --save

// npm razorpay 
// in backend 
