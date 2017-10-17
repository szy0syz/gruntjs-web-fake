import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Router from '../router';

export default class App extends Component {

  constructor() {
    super();
    this.state = { css: 'page-index' };
  }

  // 每次切换页面都会重新挂载一次app组件哦！~
  componentWillMount() {
    let pathname = window.location.pathname;
    if (pathname.indexOf('/api') > -1) {
      this.setState({css: this.handleCss('api')});
    }
    if (pathname.indexOf('/docs') > -1) {
      this.setState({css: this.handleCss('docs')});
    }
    if (pathname.indexOf('/plugins') > -1) {
      this.setState({css: this.handleCss('plugins')});
    }
    if (pathname.indexOf('/started') > -1) {
      this.setState({css: this.handleCss('started')});
    }
  };

  handleCss = (pathname) => {
    switch (pathname) {
      case 'api':
        return 'page-api page-secondary';
      case 'docs':
      case 'started':
        return 'page-docs page-secondary';
      case 'plugins':
        return 'page-plugins page-secondary';
      default:
        return 'page-index';
    }
  }

  render() {
    return (
      <div className={this.state.css}>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
};