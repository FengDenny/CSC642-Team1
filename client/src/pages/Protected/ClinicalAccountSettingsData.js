import React, { useState, useEffect } from "react";
import ClinicalAccountSettings from "./ClinicalAccountSettings";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  setUserEmail,
  setUserAddress,
  setUserAptNo,
  setUserCityState,
  setUserZipcode,
  setUserPassword,
  deleteUserInfo,
} from "../../redux/actions/authAction";

export default function ClinicalAccountSettingsData() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [citystate, setCityState] = useState("");
  const [aptno, setAptno] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserEmail(email));
    dispatch(setUserAddress(address));
    dispatch(setUserAptNo(aptno));
    dispatch(setUserCityState(citystate));
    dispatch(setUserZipcode(zipcode));

    dispatch(setUserPassword(password));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserEmail(email));
  };

  return (
    <ClinicalAccountSettings
      handleSettingsSubmit={handleSettingsSubmit}
      handleEmailSubmit={handleEmailSubmit}
      deleteUserInfo={deleteUserInfo}
      email={email}
      setEmail={setEmail}
      address={address}
      setAddress={setAddress}
      aptno={aptno}
      setAptno={setAptno}
      citystate={citystate}
      setCityState={setCityState}
      zipcode={zipcode}
      setZipcode={setZipcode}
      password={password}
      setPassword={setPassword}
    />
  );
}
