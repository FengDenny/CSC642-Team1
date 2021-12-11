import React, { useState, useEffect } from "react";
import SubmitTrial from "./SubmitTrial";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import{
    setUserFirstName,
    setUserLastName,
    setUserEmail,
    setUserAddress,
    setUserAptNo,
    setUserCityState,
    setUserZipcode,
    setUserPassword,
    deleteUserInfo
  } from "../../redux/actions/authAction"
import AccountSettings from "./AccountSettings";

  export default function submitAccountData(){
      const[firstName, setFirstName]= useState("");
      const[lastName, setLastName]= useState("");
      const[email, setEmail]= useState("");
      const[address, setAddress]= useState("");
      const[citystate, setCityState]= useState("");
      const[aptno, setAptno]= useState("");
      const[zipcode, setZipcode]= useState("");
      const[password, setPassword]= useState("");
  
      const handlePersonalDataSubmit = async (e) =>{
          e.preventDefault();
          dispatch(setUserFirstName(firstName));
          dispatch(setUserLastName(lastName));
          dispatch(setUserEmail(email));
          dispatch(setUserAddress(address));
          dispatch(setUserAptNo(aptno));
          dispatch(setUserCityState(citystate));
          dispatch(setUserZipcode(zipcode));
          dispatch(setUserPassword(password));
          Navigate("/");
      };

      const handleUpdateAccountSubmit = async (e) =>{
          e.preventDefault();
          dispatch(setUserEmail(email));
          dispatch(setUserPassword(password));
          Navigate("/");
      }

      return(
          <AccountSettings
            handlePersonalDataSubmit={handlePersonalDataSubmit}
            handleUpdateAccountSubmit={handleUpdateAccountSubmit}
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