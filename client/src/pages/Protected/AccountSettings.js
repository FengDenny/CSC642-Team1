import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
export default function AccountSettings(props) {
  const { auth } = useSelector((state) => ({ ...state }));
  const { id } = useParams();
  const[validated, SetValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity()===false){
      event.preventDecault();
      event.stopPropagation();
    }

    SetValidated(true);
  };


  const personalProfile = (
  <>
  <h1>Account Settings</h1>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} xs={2} controlId="userFirstName" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="input" value={auth.firstName} required />
              </Form.Group>

              <Form.Group as={Col} xs={2} controlId="userLastname" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="input" value={auth.lastName} required />
              </Form.Group>

              <Form.Group as={Col} controlId="userEmail" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={auth.email} required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="userAddress" >
                <Form.Label>Street Address</Form.Label>
                <Form.Control type="input" value={auth.address} required />
              </Form.Group>

              <Form.Group as={Col} controlId="userAptno" >
                <Form.Label>Apt, Suite, Bldg</Form.Label>
                <Form.Control type="input" value={auth.aptno} required />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="userCityState">
                <Form.Label>City, State</Form.Label>
                <Form.Control type="input" value={auth.citystate} required />
              </Form.Group>

              <Form.Group as={Col} controlId="userZipcode" >
                <Form.Label>zipcode</Form.Label>
                <Form.Control type="input" value={auth.zipcode} required />
              </Form.Group>
            </Row>
            <Row>
              <Button variant="primary" size="sm"></Button>
            </Row>
          </Form>
        </Container>
  </>
  )

  const updateProfile = (
    <>
    <h1>Account Settings</h1><br/><br/>
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <h1>Update Your Email</h1>
          <Form.Group as={Col} xs={2} controlId="updateEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={auth.email}></Form.Control>
          </Form.Group>
          </Row>
          <hr/>
          <Row>
          <h1>Update Your Password</h1>
          </Row>
          <Row>
          <Form.Group as={Col} xs={2} controlId="updateEmail">
            <Form.Label>Current Password</Form.Label>
            <Form.Control type="email" value={auth.email}></Form.Control>
          </Form.Group>
          <Form.Group as={Col} xs={2} controlId="updateEmail">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="email" value={auth.email}></Form.Control>
          </Form.Group>
          <hr/>
          <Row><h1>Delete Your Account</h1></Row>
          <Button>Delete Account</Button>
          <hr/>
          <Button>Update Account</Button>
          </Row>
        </Form>
      
    </Container>
    </>
  )

  const showPersonalProfile = () =>{
    ReactDOM.render(personalProfile, document.getElementById('infotab'))
  }

  const showUpdateProfile = () =>{
    ReactDOM.render(updateProfile, document.getElementById('infotab'))
  }

  // const ID = auth.userId === id;
  // console.log(ID);
  return (
    <>
      <div style="flex-shrink: 0;
                  width: 25rem;
                  height: 100vh;
                  background-color: rgba(0, 0, 0, .1);
                  border: solid rgba(0, 0, 0, .15);
                  border-width: 1px 0;"></div>

<div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="margin-top-10" >
        <svg></svg>
      </li>
      <li class="margin-top-10" >
        <svg></svg>
      </li>
      <li>
        <a class="nav-link link-dark ">
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark" onClick={showPersonalProfile}>
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Personal Details
        </a>
      </li>
      <li>
        <a href="#" class="nav-link link-dark" onClick={showUpdateProfile}>
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Update Account
        </a>
      </li>
    </ul>
  </div>

      <div id="infotab"> </div>
        
    </>
  );
}
