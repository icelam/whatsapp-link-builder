/*
 * Global base style
 */

/* Dependencies */
import { createGlobalStyle } from 'styled-components';

/* base styles */
const GlobalStyle = createGlobalStyle`
  * {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans',"PingFang TC","Lantinghei TC","Heiti TC","Apple LiGothic",微軟正黑體,"Microsoft JhengHei","Microsoft JhengHei UI","Microsoft YaHei","Microsoft YaHei UI","PMingLiU",Arial,sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    text-align: left;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.mainTextColor};
    scroll-behavior: smooth;
  }

  ::selection {
    background: ${props => props.theme.highlightColor}; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: ${props => props.theme.highlightColor}; /* Gecko Browsers */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  p {
    margin: 1em 0;
  }

  a {
    color: ${props => props.theme.linkColor};
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.linkHoverColor};
    }
  }

  #root, #app {
    height: 100%;
  }
`;

export default GlobalStyle;
