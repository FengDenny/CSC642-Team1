import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ClinicalAuthForm({
  setActive,
  setShowSignInModal,
  setShowModal,
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  handleFormSubmit,
  passwordReveal,
  showPassword,
  setShowPassword,
  FaEye,
  FaEyeSlash,
}) {
  return (
    <>
      <Form>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Company's Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Participaid'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Participaid@hr.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Password</Form.Label>

          <Form.Control
            id='password-input'
            type='password'
            placeholder='*********'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            id='eye'
            className='show primary-color'
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
            onClick={(e) => handleFormSubmit(e)}
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
    </>
  );
}
