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
import SubmitTrialData from "./pages/Submit/SubmitTrialData";
import AccountSettings from "./pages/Protected/AccountSettings";
import AboutLatestTrials from "./pages/Trials/AboutLatestTrials";
import AboutConflictTrials from "./pages/Trials/AboutConflictTrials";
import AboutDiscoverTrials from "./pages/Trials/AboutDiscoverTrials";
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
          <SubmitTrialData />
        </>
      ),
    },
    {
      path: "account/:id",
      element:
        auth.isLoggedIn || auth.clinicalLoggedIn ? (
          <AccountSettings />
        ) : (
          <Navigate to='/' />
        ),
    },
    {
      path: "latest/:id",
      element: <AboutLatestTrials />,
    },
    {
      path: "conflict-free/:id",
      element: <AboutConflictTrials />,
    },
    {
      path: "discover/:id",
      element: <AboutDiscoverTrials />,
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
