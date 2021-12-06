import "./App.css";
import { Fragment } from "react";
// need to use hashrouter for ghpages deployment
import {
  HashRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import SubmitTrials from "./pages/Submit/SubmitTrial";
import AccountSettings from "./pages/Protected/AccountSettings";
import Navbar from "./utility/navbar/Navbar";
import Footer from "./utility/footer/Footer";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => ({ ...state }));
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
    {
      path: "account/:id",
      element: auth.isLoggedIn ? <AccountSettings /> : <Navigate to='/' />,
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
