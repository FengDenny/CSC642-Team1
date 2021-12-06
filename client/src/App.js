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
import SubmitTrials from "./pages/Submit/SubmitTrial";
import Navbar from "./utility/navbar/Navbar";
import Footer from "./utility/footer/Footer";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "submit-trials",
      element: (
        <>
          <SubmitTrials />
        </>
      ),
    },
  ]);
  return (
    <div className='App'>
      <Navbar />
      {element}
      <Footer />
    </div>
  );
}

export default App;
