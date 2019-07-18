import React from 'react';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react';

import Modal from '@components/Modal';
import ListItem from '@components/ListItem';

/* Stories */
storiesOf('Modal', module)
  .add('Modal - Text', () =>
    <Modal title="Title" closeFunc={action('clicked')} show={true}>
      <p>Hello World</p>
      <p>Bye World</p>
    </Modal>
  )
  .add('Modal - List', () =>
    <Modal title="Title" closeFunc={action('clicked')} show={true}>
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
      <ListItem onClick={action('clicked')}>
        <span>Name 4</span>
        <span>Remarks 4</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 5</span>
        <span>Remarks 5</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 6</span>
        <span>Remarks 6</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 7</span>
        <span>Remarks 7</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 8</span>
        <span>Remarks 8</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 9</span>
        <span>Remarks 9</span>
      </ListItem>
      <ListItem onClick={action('clicked')}>
        <span>Name 10</span>
        <span>Remarks 10</span>
      </ListItem>
    </Modal>
  );
