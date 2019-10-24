import { memo } from 'react';
import styled from 'styled-components';

import { inputSharedCSS } from '@styles/inputs';

const Textarea = memo(styled.textarea`
  ${inputSharedCSS}
  min-width: 100%;
  max-width: 100%;
  resize: none;
`);

Textarea.defaultProps = {
  rows: 8
};

export default Textarea;
