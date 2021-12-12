import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CreateAccountModal from "../../components/modals/CreateAccountModal";
import SignInModal from "../../components/modals/SignInModal";
import ParticipantAuthModal from "../../components/modals/ParticipantAuthModal";
import ClinicalAuthModal from "../../components/modals/ClinicalAuthModal";
import AppliedTrialModal from "../../components/modals/ApplyTrialModal";
import trials from "../../stimulate-backend/data/conflict-free.json";
import { useSelector } from "react-redux";

export default function AboutConflictTrials() {
  const { id } = useParams();
  const conflict = trials["Conflict-Free"].find(
    (trials) => trials.id === Number(id)
  );
  const [showModal, setShowModal] = useState(false);
  const [showClincicalModal, setShowClincicalModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [alertApplyModal, setAlertApplyModal] = useState(false);
  const [appliedModal, setAppliedModal] = useState(false);
  const [active, setActive] = useState("apply");
  const { _id, payout, status } = conflict.detail[0];
  const { auth, submit } = useSelector((state) => ({ ...state }));
  const { isLoggedIn } = auth;
  return (
    <>
      <div>
        {conflict ? (
          <div>
            <h1>{conflict.title}</h1>
            <p>{conflict.description}</p>

            <h1>Legals</h1>
            <div>
              <a href=' # '> Legals Information</a>
              <p></p>
              <a href=' # '> Legals Disclosures</a>{" "}
            </div>
            <p></p>
            <h1>Eligibility</h1>
            {conflict.eligibility.map(
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
            {conflict.eligibility.map(
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
            <p>Participant : {conflict.participants}</p>
            <p>ID: {_id}</p>
            <p>Payout: {conflict.price}</p>
            <p>Study Type: {conflict.detail[0]["study-type"]} </p>
            <p>Status: {status}</p>
            <p>Start Date: {conflict.detail[0]["start-date"]} </p>
            <p>End Date: {conflict.detail[0]["end-date"]} </p>
            <p>Last Update: {conflict.detail[0]["last-updated"]}</p>

            {!isLoggedIn ? (
              <button
                onClick={() => {
                  setActive("participant");
                  setShowModal(true);
                }}
              >
                Apply Now!
              </button>
            ) : conflict.detail[0].status !== "Not Recruiting" ||
              submit.status !== "Not Recruiting" ? (
              <button
                onClick={() => {
                  setActive("applied");
                  setAppliedModal(true);
                }}
              >
                Apply Now!
              </button>
            ) : null}
          </div>
        ) : (
          <h1> Sorry, but this trials doesn't exist yet!</h1>
        )}
      </div>
      {active === "applied" && (
        <AppliedTrialModal
          show={appliedModal}
          onHide={() => {
            setAppliedModal(false);
          }}
          setActive={setActive}
        />
      )}{" "}
      {active === "apply" && (
        <CreateAccountModal
          cname={auth.companyName}
          show={alertApplyModal}
          onHide={() => {
            setAlertApplyModal(false);
          }}
          setActive={setActive}
        />
      )}
      {active === "signin" && (
        <SignInModal
          show={showSignInModal}
          onHide={() => setShowSignInModal(false)}
          setShowModal={setShowModal}
          setActive={setActive}
        />
      )}
      {active === "clinical" && (
        <ClinicalAuthModal
          show={showClincicalModal}
          onHide={() => setShowClincicalModal(false)}
          setShowModal={setShowModal}
          setShowSignInModal={setShowSignInModal}
          setActive={setActive}
        />
      )}
      {active === "participant" && (
        <ParticipantAuthModal
          show={showModal}
          onHide={() => setShowModal(false)}
          setActive={setActive}
          setShowClincicalModal={setShowClincicalModal}
          setShowSignInModal={setShowSignInModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
