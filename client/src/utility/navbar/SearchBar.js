import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin, faSearch);

export default function SearchBar() {
  return (
    <>
      <Form className='search-form'>
        <Form.Select
          aria-label='Default select example'
          className='search-select'
        >
          {/* will map this after we have data */}
          <option>Open</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
        </Form.Select>
        <Form.Control placeholder='Search' className='search-bar' type='text' />
        <Button variant='primary' className='search-button'>
          <FontAwesomeIcon icon={faSearch} size='1x' />
        </Button>
      </Form>
    </>
  );
}
