import React, { useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ClinicalAuthModal(props) {
  const { onHide, setActive, setShowModal, setShowSignInModal } = props;
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title className='primary-color title-modal'>
          Welcome to Participaid
        </Modal.Title>
      </Modal.Header>

      <p className='modal-header-p'>
        To get started, sign up for a clinical account
      </p>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3 form-group-control'>
            <Form.Label>Company's Name</Form.Label>
            <Form.Control type='text' placeholder='Participaid' />
          </Form.Group>
          <Form.Group className='mb-3 form-group-control'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Participaid@hr.com' />
          </Form.Group>
          <Form.Group className='mb-3 form-group-control'>
            <Form.Label>Password</Form.Label>

            <Form.Control type='password' placeholder='*********' />
          </Form.Group>
          <Form.Group className='mb-3 form-group-control'>
            <Form.Label>
              By signing up, I accept Participaid‘s{" "}
              <Link to='/tos'>Terms and Conditions</Link>
            </Form.Label>
          </Form.Group>
          <Form.Group className='mb-3 form-group-control'>
            <Button variant='outline-primary' className='primary-color-btn'>
              SIGN UP, IT'S FREE
            </Button>
          </Form.Group>
          <Form.Group className='mb-3 form-group-control'>
            <Form.Label>Already have an account?</Form.Label>
            <Button
              onClick={() => {
                setActive("signin");
                setShowSignInModal(true);
              }}
              className='button-link'
            >
              Sign in
            </Button>
          </Form.Group>
          <Form.Group className='mb-3 form-group-control form-group-control-last'>
            <Form.Label>Need a participants account?</Form.Label>
            <Button
              onClick={() => {
                setActive("participant");
                setShowModal(true);
              }}
              className='button-link'
            >
              Sign Up Free
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal>
        <Button onClick={onHide}>Close</Button>
      </Modal>
    </Modal>
  );
}
