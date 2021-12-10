import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../stimulate-backend/data/future-trials.json";

export default function AboutDiscoverTrials() {
  const { id } = useParams();
  const discover = trials.find((trials) => trials.id === Number(id));
  return (
    <div>
      {discover ? (
        <div>
          <h1>{discover.title}</h1>
          <p>{discover.description}</p>
          <button
                onClick={() => {
                  setActive("participant");
                  setShowModal(true);
                }}
              >
                Apply Now!
              </button>
        </div>
      ) : (
        <h1> This is Phase1, clinical trial for long term smokers that will be performed in San Francisco.
          The study will enroll a sufficient number of parrticipants tosee any side effects related to smoke!</h1>
      )}
    </div>
  );
}
