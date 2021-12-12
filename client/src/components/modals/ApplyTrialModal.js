import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import AppliedTrialFormData from "../form/AppledTrialFormData";

export default function ApplyTrialModal(props) {
  const {
    onHide,
    setActive,
    setShowModal,
    setShowSignInModal,
    setShowClincicalModal,
  } = props;
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title className='primary-color title-modal-applied'>
          Apply For Trial
        </Modal.Title>
      </Modal.Header>

      <p className='modal-applied-p'>
        When your application gets approved, the medical company for this trial
        will contact you via email to schedule an appointment for all necessary
        tests.
      </p>
      <Modal.Body>
        <AppliedTrialFormData
          setActive={setActive}
          setShowSignInModal={setShowSignInModal}
          setShowModal={setShowModal}
          setShowClincicalModal={setShowClincicalModal}
        />
      </Modal.Body>
      <Modal>
        <Button onClick={onHide}>Close</Button>
      </Modal>
    </Modal>
  );
}
