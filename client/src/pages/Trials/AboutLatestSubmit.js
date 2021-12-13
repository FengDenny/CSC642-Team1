import React, { useState } from "react";
import CreateAccountModal from "../../components/modals/CreateAccountModal";
import SignInModal from "../../components/modals/SignInModal";
import ParticipantAuthModal from "../../components/modals/ParticipantAuthModal";
import ClinicalAuthModal from "../../components/modals/ClinicalAuthModal";
import AppliedTrialModal from "../../components/modals/ApplyTrialModal";
import trials from "../../stimulate-backend/data/latest-trials.json";
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  setAppliedTitle,
  setAppliedParticipants,
  setAppliedDescription,
} from "../../redux/actions/appliedAction";

import GoogleMapContainer from "../../components/map/GoogleMapContainer";

export default function AboutLatestSubmitTrials() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showClincicalModal, setShowClincicalModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [alertApplyModal, setAlertApplyModal] = useState(false);
  const [appliedModal, setAppliedModal] = useState(false);
  const [active, setActive] = useState("apply");
  const { auth, submit, applied } = useSelector((state) => ({ ...state }));
  const {
    title,
    participants,
    payout,
    description,
    qualified,
    notQualified,
    status,
    studyType,
    date,
    trialID,
    location,
  } = submit;
  const { isLoggedIn, clinicalLoggedIn } = auth;
  const { appliedID, trialTitle } = applied;
  return (
    <>
      <Container>
        {submit ? (
          <div>
            <h2 className='primary-color margin-top-sm  font-weight-bold'>
              {title}
            </h2>
            <hr style={{ width: "405px" }} />
            <p className='font-size-sm width-620'>{description}</p>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm font-weight-bold'>
              Legals
            </h2>
            <div>
              <a href=' # '> Legals Information</a>
              <p></p>
              <a href=' # '> Legals Disclosures</a>
            </div>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm font-weight-bold'>
              Eligibility
            </h2>
            <Row className='width-619'>
              <Col xs={6}>
                {qualified[0].map((result) => (
                  <p>
                    <FaCheck className='green-color ' /> {result}
                  </p>
                ))}
              </Col>

              <Col xs={6}>
                {notQualified[0].map((result) => (
                  <p>
                    <FaTimes className='red-color ' /> {result}
                  </p>
                ))}
              </Col>
            </Row>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm  font-weight-bold'>
              Details
            </h2>
            <Row className='margin-left-negative  width-794'>
              <Col xs={6}>
                <p className='font-size-xsm '>
                  Participants:{" "}
                  <span className='primary-color font-weight-bold'>
                    {participants}
                  </span>
                </p>
                <p className=' font-size-xsm '>
                  ID:{" "}
                  <span className='primary-color font-weight-bold'>
                    {trialID}
                  </span>
                </p>
                <p className='font-size-xsm '>
                  Payout:{" "}
                  <span className='primary-color font-size-md font-weight-bold'>
                    ${payout}
                  </span>
                </p>
                <p className='font-size-xsm '>
                  Study Type:{" "}
                  <span className='primary-color font-weight-bold'>
                    {studyType}
                  </span>
                </p>
                <p className=' font-size-xsm '>
                  Status: {""}
                  {status === "Recruiting" ? (
                    <span className='green-color font-weight-bold'>
                      {status}
                    </span>
                  ) : status === "Not Recruiting" ? (
                    <span className='red-color font-weight-bold'>{status}</span>
                  ) : null}
                </p>

                <p className='font-size-xsm '>
                  Start Date:{" "}
                  <span className=' primary-color font-weight-bold'>
                    {date[0].start}
                  </span>
                </p>
                <p className=' font-size-xsm '>
                  End Date:{" "}
                  <span className=' primary-color font-weight-bold'>
                    {date[0].end}
                  </span>
                </p>
                <p className='font-size-xsm '>
                  Last Update:{" "}
                  <span className=' primary-color font-weight-bold'>
                    {today.toDateString()}
                  </span>
                </p>
              </Col>

              <Col xs={6}>
                <GoogleMapContainer
                  isActive={"result-map-container"}
                  mapAddress={`${location.address} `}
                />
              </Col>
            </Row>
          </div>
        ) : (
          <h1> Sorry, but this trials doesn't exist yet!</h1>
        )}
        {clinicalLoggedIn ? null : !isLoggedIn ? (
          <button
            onClick={() => {
              setActive("participant");
              setShowModal(true);
            }}
            className='primary-color-btn height34'
          >
            Apply Now
          </button>
        ) : submit.status !== "Not Recruiting" ? (
          <button
            disabled={trialTitle.match(submit.title) ? "true" : null}
            onClick={() => {
              setActive("applied");
              setAppliedModal(true);
              dispatch(setAppliedTitle(submit.title));
              dispatch(setAppliedParticipants(submit.participants));
              dispatch(setAppliedDescription(submit.description));
            }}
            className='primary-color-btn height34'
          >
            {trialTitle.match(submit.title) ? "Applied" : "Apply Now"}
          </button>
        ) : null}
      </Container>
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
