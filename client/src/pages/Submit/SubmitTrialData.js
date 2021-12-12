import React, { useState, useEffect } from "react";
import SubmitTrial from "./SubmitTrial";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInModal from "../../components/modals/SignInModal";
import ParticipantAuthModal from "../../components/modals/ParticipantAuthModal";
import ClinicalAuthModal from "../../components/modals/ClinicalAuthModal";
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
import {
  setUserAptNo,
  setUserCityState,
  setUserZipcode,
} from "../../redux/actions/authAction";
import {
  priceValidation,
  dateValidation,
  addressValidations,
  containCommasValidations,
} from "../../components/formValidation/FormValidation";

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
  const [citystate, setCityState] = useState("");
  const [aptno, setAptno] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");

  // Error
  const [priceError, setPriceError] = useState("");
  const [startError, setStartError] = useState("");
  const [endError, setEndError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [commaError, setCommaError] = useState("");
  const [commaTwoError, setCommaTwoError] = useState("");

  // date
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const dispatch = useDispatch();

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [showClincicalModal, setShowClincicalModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [active, setActive] = useState("participate");

  // check is id is the same as poster id
  const { auth } = useSelector((state) => ({ ...state }));
  const { clinicalID, clinicalLoggedIn } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    payout && priceValidation(payout, "Price", setPriceError);
    start && dateValidation(start, "Start date", setStartError);
    end && dateValidation(end, "End date", setEndError);
    location && addressValidations(location, "Address", setLocationError);
    qualified && containCommasValidations(qualified, setCommaError);
    notQualified && containCommasValidations(notQualified, setCommaTwoError);
  }, [payout, start, end, location, qualified, notQualified]);

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
    dispatch(setUserAptNo(aptno));
    dispatch(setUserCityState(citystate));
    dispatch(setUserZipcode(zipcode));
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
      SignInModal={SignInModal}
      ParticipantAuthModal={ParticipantAuthModal}
      ClinicalAuthModal={ClinicalAuthModal}
      showModal={showModal}
      setShowModal={setShowModal}
      showClincicalModal={showClincicalModal}
      setShowClincicalModal={setShowClincicalModal}
      showSignInModal={showSignInModal}
      setShowSignInModal={setShowSignInModal}
      active={active}
      setActive={setActive}
      clinicalLoggedIn={clinicalLoggedIn}
      priceError={priceError}
      startError={startError}
      endError={endError}
      locationError={locationError}
      commaError={commaError}
      commaTwoError={commaTwoError}
      aptno={aptno}
      setAptno={setAptno}
      citystate={citystate}
      setCityState={setCityState}
      zipcode={zipcode}
      setZipcode={setZipcode}
    />
  );
}
