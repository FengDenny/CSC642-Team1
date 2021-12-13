import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function SignInForm({
  setActive,
  setShowModal,
  email,
  password,
  setEmail,
  setPassword,
  handleFormSubmit,
  setShowSignInModal,
  clinicalLoggedIn,
  isLoggedIn,
}) {
  return (
    <>
      <Form>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='JohnDoe@health.gov'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <Form.Control
            type='password'
            placeholder='*******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Button
            variant='outline-primary'
            className='primary-color-btn'
            onClick={(e) => {
              handleFormSubmit(e);
              // setShowSignInModal(true);
            }}
          >
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
    </>
  );
}
