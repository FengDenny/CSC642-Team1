import React, { useState, useEffect } from "react";
import SubmitTrial from "./SubmitTrial";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid/async";
import {
  setTrialTitle,
  setTrialParticipants,
  setTrialDescription,
  setTrialQualified,
  setTrialNotQualified,
  setTrialPrerequisite,
  setTrialLocation,
  setTrialPayout,
  setTrialStatus,
  setTrialID,
  setTrialDate,
} from "../../redux/actions/trailSubmitAction";

// import { addCheck } from "./getArray";

export default function SubmitTrialData() {
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [notQualified, setNotQualified] = useState([]);
  const [payout, setPayout] = useState("");
  const dispatch = useDispatch();
  const handleFormSubmit = async (e) => {
    const splitReqirements = requirement.split(",");
    const Id = await nanoid(5);
    e.preventDefault();
    dispatch(setTrialID(Id));
    dispatch(setTrialTitle(title));
    dispatch(setTrialParticipants(participants));
    dispatch(setTrialPayout(payout));
    dispatch(setTrialDescription(description));
    dispatch(setTrialQualified(splitReqirements));
    dispatch(setTrialNotQualified(notQualified));
  };

  return (
    <SubmitTrial
      handleFormSubmit={handleFormSubmit}
      title={title}
      setTitle={setTitle}
      participants={participants}
      setParticipants={setParticipants}
      payout={payout}
      setPayout={setPayout}
      description={description}
      setDescription={setDescription}
      setRequirement={setRequirement}
      requirement={requirement}
      notQualified={notQualified}
      setNotQualified={setNotQualified}
    />
  );
}
