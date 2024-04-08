import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App.jsx";
import { Provider } from "react-redux";
// import store from "./reduxStore/index.js";
// import store from "./reduxToolkitStore/index.js";
import store from "./reduxStoreStudy/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Reset />
      <App />
    </React.StrictMode>
  </Provider>
);
