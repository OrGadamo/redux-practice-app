import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
const usersStore = createStore(userReducer, { users: [] });
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={usersStore}>
    <App />
  </Provider>
);
