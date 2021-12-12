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
  setShowClincicalModal,
  nameError,
  emailError,
  passwordError,
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
            maxLength='40'
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <Form.Label className='red-color top5'>{nameError}</Form.Label>
          )}
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Participaid@hr.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <Form.Label className='red-color top5'>{emailError}</Form.Label>
          )}
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Password</Form.Label>

          <Form.Control
            id='password-input'
            type='password'
            placeholder='*********'
            maxLength='21'
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
          {passwordError && (
            <Form.Label className='red-color top5'>{passwordError}</Form.Label>
          )}
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
            type='submit'
            disabled={
              nameError ||
              emailError ||
              passwordError ||
              !name ||
              !email ||
              !password
            }
            variant='outline-primary'
            className='primary-color-btn'
            onClick={(e) => {
              handleFormSubmit(e);
              setShowClincicalModal(false);
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
          <Form.Label>Need a participants account?</Form.Label>
          <Button
            type='submit'
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
