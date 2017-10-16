import React from 'react';

const Menu = (props) => (
  <div className="span3">
    <div className="well sidebar-nav">
      <ul className="nav nav-list">
        <li className="nav-header">
          <i className="icon-cog"></i>
          <span>API</span>
        </li>
        <li>
          <a href="/api/grunt" className="active">grunt</a>
        </li>
        <li>
          <a href="/api/grunt.config" className="false">grunt.config</a>
        </li>
        <li>
          <a href="/api/grunt.event" className="false">grunt.event</a>
        </li>
        <li>
          <a href="/api/grunt.fail" className="false">grunt.fail</a>
        </li>
        <li>
          <a href="/api/grunt.file" className="false">grunt.file</a>
        </li>
        <li>
          <a href="/api/grunt.log" className="false">grunt.log</a>
        </li>
        <li>
          <a href="/api/grunt.option" className="false">grunt.option</a>
        </li>
        <li>
          <a href="/api/grunt.task" className="false">grunt.task</a>
        </li>
        <li>
          <a href="/api/grunt.template" className="false">grunt.template</a>
        </li>
        <li>
          <a href="/api/grunt.util" className="false">grunt.util</a>
        </li>
      </ul>
      <ul className="nav nav-list">
        <li className="nav-header">
          <span>其他</span>
        </li>
        <li>
          <a href="/api/inside-tasks" className="false">深入任务内幕</a>
        </li>
        <li>
          <a href="/api/exit-codes" className="false">退出码</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Menu;