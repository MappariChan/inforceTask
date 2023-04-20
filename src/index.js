import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import productStore from "./store/productStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={productStore}>
    <App />
  </Provider>
);
