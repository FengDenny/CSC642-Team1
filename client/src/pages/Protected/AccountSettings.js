import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export default function AccountSettings(props) {
  const { auth } = useSelector((state) => ({ ...state }));
  const { id } = useParams();
  // const ID = auth.userId === id;
  // console.log(ID);
  return (
    <div>
      {auth.isLoggedIn ? (
        <>
          {" "}
          <h1 className='text-center'>Participant Account</h1>
          <h1>Hello, {auth.email}</h1>
          <h2>ID: {id}</h2>
        </>
      ) : (
        <>
          <h1 className='text-center'>Clinical Account</h1>
          <h1>Hello, {auth.clinicalEmail}</h1>
          <h2>ID: {id}</h2>
        </>
      )}
    </div>
  );
}
