import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ParticipantAuthForm from "../form/ParticipantAuthForm";

export default function ModalForm(props) {
  const { onHide, setActive, setShowClincicalModal, setShowSignInModal } =
    props;
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
          <ParticipantAuthForm
            setActive={setActive}
            setShowClincicalModal={setShowClincicalModal}
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
