import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
export default function SearchTrials({ latest, conflict, future }) {
  return (
    <Container>
      {latest || conflict || future ? (
        <div className='d-flex flex-wrap'>
          {latest} {conflict} {future}
        </div>
      ) : null}
    </Container>
  );
}
