import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '@components/Button';

storiesOf('Buttons', module)
  .add('Normal Button', () =>
    <Button onClick={action('clicked')}>Hello Button</Button>
  )
  .add('Disabled Button', () =>
    <Button type="submit" disabled={true} onClick={action('clicked')}>Disabled Button</Button>
  );
