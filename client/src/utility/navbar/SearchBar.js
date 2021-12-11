import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchSelect,
  setSearchText,
} from "../../redux/actions/searchAction";

//react-router-dom
import { useNavigate } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin, faSearch);

export default function SearchBar({ value, setValue, text, setText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useSelector((state) => ({ ...state }));

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (value === "") {
      dispatch(setSearchSelect("Recruiting"));
    } else {
      dispatch(setSearchSelect(value));
    }
    if (text.length > 0) {
      dispatch(setSearchText(text));
    }

    navigate("/search");
  };

  return (
    <>
      <Form className='search-form'>
        <Form.Select
          id='values'
          aria-label='Default select example'
          className='search-select'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value='Recruiting'>Recruiting</option>
          <option value='Not Recruiting'>Not Recruiting</option>
        </Form.Select>
        <Form.Control
          placeholder='Search'
          className='search-bar'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant='primary' className='search-button'>
          <FontAwesomeIcon
            icon={faSearch}
            size='1x'
            onClick={(e) => {
              handleSubmitSearch(e);
            }}
          />
        </Button>
      </Form>
    </>
  );
}
