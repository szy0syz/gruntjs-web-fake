import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-inverse">
        <div className="navbar-inner">
          <div className="container">
            <a href="/" className="brand">
              <img src="./img/grunt-logo.png" alt="logo" />
            </a>
            <div className="nav-collapse collapse">
              <ul className="nav">
                <li>
                  <a href="/started">
                    <i className="icon-arrow-right"></i>
                    <span>快速入门</span>
                  </a>
                </li>
                <li>
                  <a href="/plugins">
                    <i className="icon-power-cord"></i>
                    <span>插件列表</span>
                  </a>
                </li>
                <li>
                  <a href="/docs">
                    <i className="icon-document-alt-stroke"></i>
                    <span>中文文档</span>
                  </a>
                </li>
                <li>
                  <a href="/api/grunt">
                    <i className="icon-cog"></i>
                    <span>API</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}