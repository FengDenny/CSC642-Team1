import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setClinicalLoggedIn,
  setUserID,
  setIsLoggedIn,
} from "../../redux/actions/authAction";
import { useNavigate, useParams } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
export const AuthClinicalNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title = auth.clinicalEmail;
  return (
    <>
      {auth.clinicalLoggedIn ? (
        <>
          <NavDropdown
            title={title}
            menuVariant='dark'
            className='margin-left-149'
          >
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              as='button'
              onClick={() => {
                dispatch(setClinicalLoggedIn(false));
                navigate("/");
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ) : null}
    </>
  );
};
export const AuthParticipant = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title = auth.email;
  return (
    <>
      {auth.isLoggedIn ? (
        <>
          <NavDropdown
            title={title}
            menuVariant='dark'
            className='margin-left-149'
          >
            <NavDropdown.Item href={`/account/${auth.userId}`}>
              Account Settings
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              as='button'
              onClick={() => {
                dispatch(setIsLoggedIn(false));
                navigate("/");
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ) : null}
    </>
  );
};
