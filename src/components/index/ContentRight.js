import React from 'react';
export default function () {
  return (
    <div className="hero-unit">
      <div className="home-header">
        <div className="title-header">
          <span className="grunt-name">Grunt</span>
          <span className="tag-line">JavaScript 世界的构建工具</span>
        </div>
      </div>
      <div className="why left">
        <h2>为何要用构建工具？</h2>
        <p>
          一句话：自动化。对于需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。当你在 <a href="/sample-gruntfile">Gruntfile</a>文件正确配置好了任务，任务运行器就会自动帮你或你的小组完成大部分无聊的工作。
        </p>
      </div>
      <div className="why right">
        <h2>为什么要使用Grunt？</h2>
        <p>
          Grunt生态系统非常庞大，并且一直在增长。由于拥有数量庞大的插件可供选择，因此，你可以利用Grunt自动完成任何事，并且花费最少的代价。如果找不到你所需要的插件，那就自己动手创造一个Grunt插件，然后将其发布到npm上吧。先看看<a href="/getting-started">入门文档</a>吧。
        </p>
      </div>
      <div className="technology">
        <h2>可用的Grunt插件</h2>
        <p>
          你所需要的大多数task都已经作为Grunt插件被开发了出来，并且每天都有更多的插件诞生。<a href="/plugins">插件列表</a>页面列出了完整的清单。下面给出几个你可能听说过的插件：
        </p>
        <div>
          <a href="https://www.npmjs.com/package/grunt-contrib-coffee" className="technology">
            <span className="logo">
              <img src="/img/logo-coffeescript.jpg" alt="CoffeeScript" />
            </span>
          </a>
          <a href="https://www.npmjs.com/package/grunt-contrib-handlebars" className="technology">
            <span className="logo">
              <img src="/img/logo-handlebars.jpg" alt="Handlebars" />
            </span>
          </a>
          <a href="https://www.npmjs.com/package/grunt-contrib-jade" className="technology">
            <span className="logo">
              <img src="/img/logo-jade.jpg" alt="Jade" />
            </span>
          </a>
          <a href="https://www.npmjs.com/package/grunt-contrib-jshint" className="technology">
            <span className="logo">
              <img src="/img/logo-jshint.jpg" alt="JSHint" />
            </span>
          </a>
          <a href="https://www.npmjs.com/package/grunt-contrib-less" className="technology">
            <span className="logo">
              <img src="/img/logo-less.jpg" alt="Less" />
            </span>
          </a>
          <a href="https://www.npmjs.com/package/grunt-contrib-requirejs" className="technology">
            <span className="logo">
              <img src="/img/logo-requirejs.jpg" alt="Require.js" />
            </span>
          </a>
          <a href="https://www.npmjs.com/package/grunt-contrib-sass" className="technology">
            <span className="logo">
              <img src="/img/logo-sass.jpg" alt="Sass" />
            </span>
          </a>
          <a href="https://www.npmjs.com/package/grunt-contrib-stylus" className="technology">
            <span className="logo">
              <img src="/img/logo-sylus.jpg" alt="Stylus" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}