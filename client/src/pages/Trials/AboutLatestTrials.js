import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../stimulate-backend/data/latest-trials.json";
import { useSelector } from "react-redux";

export default function AboutLatestTrials() {
  const { id } = useParams();
  const latest = trials["Latest Trials"].find(
    (trials) => trials.id === Number(id)
  );

  const { submit } = useSelector((state) => ({ ...state }));
  const { title, participants, payout, description, qualified } = submit;
  return (
    <div>
      {latest ? (
        <div>
          <h1>{latest.title}</h1>
          <p>{latest.description}</p>
        </div>
      ) : submit ? (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{participants}</p>
          {qualified[0].map((m) => (
            <p>
              <span className='green-color'>✓ </span>
              {m}
            </p>
          ))}
        </div>
      ) : (
        <h1> Sorry, but this trials doesn't exist yet!</h1>
      )}
    </div>
  );
}
