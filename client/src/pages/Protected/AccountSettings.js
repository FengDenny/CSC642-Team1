import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import ReactDOM from "react-dom";

export default function AccountSettings({
  handlePersonalDataSubmit,
  handleUpdateAccountSubmit,
  deleteUserInfo,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  address,
  setAddress,
  aptno,
  setAptno,
  citystate,
  setCityState,
  zipcode,
  setZipcode,
  password,
  setPassword,
  updateEmail,
  setUpdateEmail,
}) {
  const [validated, SetValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDecault();
      event.stopPropagation();
    }

    SetValidated(true);
  };

  const comparePasswords = () => {
    if (document.getElementById("curPassword").value === password) {
      return true;
    } else {
      return false;
    }
  };

  const SubmitPasswordUpdate = (event) => {
    if (comparePasswords) {
      setPassword(document.getElementById("newPassword").value);
      handleUpdateAccountSubmit(event);
    }
  };

  function deleteAlert() {
    var conf = window.confirm("Are you sure you want to delete your profile?");
    if (conf === true) {
      deleteUserInfo();
    }
  }

  const PersonalProfile = () => (
    <>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} xs={3} controlId='userFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} xs={3} controlId='userLastname'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group as={Col} xs={6} controlId='userEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId='userAddress'>
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                type='text'
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId='userAptno'>
              <Form.Label>Apt, Suite, Bldg</Form.Label>
              <Form.Control
                type='text'
                value={aptno}
                onChange={(e) => {
                  setAptno(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId='userCityState'>
              <Form.Label>City, State</Form.Label>
              <Form.Control
                type='text'
                value={citystate}
                onChange={(e) => {
                  setCityState(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId='userZipcode'>
              <Form.Label>zipcode</Form.Label>
              <Form.Control
                type='text'
                value={zipcode}
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Col>
              <Button
                className='primary-color-btn'
                // disabled={
                //   !firstName ||
                //   !lastName ||
                //   !address ||
                //   !aptno ||
                //   !citystate ||
                //   !zipcode
                // }
                onClick={(e) => {
                  handlePersonalDataSubmit(e);
                }}
              >
                Save Changes
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );

  const UpdateProfile = () => (
    <>
      <Container>
        <Form>
          <Row>
            <h3>Update Your Email</h3>
          </Row>
          <Row>
            <Form.Group controlId='updateEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                value={updateEmail}
                onChange={(e) => {
                  setUpdateEmail(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Row>
          <hr />
          <Row>
            <h3>Update Your Password</h3>
          </Row>
          <Row>
            <Form.Group id='curPassword'>
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Current Password'
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group id='newPassword'>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='New Password'
              ></Form.Control>
            </Form.Group>
          </Row>

          <hr />
          <Row>
            <Col>
              <h3>Delete Your Account</h3>
            </Col>
          </Row>
          <Row>
            <Button
              className='primary-color-btn'
              id='DeleteButton'
              onClick={() => {
                deleteAlert();
              }}
            >
              Delete Account
            </Button>
          </Row>
          <hr style={{ width: "340px" }}></hr>
          <Row>
            <Button
              className='primary-color-btn'
              disabled={
                !updateEmail ||
                !document.getElementById("curPassword").value ||
                !document.getElementById("newPassword").value
              }
              onClick={(e) => {
                SubmitPasswordUpdate(e);
              }}
            >
              Update Account
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );

  const ShowPersonalProfile = () => {
    document.getElementById("Details Button").style.textDecoration =
      "underline";
    document.getElementById("Details Button").style.textDecorationColor =
      "#0b97ab";
    document.getElementById("Update Account Button").style.textDecoration = "";
    ReactDOM.render(PersonalProfile(), document.getElementById("infotab"));
  };

  const ShowUpdateProfile = () => {
    document.getElementById("Update Account Button").style.textDecoration =
      "underline";
    document.getElementById("Update Account Button").style.textDecorationColor =
      "#0b97ab";
    document.getElementById("Details Button").style.textDecoration = "";
    ReactDOM.render(UpdateProfile(), document.getElementById("infotab"));
  };
  return (
    <>
      <br />

      <Container>
        <Row>
          <Col xs={9}></Col>
          <Col xs={{ offset: 3 }}></Col>
          <Col xs={{ offset: 1 }}></Col>
          <Col xs={10}>
            <h1>Account Settings</h1>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <Col lg={{ offset: 2 }}>
          <div class='p-3 nav  '>
            <ul class='nav nav-pills flex-column'>
              <li>
                <button
                  class='nav-link link-dark'
                  onClick={ShowPersonalProfile}
                >
                  <h3 className='header-color' id='Details Button'>
                    Personal Details
                  </h3>
                </button>
              </li>
              <li>
                <button
                  href='#'
                  class='nav-link link-dark'
                  onClick={ShowUpdateProfile}
                >
                  <h3 className='header-color' id='Update Account Button'>
                    Update Account
                  </h3>
                </button>
              </li>
            </ul>

            <div class='d-flex flex-column flex-shrink-0 p-3 ' id='infotab'>
              {" "}
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}
