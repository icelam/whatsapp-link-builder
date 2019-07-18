import React from 'react';

import { storiesOf } from '@storybook/react';

import SuccessMessage from '@components/SuccessMessage';
import ErrorMessage from '@components/ErrorMessage';

storiesOf('Messages', module)
  .add('Success Message', () =>
    <SuccessMessage show={true}>Link copied!</SuccessMessage>
  )
  .add('Error Message', () =>
    <ErrorMessage show={true}>Error message</ErrorMessage>
  );
