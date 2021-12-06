import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ParticipantAuthForm({
  setActive,
  setShowSignInModal,
  setShowClincicalModal,
}) {
  return (
    <>
      <Form>
        <Row className='form-row'>
          <Form.Group className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='John'
              className='form-control-width'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Doe'
              className='form-control-width'
            />
          </Form.Group>
        </Row>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='JohnDoe@health.gov' />
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='*******' />
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
          <Form.Label>Need a clinical account?</Form.Label>
          <Button
            onClick={() => {
              setActive("clinical");
              setShowClincicalModal(true);
            }}
            className='button-link'
          >
            Sign Up Free
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
