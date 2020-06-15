import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '@components/Input';

const InputSymbol = styled.div`
  position: relative;

  &:after {
    content: '${props => props.symbol}';
    bottom: 10px;
    left: 14px;
    position: absolute;
  }

  input {
    padding-left: 28px;
  }
`;

const InputWithSymbol = forwardRef((props, ref) => {
  const { symbol, ...attributes } = props;

  return (
    <InputSymbol symbol={symbol}>
      <Input {...attributes} />
    </InputSymbol>
  )
});

InputWithSymbol.propTypes = {
  symbol: PropTypes.string.isRequired
};

export default InputWithSymbol;
