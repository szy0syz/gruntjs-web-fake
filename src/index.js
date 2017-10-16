import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

ReactDOM.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
