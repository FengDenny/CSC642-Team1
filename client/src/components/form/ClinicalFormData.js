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

export default function ClinicalFormData({
  setActive,
  setShowSignInModal,
  setShowModal,
}) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  //Company name state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    const Id = await nanoid(4);
    e.preventDefault();
    dispatch(setCompanyName(name));
    dispatch(setClinicalEmail(email));
    dispatch(setClinicalPassword(password));
    dispatch(setClinicalID(Id));
    dispatch(setClinicalLoggedIn(true));
    window.location.replace("/submit-trials");
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
    />
  );
}
