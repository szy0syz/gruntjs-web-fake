import React from 'react';
export default function () {
  return (
    <div className="navbar navbar-inverse">
      <div className="navbar-inner">
        <div className="container">
          <a href="/" className="brand">
            <img src="./img/grunt-logo.png" alt="logo" />
          </a>
          <div className="nav-collapse collapse">
            <ul className="nav">
              <li>
                <a href="/getting-started">
                  <i className="icon-arrow-right"></i>
                  <span>快速入门</span>
                </a>
              </li>
              <li>
                <a href="/getting-started">
                  <i className="icon-power-cord"></i>
                  <span>插件列表</span>
                </a>
              </li>
              <li>
                <a href="/getting-started">
                  <i className="icon-document-alt-stroke"></i>
                  <span>中文文档</span>
                </a>
              </li>
              <li>
                <a href="/getting-started">
                  <i className="icon-cog"></i>
                  <span>API</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}