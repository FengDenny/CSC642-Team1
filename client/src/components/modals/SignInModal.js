import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInFormData from "../form/SignInFormData";
export default function signInModal(props) {
  const { onHide, setActive, setShowModal, setShowSignInModal } = props;
  return (
    <>
      <Modal
        {...props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='primary-color title-modal text-center margin-left-142'>
            Welcome back!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInFormData
            setActive={setActive}
            setShowModal={setShowModal}
            setShowSignInModal={setShowSignInModal}
          />
        </Modal.Body>
        <Modal>
          <Button onClick={onHide}>Close</Button>
        </Modal>
      </Modal>
    </>
  );
}
