import React from "react";
import { Container, Col, Row, Button, Image, Nav } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
export default function Footer() {
  return (
    <>
      <footer className='gradient margin-top-10 height-footer py-4'>
        <Container fluid className='text-center margin-top-10'>
          <h2 className=' margin-top-10 white-color font-weight-bold'>
            Participaid
          </h2>
          <h4 className='  white-color font-weight-bold '>
            © 2021 Participaid Inc. All rights reserved.
          </h4>
          <Nav className='justify-content-center'>
            <Nav.Item>
              <Nav.Link href='/about' className='links  '>
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/participate' className='links'>
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/post' className='links'>
                Terms and Conditions
              </Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link href='/post' className='links'>
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <p className=''>
            <SocialIcons />
          </p>
        </Container>
      </footer>
    </>
  );
}
