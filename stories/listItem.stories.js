import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListItem from '@components/ListItem';

/* Stories */
storiesOf('List', module)
  .add('List Item', () =>
    <ListItem onClick={action('clicked')}>
      <span>Name</span>
      <span>Remarks</span>
    </ListItem>
  ).add('Lists', () =>
    <Fragment>
      <ListItem onClick={action('clicked')}>
        <span>Name 1</span>
        <span>Remarks 1</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 2</span>
        <span>Remarks 2</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 3</span>
        <span>Remarks 3</span>
      </ListItem>
    </Fragment>
  );
