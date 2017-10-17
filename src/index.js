import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();
