import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import Loading from '@components/Loading';

/* Fake Container */
const FullPageDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
  box-sizing: border-box;
`;

/* Stories */
storiesOf('Loading', module)
  .add('Loading Screen', () =>
    <FullPageDiv>
      <Loading />
    </FullPageDiv>
  );
