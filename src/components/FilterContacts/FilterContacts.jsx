import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {P,Input} from './FilterContacts.styled'
export class FilterContacts extends Component {
  
    render() {
    const { filter,onChange } = this.props;
    
    return (
      <>
        <P>Find contacts by name</P>
        <Input
          value={filter}
          type="text"
          name="filter"
          onChange={onChange}
        />
      </>
    );
  }
}

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}  