import React, { useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClinicalFormData from "../form/ClinicalFormData";
export default function ClinicalAuthModal(props) {
  const { onHide, setActive, setShowModal, setShowSignInModal } = props;
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title className='primary-color title-modal'>
          Welcome to Participaid
        </Modal.Title>
      </Modal.Header>

      <p className='modal-header-p'>
        To get started, sign up for a clinical account
      </p>
      <Modal.Body>
        <ClinicalFormData
          setActive={setActive}
          setShowSignInModal={setShowSignInModal}
          setShowModal={setShowModal}
        />
      </Modal.Body>
      <Modal>
        <Button onClick={onHide}>Close</Button>
      </Modal>
    </Modal>
  );
}
