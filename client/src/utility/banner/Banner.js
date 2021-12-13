import React from "react";
import { Container } from "react-bootstrap";

export default function Banner() {
  const bannerMsg = "HCI Class SFSU CS Department Fall 2021 Team 1";
  return (
    <section className='gradient height70 text-shadow'>
      <Container>
        <p className='text-center font-size-sm top-10 white-color font-weight-bold  '>
          {bannerMsg.toUpperCase()}
        </p>
      </Container>{" "}
    </section>
  );
}
