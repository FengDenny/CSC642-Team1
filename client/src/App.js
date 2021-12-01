import "./App.css";
import { Fragment } from "react";
// need to use hashrouter for ghpages deployment
import {
  HashRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./utility/navbar/Navbar";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
  ]);
  return <div className='App'>{element}</div>;
}

export default App;
