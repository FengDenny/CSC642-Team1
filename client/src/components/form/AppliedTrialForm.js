import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppliedTrialForm({
  first,
  last,
  emailApply,
  setFirst,
  setLast,
  setEmailApply,
  handleApply,
  firstName,
  lastName,
  email,
}) {
  return (
    <>
      <Form>
        <Row className='form-row'>
          <Form.Group className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder={`${firstName}`}
              className='form-control-width'
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder={`${lastName}`}
              className='form-control-width'
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder={`${email}`}
            value={emailApply}
            onChange={(e) => setEmailApply(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3 form-group-control'>
          <Form.Label>
            By applying, I have read this trials {""}
            <Link to='#' className='primary-color '>
              Legal Informations
            </Link>
            {""} and{" "}
            <Link to='#' className='primary-color '>
              Legal Disclosures
            </Link>
          </Form.Label>
        </Form.Group>
        <Form.Group className='mb-3 form-group-control'>
          <Button
            variant='outline-primary'
            className='primary-color-btn'
            onClick={(e) => {
              handleApply(e);
            }}
          >
            APPLY
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
