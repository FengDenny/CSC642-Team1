import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../stimulate-backend/data/latest-trials.json";

export default function AboutLatestTrials() {
  const { id } = useParams();
  const latest = trials["Latest Trials"].find(
    (trials) => trials.id === Number(id)
  );
  return (
    <div>
      {latest ? (
        <div>
          <h1>{latest.title}</h1>
          <p>{latest.description}</p>
        </div>
      ) : (
        <h1> Sorry, but this trials doesn't exist yet!</h1>
      )}
    </div>
  );
}
