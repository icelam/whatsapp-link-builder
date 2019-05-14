/*
 * Common styles for inputs (e.g. input[type="text"], select, textarea)
 */

/* Dependencies */
import { css } from 'styled-components';

/* Common styles */
export const inputSharedCSS = css`
  background-color: ${props => props.theme.inputBackgroundColor};
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: none;
  padding: 10px 14px;
  font-family: inherit;
  font-size: 1em;
  line-height: 1.5em;
  color: ${props => props.theme.inputTextColor};
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:read-only {
    background-color: ${props => props.theme.inputBackgroundColor};
    border: none;
    color: ${props => props.theme.inputTextColor};
    /* cursor: pointer; */
  }

  /* Placeholder */
  &::placeholder {
    color: ${props => props.theme.inputPlaceholderColor};
  }

  &::-webkit-input-placeholder {
    color: ${props => props.theme.inputPlaceholderColor};
  }

  &::-moz-placeholder {
    color: ${props => props.theme.inputPlaceholderColor};
  }

  &:-moz-placeholder {
    color: ${props => props.theme.inputPlaceholderColor};
  }

  &:-ms-input-placeholder {
    color: ${props => props.theme.inputPlaceholderColor};
  }

  &::-ms-input-placeholder {
    color: ${props => props.theme.inputPlaceholderColor};
  }

  /* Auto complete styles */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active  {
    background-clip: content-box !important;
    -webkit-box-shadow: 0 0 0 50px ${props => props.theme.inputBackgroundColor} inset !important;
    -webkit-text-fill-color: ${props => props.theme.inputTextColor} !important;
  }
`;
