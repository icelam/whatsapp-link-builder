import { memo } from 'react';
import styled from 'styled-components';

const Label = memo(styled.label`
  font-size: 0.75em;
  line-height: 1.5em;
  color: ${props => props.theme.labelTextColor};
  margin: 0 0 8px 0;
  cursor: pointer;
  display: inline-block;
`);

export default Label;
