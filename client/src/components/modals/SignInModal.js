import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInFormData from "../form/SignInFormData";
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
          <SignInFormData setActive={setActive} setShowModal={setShowModal} />
        </Modal.Body>
        <Modal>
          <Button onClick={onHide}>Close</Button>
        </Modal>
      </Modal>
    </>
  );
}
