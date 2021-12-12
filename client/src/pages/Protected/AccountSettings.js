import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Form, Container, Row, Col, Tab, Nav } from "react-bootstrap";

export default function AccountSettings({
  handleSettingsSubmit,
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
  handleEmailSubmit,
}) {
  const { auth } = useSelector((state) => ({ ...state }));
  const { id } = useParams();
  const [validated, SetValidated] = useState(false);

  const comparePasswords = () => {
    if (document.getElementById("curPassword").value == password) {
      return true;
    } else {
      return false;
    }
  };

  const submitPasswordUpdate = () => {
    if (comparePasswords) {
      setPassword(document.getElementById("newPassword").value);
    }
  };

  function deleteAlert() {
    var conf = window.confirm("Are you sure you want to delete your profile?");
    if (conf == true) {
      deleteUserInfo();
    }
  }
  return (
    <>
      <h1 className='text-center primary-color'>Account Settings</h1>
      <Container className='container'>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Personal Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Update Account</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {/* Personal Details */}
                <Tab.Pane eventKey='first'>
                  <Form>
                    <Row>
                      <Form.Group as={Col} xs={3} id='userFirstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={auth.firstName}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </Form.Group>

                      <Form.Group as={Col} xs={3} id='userLastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={auth.lastName}
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>
                      <Form.Group as={Col} xs={6}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type='email'
                          placeholder={auth.email}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} id='userAddress'>
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={auth.address}
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>

                      <Form.Group as={Col} id='userAptno'>
                        <Form.Label>Apt, Suite, Bldg</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={auth.aptno}
                          value={aptno}
                          onChange={(e) => {
                            setAptno(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} id='userCityState'>
                        <Form.Label>City, State</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={auth.citystate}
                          value={citystate}
                          onChange={(e) => {
                            setCityState(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>

                      <Form.Group as={Col} id='userZipcode'>
                        <Form.Label>zipcode</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={auth.zipcode}
                          value={zipcode}
                          onChange={(e) => {
                            setZipcode(e.target.value);
                          }}
                          required
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Col>
                        <Button
                          className='primary-color-btn margin-top-10'
                          onClick={(e) => {
                            handleSettingsSubmit(e);
                          }}
                        >
                          Save Changes
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Container>
                    <Form>
                      <Row>
                        <h3>Update Your Email</h3>
                      </Row>
                      <Row>
                        <Form.Group id='updateEmail'>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder={auth.email}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
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
                          onClick={(e) => {
                            submitPasswordUpdate(e);
                            handleEmailSubmit(e);
                          }}
                        >
                          Update Account
                        </Button>
                      </Row>
                    </Form>
                  </Container>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
