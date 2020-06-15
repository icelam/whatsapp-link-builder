import { configure, addDecorator, addParameters } from '@storybook/react';
import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

import '@styles/font-face.css';
import GlobalStyle from '@styles/global';
import uiThemes from '@styles/themes';

import theme from './theme';

// Add padding to story display area
const StoryWrapper = styled.div`
  padding: 20px;
`;

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: theme,
  },
});

addDecorator((story) => (
  <ThemeProvider theme={uiThemes.light}>
    <Fragment>
      <GlobalStyle/>
      <StoryWrapper>
      {story()}
      </StoryWrapper>
    </Fragment>
  </ThemeProvider>
));

configure(loadStories, module);
