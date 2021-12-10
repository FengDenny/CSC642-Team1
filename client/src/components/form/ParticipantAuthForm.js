import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ParticipantAuthForm({
  setActive,
  setShowSignInModal,
  setShowClincicalModal,
  first,
  setFirst,
  last,
  setLast,
  email,
  setEmail,
  password,
  setPassword,
  handleFormSubmit,
  passwordReveal,
  showPassword,
  setShowPassword,
  FaEye,
  FaEyeSlash,
  setShowModal,
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
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Doe'
              className='form-control-width'
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </Form.Group>
        </Row>
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
          <Form.Control
            id='password-input'
            type='password'
            placeholder='*******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            id='eye'
            className='toggle-password primary-color cursor-pointer'
            onClick={() => passwordReveal(showPassword, setShowPassword)}
          >
            {!showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>
            By signing up, I accept Participaid‘s{" "}
            <Link to='#' className='primary-color '>
              Terms and Conditions
            </Link>
          </Form.Label>
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Button
            variant='outline-primary'
            className='primary-color-btn'
            onClick={(e) => {
              handleFormSubmit(e);
              setShowModal(false);
            }}
          >
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
