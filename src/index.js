import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './components/index/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
