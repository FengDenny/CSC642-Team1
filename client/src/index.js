import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./mediaQueries.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./redux/reducers/authReducer";
import trailSubmitReducer from "./redux/reducers/trialSubmitReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  submit: trailSubmitReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
