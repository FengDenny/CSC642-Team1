import React, { useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function CreateAccountModal(props) {
  const { onHide, fname, cname } = props;
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter ' centered>
      <Modal.Header closeButton>
        <Modal.Title className='primary-color margin-left-percent-33 '>
          {auth.isLoggedIn ? `Sorry,${fname}` : `Sorry,${cname}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {auth.isLoggedIn ? (
          <p className='modal-header-p font-weight-200 margin-left-percent-9  font-size-18 '>
            Trail Submissions are only available to clinical users.
          </p>
        ) : (
          <p className='modal-header-p font-weight-200 margin-left-percent-9  font-size-18 '>
            Applying for trials are only available to participants.
          </p>
        )}
      </Modal.Body>
      <Modal>
        <Button onClick={onHide}>Close</Button>
      </Modal>
    </Modal>
  );
}
