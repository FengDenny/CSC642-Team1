import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import Explore from "../../image/explore.png";
import LatestCard from "../Card/LatestCard";
import ConflictCard from "../Card/ConflictCard";
import FutureCard from "../Card/FutureCards";
import FutureCards from "../Card/FutureCards";

export default function Home() {
  return (
    <main>
      <section className='jumbotron gradient hero'>
        <Container fluid>
          <Col>
            <p className='lead white-color hero-text primary-font font-size-sm'>
              Our goal is to help medical companies find participants for
              trials, and for participants to get paid for finished trials.
            </p>
            <div className='button-mobile'>
              <Button variant='outline-primary  bg-white-btn submit-btn'>
                Submit Trials
              </Button>
              <Button variant='outline-primary outline-white apply-btn'>
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
            <LatestCard />
          </div>{" "}
        </Container>
      </section>
      <section className='margin-top-10'>
        <Container fluid>
          <h2 className='margin-left-50 header-color primary-font font-weight-bold'>
            Participate without conflictions
          </h2>
          <div className='d-flex flex-wrap'>
            <ConflictCard />
          </div>{" "}
        </Container>
      </section>
      <section className='margin-top-10'>
        <Container fluid>
          <h2 className='margin-left-50 header-color primary-font font-weight-bold'>
            Discover future trials
          </h2>
          <div className='d-flex flex-wrap'>
            <FutureCard />
          </div>
        </Container>
      </section>
    </main>
  );
}
