import React from "react";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
export default function SearchTrials({
  latest,
  conflict,
  future,
  text,
  value,
}) {
  return (
    <Container>
      <div className='d-flex flex-wrap'>
        {latest} {conflict} {future}
      </div>
    </Container>
  );
}
