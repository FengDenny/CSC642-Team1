import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Image,
  Card,
  ListGroup,
} from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cards(props) {
  const navigate = useNavigate();
  const { submit } = useSelector((state) => ({ ...state }));
  const { qualified, notQualified } = submit;
  return (
    <Container className='card-container '>
      <Card className='card'>
        {props.submitPrice ? (
          <Card.Title
            as='h5'
            className='price-banner d-flex justify-content-center'
          >
            ${props.submitPrice}
          </Card.Title>
        ) : null}
        <Card.Header className='card-header-css primary-font'>
          {props.title}
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.participants}</Card.Title>
          <Card.Title className='title-header'>{props.eligibility}</Card.Title>
          <Row>
            <Col xs={6}>
              {qualified[0]
                ? qualified[0].map((data) => (
                    <Card.Body>
                      <FaCheck className='green-color' /> {data}
                    </Card.Body>
                  ))
                : null}
            </Col>{" "}
            <Col xs={6}>
              {notQualified[0]
                ? notQualified[0].map((data) => (
                    <Card.Body>
                      <FaTimes className='red-color' /> {data}
                    </Card.Body>
                  ))
                : null}
            </Col>
          </Row>{" "}
          <Col className='top-10'>
            {props.status === "Recruiting" ? (
              <Card.Body>
                <h5>
                  Status: <span className='green-color'>{props.status}</span>
                </h5>
              </Card.Body>
            ) : props.status === "Not Recruiting" ? (
              <Card.Body>
                <h5>
                  Status: <span className='red-color'>{props.status}</span>
                </h5>
              </Card.Body>
            ) : null}
          </Col>
        </Card.Body>
        <Button
          variant='primary'
          className='card-primary-color-btn '
          onClick={() =>
            props.btnName === "Learn More"
              ? navigate(`latest/submit/${props.id}`, { replace: true })
              : props.btnName === "Participate"
              ? navigate(`conflict-free/${props.id}`)
              : props.btnName === "Discover"
              ? navigate(`discover/${props.id}`)
              : null
          }
        >
          {props.btnName}
        </Button>
      </Card>
    </Container>
  );
}
