import { memo } from 'react';
import styled from 'styled-components';

import { inputSharedCSS } from '@styles/inputs';

const Input = memo(styled.input`
  ${inputSharedCSS}
`);

export default Input;
