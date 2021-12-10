import React, { useState, useEffect } from "react";
import SubmitTrial from "./SubmitTrial";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  setTrialPoster,
} from "../../redux/actions/trailSubmitAction";

// import { addCheck } from "./getArray";

export default function SubmitTrialData() {
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [qualified, setQualified] = useState("");
  const [notQualified, setNotQualified] = useState("");
  const [payout, setPayout] = useState("");
  const [prerequisite, setPrerequisite] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  // date
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // check is id is the same as poster id
  const { auth } = useSelector((state) => ({ ...state }));
  const { clinicalID } = auth;

  const handleFormSubmit = async (e) => {
    const splitReqirements = qualified.split(",");
    const splitNonReqirements = notQualified.split(",");
    const splitPrerequisite = prerequisite.split(",");
    const Id = await nanoid(5);

    e.preventDefault();
    dispatch(setTrialID(Id));
    dispatch(setTrialTitle(title));
    dispatch(setTrialParticipants(participants));
    dispatch(setTrialPayout(payout));
    dispatch(setTrialDescription(description));
    dispatch(setTrialQualified(splitReqirements));
    dispatch(setTrialNotQualified(splitNonReqirements));
    dispatch(setTrialPrerequisite(splitPrerequisite));
    dispatch(setTrialLocation(location));
    dispatch(setTrialStatus(status));
    dispatch(setTrialDate(start, end));
    dispatch(setTrialPoster(clinicalID));
    navigate("/");
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
      setQualified={setQualified}
      qualified={qualified}
      notQualified={notQualified}
      setNotQualified={setNotQualified}
      prerequisite={prerequisite}
      setPrerequisite={setPrerequisite}
      location={location}
      setLocation={setLocation}
      status={status}
      setStatus={setStatus}
      start={start}
      setStart={setStart}
      end={end}
      setEnd={setEnd}
    />
  );
}
