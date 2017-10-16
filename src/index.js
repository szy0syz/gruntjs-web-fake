import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/home';

ReactDOM.render(
  <div>
    <Header />
    <Home />
    <Footer />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
