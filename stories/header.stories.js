import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from '@components/Header';

storiesOf('Navigations', module)
  .add('Header', () =>
    <Header />
  );
