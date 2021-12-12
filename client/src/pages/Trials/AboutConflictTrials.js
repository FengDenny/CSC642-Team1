import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CreateAccountModal from "../../components/modals/CreateAccountModal";
import SignInModal from "../../components/modals/SignInModal";
import ParticipantAuthModal from "../../components/modals/ParticipantAuthModal";
import ClinicalAuthModal from "../../components/modals/ClinicalAuthModal";
import AppliedTrialModal from "../../components/modals/ApplyTrialModal";
import trials from "../../stimulate-backend/data/conflict-free.json";
import { useSelector, useDispatch } from "react-redux";
import {
  setAppliedTitle,
  setAppliedParticipants,
  setAppliedDescription,
} from "../../redux/actions/appliedAction";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import GoogleMapContainer from "../../components/map/GoogleMapContainer";
export default function AboutConflictTrials() {
  const { id } = useParams();
  const conflict = trials["Conflict-Free"].find(
    (trials) => trials.id === Number(id)
  );
  console.log(conflict);
  const [showModal, setShowModal] = useState(false);
  const [showClincicalModal, setShowClincicalModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [alertApplyModal, setAlertApplyModal] = useState(false);
  const [appliedModal, setAppliedModal] = useState(false);
  const [active, setActive] = useState("apply");
  const { _id, payout, status } = conflict.detail[0];
  const { auth, submit } = useSelector((state) => ({ ...state }));
  const { isLoggedIn } = auth;
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        {conflict ? (
          <div>
            <h2 className='primary-color margin-top-10 font-size-lg font-weight-bold'>
              {conflict.title}
            </h2>
            <hr style={{ width: "405px" }} />
            <p className='font-size-sm width-620'>{conflict.description}</p>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm font-weight-bold'>
              Legals
            </h2>
            <div>
              <a href=' # '> Legals Information</a>
              <p></p>
              <a href=' # '> Legals Disclosures</a>
            </div>
            <p></p>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm font-weight-bold'>
              Eligibility
            </h2>
            <Row className='width-619  margin-top-sm'>
              <Col xs={6}>
                {conflict.eligibility.map(
                  (el) =>
                    el.eligible &&
                    el.eligible.map((id) => (
                      <div className='font-size-xsm margin-left-negative margin-top-sm'>
                        {id.requirement_one ? (
                          <p>
                            <FaCheck className='green-color ' />{" "}
                            {id.requirement_one}
                          </p>
                        ) : null}
                        {id.requirement_two ? (
                          <p>
                            {" "}
                            <FaCheck className='green-color ' />{" "}
                            {id.requirement_two}
                          </p>
                        ) : null}
                        {id.requirement_three ? (
                          <p>
                            {" "}
                            <FaCheck className='green-color ' />{" "}
                            {id.requirement_three}
                          </p>
                        ) : null}{" "}
                        {id.requirement_four ? (
                          <p>
                            {" "}
                            <FaCheck className='green-color ' />{" "}
                            {id.requirement_four}
                          </p>
                        ) : null}
                      </div>
                    ))
                )}
              </Col>
              <Col xs={6}>
                {conflict.eligibility.map(
                  (el) =>
                    el.ineligible &&
                    el.ineligible.map((id) => (
                      <div className='font-size-xsm '>
                        {id.requirement_one ? (
                          <p>
                            <FaTimes className='red-color ' />{" "}
                            {id.requirement_one}
                          </p>
                        ) : null}
                        {id.requirement_two ? (
                          <p>
                            <FaTimes className='red-color ' />{" "}
                            {id.requirement_two}
                          </p>
                        ) : null}
                        {id.requirement_three ? (
                          <p>
                            <FaTimes className='red-color ' />{" "}
                            {id.requirement_three}
                          </p>
                        ) : null}
                      </div>
                    ))
                )}
              </Col>
            </Row>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm  font-weight-bold'>
              Details
            </h2>
            <Row className='width-619'>
              <Col xs={6}>
                <p className='font-size-xsm '>
                  Participants:{" "}
                  <span className='primary-color font-weight-bold'>
                    {conflict.participants}
                  </span>
                </p>
                <p className=' font-size-xsm '>
                  ID:{" "}
                  <span className='primary-color font-weight-bold'>{_id}</span>
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
                    {conflict.detail[0]["study-type"]}
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
                    {conflict.detail[0]["start-date"]}
                  </span>
                </p>
                <p className=' font-size-xsm '>
                  End Date:{" "}
                  <span className=' primary-color font-weight-bold'>
                    {conflict.detail[0]["end-date"]}
                  </span>
                </p>
                <p className='font-size-xsm '>
                  Last Update:{" "}
                  <span className=' primary-color font-weight-bold'>
                    {conflict.detail[0]["last-updated"]}
                  </span>
                </p>
              </Col>
              <Col xs={6}>
                {conflict.location.map((loc) => (
                  <GoogleMapContainer
                    isActive={"result-map-container"}
                    mapAddress={`${loc.address} `}
                  />
                ))}
              </Col>
            </Row>
          </div>
        ) : (
          <h2> Sorry, but this trials doesn't exist yet!</h2>
        )}
        {!isLoggedIn ? (
          <button
            onClick={() => {
              setActive("participant");
              setShowModal(true);
            }}
            className='primary-color-btn height34'
          >
            Apply Now!
          </button>
        ) : conflict.detail[0].status !== "Not Recruiting" ||
          submit.status !== "Not Recruiting" ? (
          <button
            onClick={() => {
              setActive("applied");
              setAppliedModal(true);
              dispatch(setAppliedTitle(conflict.title));
              dispatch(setAppliedParticipants(conflict.participants));
              dispatch(setAppliedDescription(conflict.description));
            }}
            className='primary-color-btn height34'
          >
            Apply Now!
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
