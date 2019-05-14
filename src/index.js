import "core-js/stable";
import "regenerator-runtime/runtime";
import 'core-js/es/map';
import 'core-js/es/set';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import * as serviceWorker from '@/serviceWorker';

import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
