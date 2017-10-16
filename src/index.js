import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Footer from './components/Footer';

import App from './router';

ReactDOM.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
