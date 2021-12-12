import React from "react";
import CardSubmit from "../../components/card/CardSubmit";
import { useSelector } from "react-redux";

export default function SubmitCard() {
  const { submit } = useSelector((state) => ({ ...state }));
  const { title, trialID, participants, payout, status } = submit;
  return (
    <CardSubmit
      key={trialID}
      id={trialID}
      submitPrice={payout}
      title={title}
      eligibility={participants}
      status={status}
      btnName={"Learn More"}
    ></CardSubmit>
  );
}
