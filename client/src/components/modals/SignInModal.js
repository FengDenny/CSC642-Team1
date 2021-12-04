import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function signInModal(props) {
  const { onHide, setActive, setShowModal } = props;
  return (
    <>
      <Modal
        {...props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='primary-color title-modal'>
            Welcome back to Participaid!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3 form-group-control'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='JohnDoe@health.gov' />
            </Form.Group>
            <Form.Group className='mb-3 form-group-control'>
              <Form.Label>Password</Form.Label>
              <Button
                onClick={() => {
                  //   setActive("participant");
                  //   setShowModal(true);
                }}
                className='button-link left120'
              >
                Forgot Password?
              </Button>
              <Form.Control type='password' placeholder='*******' />
            </Form.Group>
            <Form.Group className='mb-3 form-group-control'>
              <Button variant='outline-primary' className='primary-color-btn'>
                SIGN IN
              </Button>
            </Form.Group>
            <Form.Group className='mb-3 form-group-control form-group-control-last top5'>
              <Form.Label>Need an account?</Form.Label>
              <Button
                onClick={() => {
                  setActive("participant");
                  setShowModal(true);
                }}
                className='button-link '
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
    </>
  );
}
