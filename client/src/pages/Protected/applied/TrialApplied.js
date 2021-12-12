import React from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import trials from "../../../stimulate-backend/data/latest-trials.json";

export default function TrialApplied() {
  const { applied } = useSelector((state) => ({ ...state }));
  const { appliedID, url, trialTitle, participants, description } = applied;

  return (
    <Container className='card-container'>
      <h1 className='primary-color text-center'>Applied Trials</h1>
      <Card className='card'>
        <Card.Header className='card-header-css primary-font font-weight-bold'>
          {trialTitle}
        </Card.Header>
        <Col>
          <Card.Body>
            <span className='font-weight-bold'>Particpants: </span>
            {participants}
          </Card.Body>
          <Card.Text className='top5'>
            <span className='font-weight-bold'>Description: </span>
            {description}
          </Card.Text>
        </Col>
        <Col>
          <div>
            <Link
              to={`${url}/${appliedID}`}
              className='primary-color d-flex justify-content-center link-btn'
            >
              Read More
            </Link>
          </div>
        </Col>
      </Card>
    </Container>
  );
}
