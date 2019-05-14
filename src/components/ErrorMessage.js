import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Fade from '@components/Fade';


const ErrorText = styled.div`
  font-size: 0.75em;
  line-height: 1.5em;
  color: ${props => props.theme.errorColor};
  margin-top: 8px;
`;

const ErrorMessage = ({ children, show }) => (
  <Fade show={show}>
    <ErrorText>{children}</ErrorText>
  </Fade>
);

ErrorMessage.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired
};

export default ErrorMessage;
