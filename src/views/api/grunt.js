import React from 'react';

export default () => (
  <div className="content">
    <div className="container grunt.config">
      <div className="row-fluid">
        <div className="span9 page">
          <div className="hero-unit">
            <h1>
              <a className="anchor" href="#grunt" name="grunt">grunt</a>
            </h1>
            <p>
              Grunt通过
                            <code>grunt</code> 对象暴露所有方法和属性，并将此对象赋予
                            <code>module.exports</code> 函数，这些方法和属性都将传递到你的
                            <a href="/getting-started">Gruntfile</a>
              、Grunt插件或者
                            <a href="/creating-tasks">task文件</a>
              中。
                        </p>
            <p>
              以下所有的方法几乎都是在别处定义的，但是为了方便使用，也在
                            <code>grunt</code> 对象中做了定义。详细的解释和案例请参阅各个api单独的文档。
                        </p>
            <h2>
              <a className="anchor" href="#config" name="config">Config</a>
            </h2>
            <h3>
              <a className="anchor" href="#grunt.initconfig" name="grunt.initconfig">grunt.initConfig</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.config#grunt.config.init">grunt.config.init</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h2>
              <a className="anchor" href="#task" name="task">创建task</a>
            </h2>
            <h3>
              <a className="anchor" href="#grunt.registertask" name="grunt.registertask">grunt.registerTask</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.task#grunt.task.registertask">grunt.task.registerTask</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h3>
              <a className="anchor" href="#grunt.registermultitask" name="grunt.registermultitask">grunt.registerMultiTask</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.task#grunt.task.registermultitask">grunt.task.registerMultiTask</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h3>
              <a className="anchor" href="#grunt.renametask" name="grunt.renametask">grunt.renameTask</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.task#grunt.task.renametask">grunt.task.renameTask</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h2>
              <a className="anchor" href="#loading-externally-defined-tasks" name="loading-externally-defined-tasks">Loading Externally-Defined Tasks</a>
            </h2>
            <h3>
              <a className="anchor" href="#grunt.loadtasks" name="grunt.loadtasks">grunt.loadTasks</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.task#grunt.task.loadtasks">grunt.task.loadTasks</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h3>
              <a className="anchor" href="#grunt.loadnpmtasks" name="grunt.loadnpmtasks">grunt.loadNpmTasks</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.task#grunt.task.loadnpmtasks">grunt.task.loadNpmTasks</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h2>警告和致命错误</h2>
            <h3>
              <a className="anchor" href="#grunt.warn" name="grunt.warn">grunt.warn</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.fail#grunt.fail.warn">grunt.fail.warn</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h3>
              <a className="anchor" href="#grunt.fatal" name="grunt.fatal">grunt.fatal</a>
            </h3>
            <p>
              <em>
                此方法是
                                <a href="/grunt.fail#grunt.fail.fatal">grunt.fail.fatal</a>
                方法的别名（alias）。
                            </em>
            </p>
            <h2>命令行参数</h2>
            <h3>
              <a className="anchor" href="#grunt.option" name="grunt.option">grunt.option</a>
            </h3>
            <p>
              检索命令行参数的值，例如
                            <code>debug</code> 。注意对于每个命令行参数，都可以做相反的测试，例如
                            <code>no-debug</code> 。
                        </p>
            <pre>
              <code className="lang-javascript">grunt.option(optionName)</code>
            </pre>
            <h2>杂项</h2>
            <h3>
              <a className="anchor" href="#grunt.package" name="grunt.package">grunt.package</a>
            </h3>
            <p>
              <code>package.json</code> 中存储的元数据，其类型是对象。
                        </p>
            <pre>
              <code className="lang-javascript">grunt.package</code>
            </pre>
            <h3>
              <a className="anchor" href="#grunt.version" name="grunt.version">grunt.version</a>
            </h3>
            <p>
              当前 Grunt 的版本，类型是字符串。它仅仅是
                            <code>grunt.package.version</code> 属性的缩写。
                        </p>
            <pre>
              <code className="lang-javascript">grunt.version</code>
            </pre>
            <div className="end-link">
              Found an error in the documentation?
                            <a href='https://github.com/gruntjs/grunt-docs/issues'>File an issue</a>
              .
                        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);