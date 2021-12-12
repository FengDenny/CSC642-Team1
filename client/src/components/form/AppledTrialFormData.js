import React, { useState, useEffect } from "react";
import AppliedTrialForm from "./AppliedTrialForm";
import { useSelector, useDispatch } from "react-redux";
import {
  setAppliedName,
  setAppliedEmail,
  setAppliedID,
  setAppliedURL,
} from "../../redux/actions/appliedAction";
import { useParams } from "react-router-dom";

export default function AppledTrialFormData() {
  const dispatch = useDispatch();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [emailApply, setEmailApply] = useState("");

  // redux
  const { auth } = useSelector((state) => ({ ...state }));
  const { firstName, lastName, email } = auth;
  const { id } = useParams();

  const handleApply = (e) => {
    e.preventDefault();
    dispatch(setAppliedEmail(emailApply));
    dispatch(setAppliedName(first, last));
    dispatch(setAppliedID(id));
    dispatch(
      setAppliedURL(
        window.location.pathname.slice(
          0,
          window.location.pathname.lastIndexOf("/")
        )
      )
    );
  };

  return (
    <>
      <AppliedTrialForm
        first={first}
        last={last}
        emailApply={emailApply}
        setFirst={setFirst}
        setLast={setLast}
        setEmailApply={setEmailApply}
        handleApply={handleApply}
        firstName={firstName}
        lastName={lastName}
        email={email}
      />
    </>
  );
}
