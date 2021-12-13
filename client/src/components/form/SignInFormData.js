import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsLoggedIn,
  setClinicalLoggedIn,
} from "../../redux/actions/authAction";
import { toast } from "react-toastify";

export default function SignInFormData({
  setActive,
  setShowModal,
  setShowSignInModal,
}) {
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
      dispatch(setIsLoggedIn(true));
      toast.success(`Welcome back, ${email}`);
    } else {
      dispatch(setIsLoggedIn(false));
      toast.success(`Email or Password is incorrect`);
    }

    if (ReduxClinicalEmail === email && ReduxClinicalPass === password) {
      console.log(ReduxClinicalEmail === email);
      dispatch(setClinicalLoggedIn(true));

      setTimeout(() => {
        window.location.replace("/submit-trials");
      }, 500);
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
      setShowSignInModal={setShowSignInModal}
    />
  );
}
