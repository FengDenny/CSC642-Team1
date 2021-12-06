import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setClinicalLoggedIn,
  setUserID,
  setIsLoggedIn,
} from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
export const AuthNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {auth.clinicalLoggedIn ? (
        <>
          <div>Hello {auth.clinicalEmail}</div>

          <button
            onClick={() => {
              dispatch(setClinicalLoggedIn(false));
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      ) : null}
    </>
  );
};
export const AuthParticipant = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {auth.isLoggedIn ? (
        <>
          <div>Hello {auth.email}</div>

          <button
            onClick={() => {
              dispatch(setIsLoggedIn(false));
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      ) : null}
    </>
  );
};
