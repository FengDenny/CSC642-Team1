import React, { useState, useEffect, useRef } from "react";
import ClinicalAuthForm from "./ClinicalAuthForm";
import { useDispatch, useSelector } from "react-redux";
import {
  setCompanyName,
  setClinicalEmail,
  setClinicalPassword,
  setClinicalID,
  setClinicalLoggedIn,
} from "../../redux/actions/authAction";
import { nanoid } from "nanoid/async";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { passwordReveal } from "../passwordToggle/PasswordReveal";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../formValidation/FormValidation";

export default function ClinicalFormData({
  setActive,
  setShowSignInModal,
  setShowModal,
  setShowClincicalModal,
}) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  //Company name state
  const [name, setName] = useState("health");
  const [email, setEmail] = useState("H@yahoo.org");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    name && nameValidation(name, "Company's Name", setNameError);
    email && emailValidation(email, setEmailError);
    password && passwordValidation(password, setPasswordError);
  }, [name, email, password]);

  const handleFormSubmit = async (e) => {
    const Id = await nanoid(4);
    e.preventDefault();
    dispatch(setCompanyName(name));
    dispatch(setClinicalEmail(email));
    dispatch(setClinicalPassword(password));
    dispatch(setClinicalID(Id));
    dispatch(setClinicalLoggedIn(true));
    // window.location.reload();
  };

  return (
    <ClinicalAuthForm
      setActive={setActive}
      setShowSignInModal={setShowSignInModal}
      setShowModal={setShowModal}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleFormSubmit={handleFormSubmit}
      passwordReveal={passwordReveal}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      FaEye={FaEye}
      FaEyeSlash={FaEyeSlash}
      setShowClincicalModal={setShowClincicalModal}
      nameError={nameError}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
}
