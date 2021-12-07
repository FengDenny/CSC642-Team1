import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsLoggedIn,
  setClinicalLoggedIn,
} from "../../redux/actions/authAction";
// import { useNavigate, useParams } from "react-router-dom";

export default function SignInFormData({ setActive, setShowModal }) {
  const { auth } = useSelector((state) => ({ ...state }));
  const [email, setEmail] = useState("DFENG415@YAHOO.COM");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    isSignedIn(email, password);
  };

  const isSignedIn = (email, password) => {
    const reduxPass = auth.password;
    const reduxEmail = auth.email;
    const ReduxClinicalPass = auth.clinicalPassword;
    const ReduxClinicalEmail = auth.clinicalEmail;
    // console.log(reduxPass === password, reduxEmail === email);

    if (reduxEmail === email && reduxPass === password) {
      window.location.replace(`account/${auth.userId}`);
      dispatch(setIsLoggedIn(true));
    } else {
      dispatch(setIsLoggedIn(false));
    }

    if (ReduxClinicalEmail === email && ReduxClinicalPass === password) {
      console.log(ReduxClinicalEmail === email);
      window.location.replace("/submit-trials");
      dispatch(setClinicalLoggedIn(true));
    } else {
      dispatch(setClinicalLoggedIn(false));
    }
  };

  return (
    <SignInForm
      setActive={setActive}
      setShowModal={setShowModal}
      email={email}
      password={password}
      setPassword={setPassword}
      setEmail={setEmail}
      handleFormSubmit={handleFormSubmit}
      isSignedIn={isSignedIn}
    />
  );
}
