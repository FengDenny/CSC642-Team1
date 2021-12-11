import React, { useState } from "react";
import CreateAccountModal from "../../components/modals/CreateAccountModal";
import SignInModal from "../../components/modals/SignInModal";
import ParticipantAuthModal from "../../components/modals/ParticipantAuthModal";
import ClinicalAuthModal from "../../components/modals/ClinicalAuthModal";
import trials from "../../stimulate-backend/data/latest-trials.json";
import { useSelector } from "react-redux";

import { useParams, Outlet, useNavigate } from "react-router-dom";

export default function AboutLatestTrials() {
  const { id } = useParams();
  const latest = trials["Latest Trials"].find(
    (trials) => trials.id === Number(id)
  );
  const [showModal, setShowModal] = useState(false);
  const [showClincicalModal, setShowClincicalModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [alertApplyModal, setAlertApplyModal] = useState(false);
  const [active, setActive] = useState("apply");
  const { auth, submit } = useSelector((state) => ({ ...state }));
  const { title, participants, payout, description, qualified } = submit;
  const { userId, isLoggedIn } = auth;
  return (
    <>
      <div>
        {latest ? (
          <div>
            <h1>{latest.title}</h1>
            <p>{latest.description}</p>
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  setActive("participant");
                  setShowModal(true);
                }}
              >
                Apply Now!
              </button>
            ) : (
              <button
                onClick={() => {
                  setActive("apply");
                  setAlertApplyModal(true);
                }}
              >
                Apply Now!
              </button>
            )}
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
      )}{" "}
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
      <Outlet />
    </>
  );
}
