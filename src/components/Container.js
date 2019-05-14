import styled from 'styled-components';

import { breakpoints } from '@styles/media';

const Container = styled.div`
  max-width: ${breakpoints.md}px;
  width: 100%;
  margin: auto;
  padding: 0 5%;
  box-sizing: border-box;
`;

export default Container;
