import React from "react";
import { useSelector } from "react-redux";
import CardSubmit from "../../Card/SubmitCard";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TrialSubmitted() {
  const { auth } = useSelector((state) => ({ ...state }));
  const { submit } = useSelector((state) => ({ ...state }));
  const { clinicalID, companyName } = auth;
  const navigate = useNavigate();
  const {
    title,
    trialID,
    participants,
    payout,
    qualified,
    notQualified,
    poster,
  } = submit;
  console.log(poster);
  return (
    <div>
      {poster === clinicalID ? (
        <CardSubmit
          key={trialID}
          id={trialID}
          submitPrice={payout}
          title={title}
          eligibility={participants}
          btnName={"Learn More"}
        ></CardSubmit>
      ) : (
        <Container className='card-container '>
          <Card style={{ width: "18rem" }} className='height120'>
            <Card.Body className='top-80'>
              <Card.Title className='text-center primary-color'>
                No Trials
              </Card.Title>
              <Card.Text className='text-center'>
                Please create your first trial.
              </Card.Text>
              <Button
                onClick={() => navigate("/submit-trials")}
                className='primary-color-btn width-265 d-flex margin-auto justify-content-center'
              >
                Create Trial
              </Button>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
}
