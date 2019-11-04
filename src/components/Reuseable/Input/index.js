import React from 'react';
import PropTypes from 'prop-types';
import StyledComponent from 'styled-components';
import Colors from '../../../constants/colors';

const Input = StyledComponent.input`
  border: 1px solid ${Colors.borderColor};
  border-radius: 5px;
  font-size: 14px;
  padding: 8px;
`;

function BasicInput() {
  return <Input/>;
}

BasicInput.propTypes = {
  
}

export default BasicInput;