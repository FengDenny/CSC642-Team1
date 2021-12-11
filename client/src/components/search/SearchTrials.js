import React from "react";

export default function SearchTrials({ latest, conflict }) {
  return (
    <>
      {latest || conflict ? (
        <>
          {latest} {conflict}
        </>
      ) : null}
    </>
  );
}
