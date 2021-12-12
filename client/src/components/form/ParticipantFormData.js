import React, { useState, useEffect } from "react";
import ParticipantAuthForm from "./ParticipantAuthForm";
import { useDispatch } from "react-redux";
import {
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setUserPassword,
  setUserID,
  setIsLoggedIn,
} from "../../redux/actions/authAction";
import { nanoid } from "nanoid/async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { passwordReveal } from "../passwordToggle/PasswordReveal";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../formValidation/FormValidation";
export default function ParticipantFormData({
  setActive,
  setShowSignInModal,
  setShowClincicalModal,
  setShowModal,
}) {
  const dispatch = useDispatch();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    first && nameValidation(first, "First name", setFirstNameError);
    last && nameValidation(last, "Last name", setLastNameError);
    password && passwordValidation(password, setPasswordError);
    email && emailValidation(email, setEmailError);
  }, [first, last, email, password]);
  const handleFormSubmit = async (e) => {
    const Id = await nanoid(4);
    e.preventDefault();
    dispatch(setUserFirstName(first));
    dispatch(setUserLastName(last));
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));
    dispatch(setUserID(Id));
    dispatch(setIsLoggedIn(true));
  };

  return (
    <ParticipantAuthForm
      setActive={setActive}
      setShowSignInModal={setShowSignInModal}
      setShowClincicalModal={setShowClincicalModal}
      first={first}
      setFirst={setFirst}
      last={last}
      setLast={setLast}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleFormSubmit={handleFormSubmit}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      FaEye={FaEye}
      FaEyeSlash={FaEyeSlash}
      passwordReveal={passwordReveal}
      setShowModal={setShowModal}
      firstNameError={firstNameError}
      lastNameError={lastNameError}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
}
