import React, { useState } from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import Explore from "../../../image/explore.png";
import LatestCard from "../../Card/LatestCard";
import ConflictCard from "../../Card/ConflictCard";
import FutureCard from "../../Card/FutureCards";
import SubmitCard from "../../Card/SubmitCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateAccountModal from "../../../components/modals/CreateAccountModal";
import "../../../participate.css";

export default function Home() {
  // submit
  const [alertModal, setAlertModal] = useState(false);
  const [alertApplyModal, setAlertApplyModal] = useState(false);
  const [active, setActive] = useState("participants");
  const { auth, submit } = useSelector((state) => ({ ...state }));
  const { title, payout, qualified, notQualified, prerequisite } = submit;
  const navigate = useNavigate();

  return (
    <>
      <main>
        <section>
          <Container fluid className='position-relative-bottom'>
            <h2 className='margin-left-50 white-color primary-font font-weight-bold text-shadow'>
              Latest Trials
            </h2>

            <div className='d-flex flex-wrap'>
              {!title ||
              !qualified ||
              !prerequisite ||
              !notQualified ||
              !payout ? null : (
                <SubmitCard />
              )}
              <LatestCard slice='8' />
            </div>
          </Container>
        </section>
        <section className='margin-top-10'>
          <Container fluid>
            <h2 className='margin-left-50 header-color primary-font font-weight-bold'>
              Participate without conflictions
            </h2>
            <div className='d-flex flex-wrap'>
              <ConflictCard slice='8' />
            </div>
          </Container>
        </section>
        <section className='margin-top-10'>
          <Container fluid>
            <h2 className='margin-left-50 header-color primary-font font-weight-bold'>
              Discover future trials
            </h2>
            <div className='d-flex flex-wrap'>
              <FutureCard slice='8' />
            </div>
          </Container>
        </section>
      </main>

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
