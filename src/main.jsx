import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./store/reducers/users-reducer";
import "./index.css";
const usersStore = createStore(usersReducer, { users: [] });
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={usersStore}>
    <App />
  </Provider>
);
