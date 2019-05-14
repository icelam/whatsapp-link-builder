/*
 * Styled Components Theme
 */

/* Dependencies */
import { rgba } from 'polished';

/* Colors */
const colors = {
  green: '#38d09e',
  darkGreen: '#29ae81',
  white: '#ffffff',
  grey93: '#efefef',
  grey78: '#c6c6c6',
  grey60: '#999999',
  grey16: '#282828',
  black: '#000000',
  blueGrey: '#222831',
  red: '#f5222d'
};

/* Theme variables */
const themes = {
  light: {
    headerBackgroundColor: colors.green,
    headerTextColor: colors.white,
    backgroundColor: colors.white,
    mainTextColor: colors.grey16,
    secondaryTextColor: colors.grey78,
    inputBackgroundColor: colors.grey93,
    inputTextColor: colors.grey16,
    inputPlaceholderColor: colors.grey60,
    labelTextColor: colors.grey60,
    buttonBackgroundColor: colors.green,
    buttonHoverBackgroundColor: colors.darkGreen,
    buttonTextColor: colors.white,
    buttonDisabledBackgroundColor: colors.grey78,
    buttonDisabledHoverBackgroundColor: colors.grey78,
    buttonDisabledTextColor: colors.grey16,
    linkColor: colors.green,
    linkHoverColor: colors.darkGreen,
    overlayColor: rgba(colors.black, 0.5),
    highlightColor: rgba(colors.blueGrey, 0.2),
    rowHoverBackgroundColor: colors.grey93,
    errorColor: colors.red
  }
}

export default themes;
