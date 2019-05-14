import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Fade from '@components/Fade';


const SuccessText = styled.div`
  font-size: 0.75em;
  line-height: 1.5em;
  color: ${props => props.theme.secondaryTextColor};
  margin-top: 8px;
`;

const SuccessMessage = (props) => {
  const { children, ...attributes } = props;

  return (
    <Fade {...attributes}>
      <SuccessText>{children}</SuccessText>
    </Fade>
  )
};

SuccessMessage.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool
};

export default SuccessMessage;
