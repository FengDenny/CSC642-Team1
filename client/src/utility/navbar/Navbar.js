import React from "react";
import { Navbar, Container, Col, Nav, Button, Image } from "react-bootstrap";
import Logo from "../../image/logo.png";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin, faSearch);

export default function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='dark' className='gradient'>
        <Container>
          <Navbar.Brand href='/'>
            <Image src={Logo} rounded alt='logo' className='navbar-logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto '>
              <Col xs={6} md={4}>
                <Nav.Item>
                  <Nav.Link href='/about' className='links  '>
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
            <Nav className='d-flex'>
              <SearchBar />
              <Button variant='primary' className='search-button'>
                <FontAwesomeIcon icon={faSearch} size='1x' />
              </Button>
            </Nav>
            <Nav>
              <Button variant='outline-primary' className='signin-btn'>
                SIGN IN
              </Button>
              <Button
                variant='outline-primary'
                className='signup-btn outline-white'
              >
                SIGN UP, IT’S FREE
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
