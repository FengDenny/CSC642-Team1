import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import Explore from "../../image/explore.png";

export default function Home() {
  return (
    <div className='jumbotron gradient hero'>
      {" "}
      <Container>
        <Row>
          <Col>
            <p className='lead white-color hero-text primary-font font-size-sm'>
              Our goal is to help medical companies find participants for
              trials, and for participants to get paid for finished trials.
            </p>

            <Button variant='outline-primary  bg-white-btn submit-btn'>
              Submit Trials
            </Button>
            <Button variant='outline-primary outline-white apply-btn'>
              Apply Now
            </Button>
          </Col>
          <Col>
            <Image src={Explore} rounded alt='explore' className='hero-img' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
