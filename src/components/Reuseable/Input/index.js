import React from 'react';
import PropTypes from 'prop-types';
import StyledComponent from 'styled-components';

const Input = StyledComponent.input`
  font-size: 14px;
  margin: 8px;
  padding: 8px;
`

function BasicInput() {
  return <Input/>
}

BasicInput.propTypes = {
  
}

export default BasicInput;