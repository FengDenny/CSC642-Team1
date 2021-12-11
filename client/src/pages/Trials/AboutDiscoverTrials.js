import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../stimulate-backend/data/future-trials.json";

export default function AboutDiscoverTrials() {
  const { id } = useParams();
  const discover = trials.find((trials) => trials.id === Number(id));
  const { _id, payout,status } = discover.detail[0];
  console.log(discover.detail[0]);
  return (
    <div>
      {discover ? (
        <div>
          <h1>{discover.title}</h1>
          <p>{discover.description}</p>

          <h1>Legals</h1>
          <div>
            <a href=' # '> Legals Information</a>
            <p></p>
            <a href=' # '> Legals Disclosures</a>{" "}
          </div>
          <p></p>
          <h1>Eligibility</h1>
          {discover.eligibility.map(
            (el) =>
              el.eligible &&
              el.eligible.map((id) => (
                <div>
                  <p>{id.requirement_one}</p>
                  <p>{id.requirement_two}</p>
                  <p>{id.requirement_three}</p>
                </div>
              ))
          )}
          {discover.eligibility.map(
            (el) =>
              el.ineligible &&
              el.ineligible.map((id) => (
                <div>
                  <p>{id.requirement_one}</p>
                  <p>{id.requirement_two}</p>
                  <p>{id.requirement_three}</p>

                  <h1>Prerequisite</h1>
                  <p> </p>
                  <p></p>
                </div>
              ))
          )}

          <h1>Details</h1>
          <p>Participant : {discover.participants}</p>
          <p>ID: {_id}</p>
          <p>Payout: {payout}</p>
          <p>Study Type: {discover.detail[0]["study-type"]} </p>
          <p>Status: {status}</p> 
          <p>Start Date: {discover.detail[0]["start-date"]} </p>
          <p>End Date: {discover.detail[0]["end-date"]} </p>
          <p>Last Update: {discover.detail[0]["last-updated"]}</p>
        </div>
      ) : (
        <h1> Sorry, but this trials doesn't exist yet!</h1>
      )}
    </div>
  );
}
