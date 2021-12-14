import React from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TrialApplied() {
  const { applied } = useSelector((state) => ({ ...state }));
  const { appliedID, url, trialTitle, participants, description } = applied;
  const navigate = useNavigate();
  return (
    <Container className='card-container'>
      <h1 className='primary-color text-center'>Applied Trials</h1>
      {appliedID ? (
        <Card className='card'>
          <Card.Header className='card-header-css primary-font primary-color font-weight-bold'>
            {trialTitle}
          </Card.Header>
          <Col>
            <Card.Body>
              <span className='font-weight-bold primary-color'>
                Particpants:{" "}
              </span>
              {participants}
            </Card.Body>
            <Card.Text className='margin-top-sm'>
              <span className='font-weight-bold primary-color '>
                Description:{" "}
              </span>
              {description}
            </Card.Text>
          </Col>
          <Col>
            <div>
              <Button
                className='primary-color d-flex justify-content-center link-btn'
                onClick={() => window.location.replace(`${url}`)}
              >
                <span className='bottom-4'>Read More</span>
              </Button>
            </div>
          </Col>
        </Card>
      ) : (
        <Card style={{ width: "20rem" }} className='height120 margin-left-50'>
          <Card.Body className='top-80'>
            <Card.Title className='text-center primary-color'>
              You have not applied to any trials
            </Card.Title>
            <Card.Text className='text-center margin-top-sm'>
              Please apply to your first trial.
            </Card.Text>
            <Button
              onClick={() => navigate("/participate")}
              className='primary-color-btn width-265 d-flex margin-auto justify-content-center'
            >
              Apply Now
            </Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
