import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ParticipantFormData from "../form/ParticipantFormData";

export default function ModalForm(props) {
  const {
    onHide,
    setActive,
    setShowClincicalModal,
    setShowSignInModal,
    setShowModal,
  } = props;
  return (
    <>
      <Modal
        {...props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='primary-color title-modal'>
            Welcome to Participaid
          </Modal.Title>
        </Modal.Header>

        <p className='modal-header-p'>
          To get started, sign up for a participants account
        </p>

        <Modal.Body>
          <ParticipantFormData
            setActive={setActive}
            setShowClincicalModal={setShowClincicalModal}
            setShowSignInModal={setShowSignInModal}
            setShowModal={setShowModal}
          />
        </Modal.Body>
        <Modal>
          <Button onClick={onHide}>Close</Button>
        </Modal>
      </Modal>
    </>
  );
}
