import React, { useState, useEffect } from "react";
import AccountSettings from "./AccountSettings";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setUserAddress,
  setUserAptNo,
  setUserCityState,
  setUserZipcode,
  setUserPassword,
  deleteUserInfo,
} from "../../redux/actions/authAction";

export default function AccountSettingsData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
    dispatch(setUserFirstName(firstName));
    dispatch(setUserLastName(lastName));
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
    <AccountSettings
      handleSettingsSubmit={handleSettingsSubmit}
      handleEmailSubmit={handleEmailSubmit}
      deleteUserInfo={deleteUserInfo}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
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
