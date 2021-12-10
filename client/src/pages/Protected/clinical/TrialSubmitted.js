import React from "react";
import { useSelector } from "react-redux";
import CardSubmit from "../../Card/SubmitCard";

export default function TrialSubmitted() {
  const { auth } = useSelector((state) => ({ ...state }));
  const { submit } = useSelector((state) => ({ ...state }));
  const { clinicalID, companyName } = auth;
  const {
    title,
    trialID,
    participants,
    payout,
    qualified,
    notQualified,
    poster,
  } = submit;
  console.log(poster);
  return (
    <div>
      {poster === clinicalID ? (
        <CardSubmit
          key={trialID}
          id={trialID}
          submitPrice={payout}
          title={title}
          eligibility={participants}
          btnName={"Learn More"}
        ></CardSubmit>
      ) : (
        <p>Please create your first post!</p>
      )}
    </div>
  );
}
