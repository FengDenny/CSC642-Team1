import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
export default function AllTrials() {
  const { auth } = useSelector((state) => ({ ...state }));
  const { id } = useParams();
  const ID = auth.userId === id;
  console.log(ID);
  return (
    <div>
      <h1>Hello, {auth.email}</h1>
      <h2>ID: {auth.userId}</h2>
    </div>
  );
}
