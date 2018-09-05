import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

// assets Bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// assets javascript
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/jquery/dist/jquery.slim.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
