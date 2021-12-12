import React from "react";
import { useParams } from "react-router-dom";
import trials from "../../stimulate-backend/data/future-trials.json";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
export default function AboutDiscoverTrials() {
  const { id } = useParams();
  const discover = trials.find((trials) => trials.id === Number(id));
  const { _id, payout, status } = discover.detail[0];
  console.log(discover.detail[0]);
  return (
    <Container>
      {discover ? (
        <div>
          <h2 className='primary-color margin-top-10 font-size-lg font-weight-bold'>
            {discover.title}
          </h2>
          <hr style={{ width: "405px" }} />
          <p className='font-size-sm width-620'>{discover.description}</p>
          <hr style={{ width: "405px" }} />
          <h2 className='primary-color margin-top-sm font-size-lg font-weight-bold'>
            Legals
          </h2>
          <div>
            <a href=' # '> Legals Information</a>
            <p></p>
            <a href=' # '> Legals Disclosures</a>{" "}
          </div>
          <p></p>
          <hr style={{ width: "405px" }} />
          <h2 className='primary-color margin-top-sm font-size-lg font-weight-bold'>
            Eligibility
          </h2>
          <Row className='width-619  margin-top-sm'>
            <Col xs={6}>
              {discover.eligibility.map(
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
              {discover.eligibility.map(
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
          <h2 className='primary-color margin-top-sm  font-weight-bold'>
            Details
          </h2>
          <p className='font-size-xsm '>
            Participants:{" "}
            <span className='primary-color font-weight-bold'>
              {discover.participants}
            </span>
          </p>
          <p className=' font-size-xsm '>
            ID: <span className='primary-color font-weight-bold'>{_id}</span>
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
              {discover.detail[0]["study-type"]}
            </span>
          </p>
          <p className=' font-size-xsm '>
            Status: {""}
            {status === "Recruiting" ? (
              <span className='green-color font-weight-bold'>{status}</span>
            ) : status === "Not Recruiting" ? (
              <span className='red-color font-weight-bold'>{status}</span>
            ) : null}
          </p>

          <p className='font-size-xsm '>
            Start Date:{" "}
            <span className=' primary-color font-weight-bold'>
              {discover.detail[0]["start-date"]}
            </span>
          </p>
          <p className=' font-size-xsm '>
            End Date:{" "}
            <span className=' primary-color font-weight-bold'>
              {discover.detail[0]["end-date"]}
            </span>
          </p>
          <p className='font-size-xsm '>
            Last Update:{" "}
            <span className=' primary-color font-weight-bold'>
              {discover.detail[0]["last-updated"]}
            </span>
          </p>
        </div>
      ) : (
        <h2> Sorry, but this trials doesn't exist yet!</h2>
      )}
    </Container>
  );
}
