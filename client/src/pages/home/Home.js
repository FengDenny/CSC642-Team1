import React, { useState } from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import Explore from "../../image/explore.png";
import LatestCard from "../Card/LatestCard";
import ConflictCard from "../Card/ConflictCard";
import FutureCard from "../Card/FutureCards";
import SubmitCard from "../Card/SubmitCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateAccountModal from "../../components/modals/CreateAccountModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  // submit
  const [alertModal, setAlertModal] = useState(false);
  const [alertApplyModal, setAlertApplyModal] = useState(false);
  const [active, setActive] = useState("participants");
  const { auth, submit } = useSelector((state) => ({ ...state }));
  const { title, payout, qualified, notQualified, prerequisite, status } =
    submit;
  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className='jumbotron gradient hero'>
          <Container fluid>
            <Col>
              <p className='lead white-color hero-text primary-font font-size-sm'>
                Our goal is to help medical companies find participants for
                trials, and for participants to get paid for finished trials.
              </p>
              <div className='button-mobile'>
                <Button
                  variant='outline-primary  bg-white-btn submit-btn'
                  onClick={() => {
                    auth.clinicalLoggedIn
                      ? navigate("/submit-trials")
                      : auth.isLoggedIn
                      ? setActive("participants") || setAlertModal(true)
                      : navigate("/submit-trials");
                  }}
                >
                  Submit Trials
                </Button>
                <Button
                  variant='outline-primary outline-white apply-btn'
                  onClick={() => {
                    auth.isLoggedIn
                      ? navigate("/participate")
                      : auth.clinicalLoggedIn
                      ? setActive("clinical") || setAlertApplyModal(true)
                      : navigate("/participate");
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </Col>
            <Col>
              <Image src={Explore} rounded alt='explore' className='hero-img' />
            </Col>
          </Container>
        </section>
        <section>
          <Container fluid>
            <h2 className='margin-left-50 header-color primary-font font-weight-bold'>
              Latest Trials
            </h2>
            <div className='d-flex flex-wrap'>
              {!title ||
              !qualified ||
              !prerequisite ||
              !notQualified ||
              !payout ||
              status.match("Not Recruiting") ? null : (
                <SubmitCard />
              )}

              <LatestCard slice='4' />
            </div>
          </Container>
        </section>
        <section className='margin-top-10'>
          <Container fluid>
            <h2 className='margin-left-50 header-color primary-font font-weight-bold'>
              Participate without conflictions
            </h2>
            <div className='d-flex flex-wrap'>
              <ConflictCard slice='4' />
            </div>
          </Container>
        </section>
        <section className='margin-top-10'>
          <Container fluid>
            <h2 className='margin-left-50 header-color primary-font font-weight-bold'>
              Discover future trials
            </h2>
            <div className='d-flex flex-wrap'>
              {!title ||
              !qualified ||
              !prerequisite ||
              !notQualified ||
              !payout ||
              !status.match("Not Recruiting") ? null : (
                <SubmitCard />
              )}
              <FutureCard slice='4' />
            </div>
          </Container>
        </section>
      </main>
      <ToastContainer />
      {active === "participants" && (
        <CreateAccountModal
          fname={auth.firstName}
          show={alertModal}
          onHide={() => {
            setAlertModal(false);
          }}
          setActive={setActive}
        />
      )}

      {active === "clinical" && (
        <CreateAccountModal
          cname={auth.companyName}
          show={alertApplyModal}
          onHide={() => {
            setAlertApplyModal(false);
          }}
          setActive={setActive}
        />
      )}
    </>
  );
}
