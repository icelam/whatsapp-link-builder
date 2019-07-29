import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputGroup from '@components/InputGroup';
import Label from '@components/Label';
import Input from '@components/Input';
import InputWithSymbol from '@components/InputWithSymbol';
import Textarea from '@components/Textarea';
import Select from '@components/Select';
import ErrorMessage from '@components/ErrorMessage';

storiesOf('Inputs', module)
  .add('Label', () =>
    <Label htmlFor="labelName" onClick={action('clicked')}>Label Text</Label>
  )
  .add('Textfield', () =>
    <Input
      placeholder="Type something here!"
      id="inputID"
      onChange={action('typed')}
    />
  )
  .add('Textfield - default value', () =>
    <Input
      placeholder="Type something here!"
      id="inputID"
      defaultValue="Default text"
      onChange={action('typed')}
    />
  )
  .add('Textfield with Symbol', () =>
    <InputGroup>
      <InputWithSymbol
        symbol="+"
        placeholder="Type your country code"
        id="inputID"
      />
    </InputGroup>
  )
  .add('Textfield with Symbol - default value', () =>
    <InputGroup>
      <InputWithSymbol
        symbol="+"
        placeholder="Type your country code"
        id="inputID"
        defaultValue="852"
        onChange={action('typed')}
      />
    </InputGroup>
  )
  .add('Textarea', () =>
    <Textarea
      placeholder="Type your message here"
      id="textareaID"
      onChange={action('typed')}
    />
  )
  .add('Textarea - default value', () =>
    <Textarea
      placeholder="Type your message here"
      id="textareaID"
      defaultValue="Default text"
      onChange={action('typed')}
    />
  )
  .add('Select', () =>
    <Select value="item2" defaultValue="item2" onChange={action('changed')}>
      <option value="item1">Item 1</option>
      <option value="item2">Item 2</option>
    </Select>
  )
  .add('Input Groups - Textfield', () =>
    <InputGroup>
      <Label htmlFor="labelName">Label Text</Label>
      <Input
        placeholder="Type something here!"
        id="inputID"
        onChange={action('typed')}
      />
    </InputGroup>
  ).add('Input Groups - Textfield with Symbol', () =>
    <InputGroup>
      <Label htmlFor="labelName">Label Text</Label>
      <InputWithSymbol
        symbol="+"
        placeholder="Type your country code"
        id="inputID"
        defaultValue="852"
        onChange={action('typed')}
      />
    </InputGroup>
  ).add('Input Groups - Textarea', () =>
    <InputGroup>
      <Label htmlFor="labelName">Label Text</Label>
      <Textarea
        placeholder="Type your message here"
        id="textareaID"
        onChange={action('typed')}
      />
    </InputGroup>
  )
  .add('Input Groups - Select', () =>
    <InputGroup>
      <Label htmlFor="labelName">Label Text</Label>
      <Select defaultValue="item2" onChange={action('changed')}>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
      </Select>
    </InputGroup>
  )
  .add('Input Groups - Error', () =>
    <InputGroup>
      <Label htmlFor="labelName">Label Text</Label>
      <Input
        placeholder="Type something here!"
        id="inputID"
        onChange={action('typed')}
      />
      <ErrorMessage show={true}>Error message</ErrorMessage>
    </InputGroup>
  );
