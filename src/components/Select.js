import styled from 'styled-components';

import { inputSharedCSS } from '@styles/inputs';

import selectArrow from '@images/select-arrow.svg';

const Select = styled.select`
  ${inputSharedCSS}
  appearance: none;
  background: ${props => props.theme.inputBackgroundColor} url(${selectArrow}) 100% / 44px no-repeat;
  padding-right: 44px;
`;

export default Select;
