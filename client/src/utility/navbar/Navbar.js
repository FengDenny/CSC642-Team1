import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navbar, Container, Col, Nav, Button, Image } from "react-bootstrap";
import Logo from "../../image/logo.png";
import SearchBar from "./SearchBar";
import ParticipantAuthModal from "../../components/modals/ParticipantAuthModal";
import ClinicalAuthModal from "../../components/modals/ClinicalAuthModal";
import SignInModal from "../../components/modals/SignInModal";
import CreateAccountModal from "../../components/modals/CreateAccountModal";
import { AuthClinicalNav, AuthParticipant } from "./AuthNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin, faSearch);

export default function NavbarComponent() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [showClincicalModal, setShowClincicalModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [active, setActive] = useState("signup");
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='dark' className='gradient '>
        <Container fluid>
          <Navbar.Brand href='/'>
            <Image src={Logo} rounded alt='logo' className='navbar-logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto margin-auto'>
              <Col xs={6} md={4}>
                <Nav.Item>
                  <Nav.Link href='/' className='links  '>
                    Home
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
                  {auth.isLoggedIn ? (
                    <Nav.Link
                      href='#'
                      className='links'
                      onClick={() => {
                        setActive("participants");
                        setAlertModal(true);
                      }}
                    >
                      Post
                    </Nav.Link>
                  ) : (
                    <Nav.Link href='/submit-trials' className='links'>
                      Post
                    </Nav.Link>
                  )}
                </Nav.Item>
              </Col>
            </Nav>

            <Nav className='right-135'>
              {auth.clinicalLoggedIn === true ? (
                <AuthClinicalNav />
              ) : auth.isLoggedIn === true ? (
                <AuthParticipant />
              ) : (
                <>
                  <Button
                    variant='outline-primary'
                    className='signin-btn'
                    onClick={() => {
                      setActive("signin");
                      setShowSignInModal(true);
                    }}
                  >
                    SIGN IN
                  </Button>
                  <Button
                    variant='outline-primary'
                    className='signup-btn outline-white'
                    onClick={() => {
                      setActive("participant");
                      setShowModal(true);
                    }}
                  >
                    SIGN UP, IT’S FREE
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav className='d-flex gradient nav-height'>
        <Container>
          <SearchBar
            value={value}
            setValue={setValue}
            text={text}
            setText={setText}
          />
        </Container>
      </Nav>
      {active === "signin" && (
        <SignInModal
          show={showSignInModal}
          onHide={() => setShowSignInModal(false)}
          setShowModal={setShowModal}
          setActive={setActive}
        />
      )}{" "}
      {active === "clinical" && (
        <ClinicalAuthModal
          show={showClincicalModal}
          onHide={() => setShowClincicalModal(false)}
          setShowModal={setShowModal}
          setShowSignInModal={setShowSignInModal}
          setShowClincicalModal={setShowClincicalModal}
          setActive={setActive}
        />
      )}
      {active === "participant" && (
        <ParticipantAuthModal
          show={showModal}
          onHide={() => setShowModal(false)}
          setActive={setActive}
          setShowClincicalModal={setShowClincicalModal}
          setShowSignInModal={setShowSignInModal}
          setShowModal={setShowModal}
        />
      )}
      {active === "participants" && (
        <CreateAccountModal
          fname={auth.firstName}
          show={alertModal}
          onHide={() => {
            setAlertModal(false);
          }}
          setActive={setActive}
        />
      )}
    </>
  );
}
