import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./mediaQueries.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
