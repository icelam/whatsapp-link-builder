import { memo } from 'react';
import styled from 'styled-components';

const Button = memo(styled.button`
  display: inline-block;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  background-color: ${props => props.theme.buttonBackgroundColor};
  color: ${props => props.theme.buttonTextColor};
  padding: 10px 60px;
  margin: 20px 0;
  font-size: 1em;
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.buttonHoverBackgroundColor};
  }

  &:disabled {
    color: ${props => props.theme.buttonDisabledTextBackgroundColor};
    background-color: ${props => props.theme.buttonDisabledBackgroundColor};

    &:hover {
      background-color: ${props => props.theme.buttonDisabledHoverBackgroundColor};
    }
  }
`);

export default Button;
