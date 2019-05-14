/* dependencies */
import React, { lazy, Suspense, Fragment } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

/* States */
import { StateProvider } from '@states/context';
import { initialState } from '@states/initialState';
import { reducer } from '@states/reducers';

/* Global styles */
import GlobalStyle from '@styles/global';
import themes from '@styles/themes';

/* Cpmponents */
import Loading from '@components/Loading';

/* Routes */
import routes from '@routes';

/* Pages */
const LinkBuilder = lazy(() => import(/* webpackChunkName: 'LinkBuilder' */ '@pages/LinkBuilder'));
const LinkResult = lazy(() => import(/* webpackChunkName: 'LinkResult' */ '@pages/LinkResult'));
const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */ '@pages/NotFound'));

const App = () => (
  <div id="app">
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={themes.light}>
        <Fragment>
          <GlobalStyle />
          <Router history={createBrowserHistory()}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path={routes.home} component={LinkBuilder} />
                <Route exact path={routes.result} component={LinkResult} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </Fragment>
      </ThemeProvider>
    </StateProvider>
  </div>
);

export default App;
