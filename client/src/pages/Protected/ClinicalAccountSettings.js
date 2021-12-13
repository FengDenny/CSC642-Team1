import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Form, Container, Row, Col, Tab, Nav } from "react-bootstrap";

export default function ClinicalAccountSettings({
  handleSettingsSubmit,
  deleteUserInfo,
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
      <br />
      <Container>
        <Row>
          <Col xs={8}></Col>
          <Col xs={4}></Col>
          <Col></Col>
          <Col></Col>
          <Col xs={10}>
            <h1 className='primary-color'>Account Settings</h1>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container className='container'>
        <Tab.Container defaultActiveKey='first'>
          <Row>
            <Col xs={4}></Col>
            <Col></Col>
            <Col></Col>
            <Col xs={7}>
              <Nav variant='pills' className='flex-column bgLight'>
                <Nav.Item>
                  <Nav.Link
                    name='personalDetailsBtn'
                    style={{ color: "#5f6368" }}
                    eventKey='first'
                  >
                    <h4>Company Details</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    style={{ color: "#5f6368" }}
                    id='updateAccountBtn'
                    eventKey='second'
                  >
                    <h4>Update Account</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {/* Personal Details */}
                <Tab.Pane eventKey='first'>
                  <Container>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group id='userCompanyName'>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                              type='text'
                              placeholder={auth.companyName}
                              required
                            />
                          </Form.Group>
                        </Col>

                        <Form.Group as={Col} xs={6}>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder={auth.clinicalEmail}
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
                            className='primary-color-btn margin-top-10 width-396'
                            onClick={(e) => {
                              handleSettingsSubmit(e);
                            }}
                          >
                            Save Changes
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Container>
                    <Form>
                      <Row>
                        <Col>
                          <h3>Update Your Email</h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
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
                        </Col>
                      </Row>
                      <hr style={{ width: "405px" }} />
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

                      <hr style={{ width: "405px" }} />
                      <Row>
                        <Col>
                          <Button
                            className='primary-color-btn margin-top-10 width-396'
                            id='DeleteButton'
                            onClick={() => {
                              deleteAlert();
                            }}
                          >
                            Delete Account
                          </Button>
                        </Col>
                      </Row>
                      <hr style={{ width: "405px" }} />
                      <Row>
                        <Col>
                          <Button
                            className='primary-color-btn  width-396'
                            onClick={(e) => {
                              submitPasswordUpdate(e);
                              handleEmailSubmit(e);
                            }}
                          >
                            Update Account
                          </Button>
                        </Col>
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
