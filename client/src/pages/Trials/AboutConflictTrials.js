import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../data/conflict-free.json";

export default function AboutConflictTrials() {
  const { id } = useParams();
  const conflict = trials["Conflict-Free"].find(
    (trials) => trials.id === Number(id)
  );
  return (
    <div>
      {conflict ? (
        <div>
          <h1>{conflict.title}</h1>
          <p>{conflict.description}</p>
        </div>
      ) : (
        <h1> Sorry, but this trials doesn't exist yet!</h1>
      )}
    </div>
  );
}
