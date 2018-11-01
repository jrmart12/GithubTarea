import React from 'react'
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';

import PropTypes from 'prop-types';


const Search = ({ onSubmitUsername }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    if (onSubmitUsername && username) {
      onSubmitUsername(username);
    }
  };

    return (
      <Form inline onSubmit={handleSubmit}>
        <FormGroup controlId="formInlineEmail">
          <FormControl type="text" name="username" placeholder="Enter username" />
        </FormGroup>{' '}
        <Button type="submit">Add</Button>
      </Form>
    );
  };
Search.propTypes = {
  fetchUser: PropTypes.func
};
export default Search;