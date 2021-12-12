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

import { useParams, Outlet, useNavigate } from "react-router-dom";

export default function AboutLatestTrials() {
  const { id } = useParams();
  const latest = trials["Latest Trials"].find(
    (trials) => trials.id === Number(id)
  );

  console.log(latest);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showClincicalModal, setShowClincicalModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [alertApplyModal, setAlertApplyModal] = useState(false);
  const [appliedModal, setAppliedModal] = useState(false);
  const [active, setActive] = useState("apply");
  const { auth, submit } = useSelector((state) => ({ ...state }));
  const { title, participants, payout, description, qualified, notQualified } =
    submit;
  const { userId, isLoggedIn } = auth;

  return (
    <>
      <Container>
        {latest ? (
          <div>
            <h2 className='primary-color margin-top-10 font-size-lg font-weight-bold'>
              {latest.title}
            </h2>
            <hr style={{ width: "405px" }} />
            <p className='font-size-sm width-620'>{latest.description}</p>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm font-weight-bold'>
              Legals
            </h2>
            <div className=' margin-top-sm'>
              <a href=' # '> Legals Information</a>
              <p></p>
              <a href=' # '> Legals Disclosures</a>
            </div>
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm font-weight-bold'>
              Eligibility
            </h2>
            <Row className='width-619  margin-top-sm'>
              <Col xs={6}>
                {latest.eligibility.map(
                  (el) =>
                    el.eligible &&
                    el.eligible.map((id) => (
                      <div className='font-size-xsm margin-left-negative'>
                        {id.requirement_one ? (
                          <p>
                            <FaCheck className='green-color ' />{" "}
                            {id.requirement_one}
                          </p>
                        ) : null}
                        {id.requirement_two ? (
                          <p>
                            <FaCheck className='green-color ' />{" "}
                            {id.requirement_two}
                          </p>
                        ) : null}
                        {id.requirement_three ? (
                          <p>
                            <FaCheck className='green-color ' />{" "}
                            {id.requirement_three}
                          </p>
                        ) : null}
                      </div>
                    ))
                )}
              </Col>
              <Col xs={6}>
                {latest.eligibility.map(
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
            <h2 className='primary-color margin-top-sm font-size-sm font-weight-bold'>
              Prerequisite
            </h2>
            {latest.prerequisite.map((result) => (
              <div className='font-size-xsm  margin-top-sm'>
                <p>
                  <FaCheck className='green-color ' /> {result.requirement_one}
                </p>
                {result.requirement_two ? (
                  <p>
                    {" "}
                    <FaCheck className='green-color ' />{" "}
                    {result.requirement_two}
                  </p>
                ) : null}
                {result.requirement_three ? (
                  <p>
                    {" "}
                    <FaCheck className='green-color ' />{" "}
                    {result.requirement_three}
                  </p>
                ) : null}
                {result.requirement_four ? (
                  <p>
                    {" "}
                    <FaCheck className='green-color ' />{" "}
                    {result.requirement_four}
                  </p>
                ) : null}
              </div>
            ))}
            <hr style={{ width: "405px" }} />
            <h2 className='primary-color margin-top-sm font-size-sm  font-weight-bold'>
              Details
            </h2>
            <p className='font-size-xsm '>
              Participants:{" "}
              <span className='primary-color font-weight-bold'>
                {latest.participants}
              </span>
            </p>
            <p className=' font-size-xsm '>
              ID:{" "}
              <span className='primary-color font-weight-bold'>
                {latest.detail[0]._id}
              </span>
            </p>
            <p className='font-size-xsm '>
              Payout:{" "}
              <span className='primary-color font-size-md font-weight-bold'>
                {latest.price}
              </span>
            </p>
            <p className='font-size-xsm '>
              Study Type:{" "}
              <span className='primary-color font-weight-bold'>
                {latest.detail[0]["study-type"]}
              </span>
            </p>
            <p className=' font-size-xsm '>
              Status: {""}
              {latest.detail[0].status === "Recruiting" ? (
                <span className='green-color font-weight-bold'>
                  {latest.detail[0].status}
                </span>
              ) : latest.detail[0].status === "Not Recruiting" ? (
                <span className='red-color font-weight-bold'>
                  {latest.detail[0].status}
                </span>
              ) : null}
            </p>

            <p className='font-size-xsm '>
              Start Date:{" "}
              <span className=' primary-color font-weight-bold'>
                {latest.detail[0]["start-date"]}
              </span>
            </p>
            <p className=' font-size-xsm '>
              End Date:{" "}
              <span className=' primary-color font-weight-bold'>
                {latest.detail[0]["end-date"]}
              </span>
            </p>
            <p className='font-size-xsm '>
              Last Update:{" "}
              <span className=' primary-color font-weight-bold'>
                {latest.detail[0]["last-updated"]}
              </span>
            </p>

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
            ) : latest.detail[0].status !== "Not Recruiting" ||
              submit.status !== "Not Recruiting" ? (
              <button
                onClick={() => {
                  setActive("applied");
                  setAppliedModal(true);
                  dispatch(setAppliedTitle(latest.title));
                  dispatch(setAppliedParticipants(latest.participants));
                  dispatch(setAppliedDescription(latest.description));
                }}
                className='primary-color-btn height34'
              >
                Apply Now!
              </button>
            ) : null}
          </div>
        ) : submit ? (
          <div>
            <h2 className='primary-color margin-top-sm  font-weight-bold'>
              {title}
            </h2>
            <p className='margin-top-sm font-size-xsm '>
              Payout:{" "}
              <span className='primary-color font-size-md font-weight-bold'>
                ${payout}
              </span>
            </p>
            <p>{description}</p>
            <p>{participants}</p>
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

            <p className='margin-top-sm font-size-xsm '>
              Status:{" "}
              {submit.status === "Recruiting" ? (
                <span className='green-color font-weight-bold'>
                  {submit.status}
                </span>
              ) : (
                <span className='red-color font-weight-bold'>
                  {submit.status}{" "}
                </span>
              )}
            </p>
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
            ) : submit.status !== "Not Recruiting" ? (
              <button
                onClick={() => {
                  setActive("applied");
                  setAppliedModal(true);
                  dispatch(setAppliedTitle(submit.title));
                  dispatch(setAppliedParticipants(submit.participants));
                  dispatch(setAppliedDescription(submit.description));
                }}
                className='primary-color-btn height34'
              >
                Apply Now!
              </button>
            ) : null}
          </div>
        ) : (
          <h1> Sorry, but this trials doesn't exist yet!</h1>
        )}
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
      <Outlet />
    </>
  );
}
