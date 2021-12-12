import React from "react";
import { Container } from "react-bootstrap";
export default function SearchTrials({
  latest,
  conflict,
  future,
  text,
  value,
}) {
  return (
    <Container>
      {latest || conflict || future ? (
        <div className='d-flex flex-wrap'>
          {latest} {conflict} {future}
        </div>
      ) : (
        <div className='d-flex flex-wrap'>Sorry, cannot be found</div>
      )}
    </Container>
  );
}
