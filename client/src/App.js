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
import AccountSettingsData from "./pages/Protected/AccountSettingsData";
import ClinicalAccountSettingsData from "./pages/Protected/ClinicalAccountSettingsData";
import Participate from "./pages/Protected/Participate/Participate";
import TrialSubmitted from "./pages/Protected/clinical/TrialSubmitted";
import AboutLatestTrials from "./pages/Trials/AboutLatestTrials";
import AboutLatestSubmitTrials from "./pages/Trials/AboutLatestSubmit";
import AboutConflictTrials from "./pages/Trials/AboutConflictTrials";
import AboutDiscoverTrials from "./pages/Trials/AboutDiscoverTrials";
import TrialApplied from "./pages/Protected/applied/TrialApplied";
import SearchData from "./components/search/SearchData";
import Navbar from "./utility/navbar/Navbar";
import Footer from "./utility/footer/Footer";
import Banner from "./utility/banner/Banner";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { auth, submit } = useSelector((state) => ({ ...state }));
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
      path: "/account/:id",
      element: auth.isLoggedIn ? (
        <AccountSettingsData />
      ) : auth.clinicalLoggedIn ? (
        <ClinicalAccountSettingsData />
      ) : (
        <Navigate to='/' />
      ),
    },
    {
      path: "participate",
      element: <Participate />,
    },

    {
      path: "participate/latest/:id",
      element: <AboutLatestTrials />,
    },
    {
      path: "approved-trials/:userID/",
      element: auth.clinicalLoggedIn ? <TrialSubmitted /> : <Navigate to='/' />,
    },
    {
      path: "approved-trials/:userID/latest/:id",
      element:
        submit.poster === auth.clinicalID ? (
          <AboutLatestTrials />
        ) : (
          <Navigate to='/' />
        ),
    },
    {
      path: "trials/:id",
      element: auth.isLoggedIn ? <TrialApplied /> : <Navigate to='/' />,
    },

    {
      path: "latest/:id",
      element: <AboutLatestTrials />,
    },
    {
      path: "latest/submit/:id",
      element: <AboutLatestSubmitTrials />,
    },
    {
      path: "conflict-free/:id",
      element: <AboutConflictTrials />,
    },
    {
      path: "discover/:id",
      element: <AboutDiscoverTrials />,
    },
    {
      path: "search",
      element: <SearchData />,
    },
    {
      path: "search/latest/:id",
      element: <AboutLatestTrials />,
    },
    {
      path: "search/conflict-free/:id",
      element: <AboutConflictTrials />,
    },
    {
      path: "search/discover/:id",
      element: <AboutDiscoverTrials />,
    },
  ]);
  return (
    <div className='App'>
      <Banner />
      <Navbar />
      {element}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
