import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import logger from "redux-logger";
import { reducer } from "./reducers/roster"

import App from "./App";

// this combines everything into one giant main reducer,
// so our action types still need to be unique

// create our store or "global state object"
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  // gives all children components access to the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
