import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

export default function ModalForm(props) {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title className='primary-color title-modal'>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <p className='modal-header-p'>
        To get started, sign up for a {props.accountInfo} account
      </p>
      <Modal.Body>
        <Form>
          {props.participants ? (
            <div>
              <Row className='form-row'>
                <Form.Group className='mb-3'>
                  <Form.Label>{props.labelOne}</Form.Label>
                  <Form.Control
                    type={props.typeOne}
                    placeholder={props.placeholderOne}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>{props.labelTwo}</Form.Label>
                  <Form.Control
                    type={props.typeTwo}
                    placeholder={props.placeholderTwo}
                  />
                </Form.Group>
              </Row>
            </div>
          ) : (
            <Form.Group className='mb-3'>
              <Form.Label>{props.labelOne}</Form.Label>
              <Form.Control
                type={props.typeOne}
                placeholder={props.placeholderOne}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal>
        <Button onClick={props.onHide}>Close</Button>
      </Modal>
    </Modal>
  );
}
