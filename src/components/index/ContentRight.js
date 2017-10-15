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
      <div className="grunt-preview">
        <h2>提前感受一下 Grunt 吧！</h2>
        <p>
          安装 grunt 虽然很简单，更多涉及到如何运行项目。看看下面的演示，这是为<a href="https://github.com/cowboy/jquery-tiny-pubsub">项目案例</a>运行 grunt 后的输出。
        </p>
        <pre className="terminal">
          <span className="command-prompt">grunt</span><br />
          Running "jshint:gruntfile" (jshint) task<br />
          <span className="green">&gt;&gt; </span>
          1 file lint free.<br />
          <br />
          Running "jshint:src" (jshint) task<br />
          <span className="green">&gt;&gt; </span>
          1 file lint free.<br />
          <br />
          Running "jshint:test" (jshint) task<br />
          <span className="green">&gt;&gt; </span>
          1 file lint free.<br />
          <br />
          Running "qunit:files" (qunit) task<br />
          Testing test/tiny-pubsub.html....<span className="green">OK</span><br />
          <span className="green">&gt;&gt; </span>
          4 assertions passed (23ms)<br />
          <br />
          Running "clean:files" (clean) task<br />
          Cleaning "dist"...<span className="green">OK</span><br />
          <br />
          Running "concat:dist" (concat) task<br />
          File "dist/ba-tiny-pubsub.js" created.<br />
          <br />
          Running "uglify:dist" (uglify) task<br />
          File "dist/ba-tiny-pubsub.min.js" created.<br />
          Uncompressed size: <span className="green">389</span>
          bytes.<br />
          Compressed size: <span className="green">119</span>
          bytes gzipped (<span className="green">185</span>
          bytes minified).<br />
          <br />
          <span className="green">Done, without errors.</span><br />
          <br />
          <span className="command-prompt active">
            <span className="active-prompt"></span>
          </span>
        </pre>
      </div>
      <div className="who-uses-grunt">
        <h2>谁在使用Grunt？</h2>
        <p>
          以下列出了一部分正在使用Grunt的公司或项目。 <a href="/who-uses-grunt">查看更多。</a>
        </p>
        <div>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-twitter.jpg" alt="Twitter" />
            </span>
          </a>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-jquery.jpg" alt="jQuery" />
            </span>
          </a>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-adobe.jpg" alt="Adobe" />
            </span>
          </a>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-modernizr.jpg" alt="Modernizr" />
            </span>
          </a>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-bocoup.jpg" alt="Bocoup" />
            </span>
          </a>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-fg.jpg" alt="Filament Group" />
            </span>
          </a>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-saucelabs.jpg" alt="Sauce Labs" />
            </span>
          </a>
          <a href="/who-uses-grunt" className="technology">
            <span className="logo">
              <img src="/img/logo-bitovi.jpg" alt="Bitovi" />
            </span>
          </a>
        </div>
      </div>
      <div className="how-get-started">
        <h2>如何开始使用Grunt？</h2>
        <p>
          <a href="/getting-started">快速入门</a>
          文档能告诉你如何在项目中使用 Grunt。当你读完了此文档，请继续阅读 <a href="/sample-gruntfile">Gruntfile案例</a>和 <a href="/configuring-tasks">配置任务</a>.
          </p>
      </div>
    </div>
  );
}