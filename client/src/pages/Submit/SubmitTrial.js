import React from "react";
import {
  Container,
  Card,
  Button,
  Form,
  FloatingLabel,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function SubmitTrial() {
  return (
    <Container>
      <section className='margin-top-10 margin-right-sm'>
        <h1 className='font-size-md primary-color text-center  '>
          Schedule A Medical Trial
        </h1>
        <Card className='margin-auto width-450 height-auto '>
          <p className='font-size-xsm margin-left-70 top-10 red-color'>
            All fields are required!
          </p>
          <Container fluid className='top-5'>
            <Form className='margin-top-sm font-size-xsm'>
              <Form.Group className='mb-3 form-group-control '>
                <Form.Label>Trial Title</Form.Label>
                <Form.Control type='text' placeholder='Title' />
              </Form.Group>
              <Form.Group className='mb-3 form-group-control'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as='textarea'
                  placeholder='Trial Description'
                  rows={4}
                  maxLength='400'
                />
              </Form.Group>
              <Form.Group className='mb-3 form-group-control'>
                <Form.Label>Who may participate</Form.Label>
                <Form.Control
                  as='textarea'
                  placeholder='Qualified'
                  rows={4}
                  maxLength='400'
                />
              </Form.Group>
              <Form.Group className='mb-3 form-group-control'>
                <Form.Label>Who may not participate</Form.Label>
                <Form.Control
                  as='textarea'
                  placeholder='Not Qualified'
                  rows={4}
                  maxLength='400'
                />
              </Form.Group>
              <Form.Group className='mb-3 form-group-control'>
                <Form.Label>Any Prerequisite?</Form.Label>
                <Form.Control type='text' placeholder='Not Qualified' />
              </Form.Group>
            </Form>
          </Container>
        </Card>
        <Card className='margin-auto width-450 height-auto top-10'>
          <Container fluid className=''>
            <p className='font-size-sm margin-left-57 primary-color top-10'>
              Specific Details
            </p>
            <Form className='margin-top-sm font-size-xsm'>
              <Form.Group className='mb-3 form-group-control '>
                <Form.Label>Location</Form.Label>
                <Form.Control type='text' placeholder='Trails address' />
              </Form.Group>
              <Form.Group className='mb-3 form-group-control'>
                <Form.Label>Payout</Form.Label>
                <Form.Control type='number' placeholder='50' min='0' />
              </Form.Group>

              <Form.Group className='mb-3 form-group-control'>
                <Form.Label>Trial Status</Form.Label>
                <Form.Select aria-label='Default select example'>
                  <option>Select status</option>
                  <option value='1'>Recruiting</option>
                  <option value='2'>Not Recruiting</option>
                </Form.Select>
              </Form.Group>
              <Row className='form-row'>
                <Form.Group className='mb-3'>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='11/20/2021'
                    className='form-control-width'
                    maxLength='10'
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='3/20/2022'
                    className='form-control-width'
                    maxLength='10'
                  />
                </Form.Group>
              </Row>
            </Form>
          </Container>
        </Card>
        <Card className='margin-auto width-450 height-auto top-20 padding-10'>
          <Container fluid className='margin-top-sm'>
            <Form.Group className='width-200 left-20'>
              <p className=''>
                <span>*</span> All trials must be reviewed and accepted before
                scheduling.
              </p>
              <p>
                <span>*</span> By submitting for review, I have agreed to{" "}
                <Link to='#' className='primary-color'>
                  Terms and conditions
                </Link>
                .
              </p>
            </Form.Group>
            <Form.Group className='left-20'>
              <Button
                variant='primary'
                className='card-primary-color-btn width-308'
              >
                Submit For Review
              </Button>
            </Form.Group>
          </Container>
        </Card>
      </section>
    </Container>
  );
}
