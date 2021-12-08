import React from "react";
import CardSubmit from "../../components/card/CardSubmit";
import { useSelector } from "react-redux";

export default function SubmitCard() {
  const { submit } = useSelector((state) => ({ ...state }));
  const { title, trialID, participants, payout, qualified } = submit;
  return (
    <>
      {!title || !participants || !payout || !qualified ? null : (
        <CardSubmit
          key={trialID}
          id={trialID}
          submitPrice={payout}
          title={title}
          eligibility={participants}
          btnName={"Learn More"}
        ></CardSubmit>
      )}
    </>
  );
}
