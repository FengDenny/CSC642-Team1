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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { clinicalLoggedIn, isLoggedIn } = auth;
  const reduxPass = auth.password;
  const reduxEmail = auth.email;
  const reduxClinicalPass = auth.clinicalPassword;
  const reduxClinicalEmail = auth.clinicalEmail;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isSignedIn(email, password);
  };

  const isSignedIn = (email, password) => {
    if (reduxEmail === email && reduxPass === password) {
      dispatch(setIsLoggedIn(true));
      toast.success(`Welcome back, ${email}`);
      setShowSignInModal(false);
    } else if (reduxClinicalEmail === email && reduxClinicalPass === password) {
      console.log(reduxClinicalEmail === email);
      dispatch(setClinicalLoggedIn(true));
      toast.success(`Welcome back, ${email}`);
      setShowSignInModal(false);
    } else if (
      (reduxEmail !== email && reduxPass !== password) ||
      (reduxClinicalEmail !== email && reduxClinicalPass !== password)
    ) {
      dispatch(setIsLoggedIn(false));
      dispatch(setClinicalLoggedIn(false));
      toast.success(`Email or Password is incorrect`);
      setShowSignInModal(true);
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
      clinicalLoggedIn={clinicalLoggedIn}
      isLoggedIn={isLoggedIn}
    />
  );
}
