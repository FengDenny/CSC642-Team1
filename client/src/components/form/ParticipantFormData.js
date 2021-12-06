import React, { useState, useEffect, useRef } from "react";
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
import { useSelector } from "react-redux";

export default function ParticipantFormData({
  setActive,
  setShowSignInModal,
  setShowClincicalModal,
}) {
  const dispatch = useDispatch();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const handleFormSubmit = async (e) => {
    const Id = await nanoid(4);
    e.preventDefault();
    dispatch(setUserFirstName(first));
    dispatch(setUserLastName(last));
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));
    dispatch(setUserID(Id));
    dispatch(setIsLoggedIn(true));
    window.location.replace(`account/${auth.id}`);
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
    />
  );
}
