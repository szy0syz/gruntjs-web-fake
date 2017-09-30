import React from 'react';
export default function () {
  return (
    <div className="well sidebar-nav">
      <div className="last-version">
        <h3>最新版本</h3>
        <ul>
          <li>
            稳定版NPM: <a href="https://www.npmjs.org/package/grunt">v1.0.1</a>
            <span>(npm)</span>
          </li>
          <li>
            稳定版Github: <a href="https://github.com/gruntjs/grunt">v1.0.1</a>
            <span>(github)</span>
          </li>
        </ul>
      </div>
      <div className="latest-news">
        <h3>最新消息</h3>
        <ul>
          <li>
            <a href="https://gruntjs.com/blog/2016-04-04-grunt-1.0.0-released">
              <span className="title">Grunt 1.0.0 released</span>
              <span className="date">April 04, 2016</span>
            </a>
          </li>
          <li>
            <a href="https://gruntjs.com/blog/2016-02-11-grunt-1.0.0-rc1-released">
              <span className="title">Grunt 1.0.0 rc1 released</span>
              <span className="date">February 11, 2016</span>
            </a>
          </li>
          <li>
            <a href="https://gruntjs.com/blog/2014-05-12-grunt-0.4.5-released">
              <span className="title">Grunt 0.4.5 released</span>
              <span className="date">May 12, 2014</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="getting-started">
        <h3>快速入门</h3>
        <p>
          <a href="/getting-started">快速入门</a>
          文档能告诉你如何在项目中使用 Grunt。当你读完了此文档，请继续阅读 <a href="/sample-gruntfile">Gruntfile案例</a>
          和 <a href="/configuring-tasks">配置任务</a>.
          </p>
      </div>
      <div className="social">
        <a href="https://github.com/gruntjs/" alt="Grunt on GitHub" className="github">
          <span className="icon-github"></span>
        </a>
        <a href="https://twitter.com/gruntjs/" alt="Grunt on Twitter" className="twitter">
          <span className="icon-twitter"></span>
        </a>
        <a href="/rss" alt="Grunt blog RSS feed" className="feed">
          <span className="icon-feed"></span>
        </a>
      </div>
    </div>
  );
}