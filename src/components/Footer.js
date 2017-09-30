import React from 'react';
export default function () {
  return (
    <div className="grunt-footer">
      <div className="inner">
        <div className="container">
          <ul className="pull-left">
            <li>Grunt development is sponsored by <a href="http://bocoup.com/" alt="Bocoup">Bocoup</a></li>
            <li>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
            <li>
              Grunt中文文档由<a href="http://www.bootcss.com/" alt="Bootstrap中文网">Bootstrap中文网</a>
              整理
            </li>
          </ul>
          <ul className="pull-right">
            <li><a href="/upgrading-from-0.3-to-0.4">升级指南</a></li>
            <li><a href="/contributing">贡献</a></li>
            <li className="social">
              <a href="https://github.com/gruntjs/" alt="Grunt on GitHub">
                <span className="icon-github"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}