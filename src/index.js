import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import registerServiceWorker from './registerServiceWorker';
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';

import App from './router';

ReactDOM.render(
  <Body>
    {/* <Header />
    <App />
    <Footer /> */}
  </Body>,
  document.documentElement
);
registerServiceWorker();
