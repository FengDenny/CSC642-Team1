import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin, faSearch);

export default function NavbarComponent() {
  return (
    <>
      <Navbar variant='dark' className='gradient'>
        <Container>
          <Row>
            <Col xs={8} md={4}>
              <Nav.Item>
                <Navbar.Brand href='/' className='navbar-logo'>
                  Participaid
                </Navbar.Brand>
                <SearchBar />
                <Button variant='primary' className='search-button'>
                  <FontAwesomeIcon icon={faSearch} size='1x' />
                </Button>
                <Button
                  variant='outline-primary'
                  className='justify-content-end'
                >
                  Primary
                </Button>
              </Nav.Item>
            </Col>

            <Nav className='justify-content-center'>
              <Col xs={6} md={4}>
                <Nav.Item>
                  <Nav.Link href='/about' className='links '>
                    About Us
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xs={6} md={4}>
                <Nav.Item>
                  <Nav.Link href='/participate' className='links'>
                    Participate
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col xs={6} md={4}>
                <Nav.Item>
                  <Nav.Link href='/post' className='links'>
                    Post
                  </Nav.Link>
                </Nav.Item>
              </Col>
            </Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
