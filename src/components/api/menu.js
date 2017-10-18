import React, { Component } from 'react';

const apiList = [
  { href: '/api/grunt', label: 'grunt' },
  { href: '/api/grunt.config', label: 'grunt.config' },
  { href: '/api/grunt.event', label: 'grunt.event' },
  { href: '/api/grunt.fail', label: 'grunt.fail' },
  { href: '/api/grunt.log', label: 'grunt.log' },
  { href: '/api/grunt.option', label: 'grunt.option' },
  { href: '/api/grunt.task', label: 'grunt.task' },
  { href: '/api/grunt.template', label: 'grunt.template' },
  { href: '/api/grunt.util', label: 'grunt.util' }
];

const otherList = [
  { href: '/api/inside-tasks', label: '深入任务内幕' },
  { href: '/api/exit-codes', label: '退出码' }
];

export default class Menu extends Component {

  constructor() {
    super();
    this.state = ({
      api: [],
      other: []
    });
  }

  componentWillMount() {
    let pathname = window.location.pathname;
    let napiList = apiList.map((v) => v.href === pathname ? { ...v, className: 'active' } : v);
    let notherList = otherList.map((v) => v.href === pathname ? { ...v, className: 'active' } : v);
    this.setState({
      api: napiList,
      other: notherList
    });
  }

  handleLi = (attrs) => (
    attrs.map((v, i) => (
      <li key={i}>
        <a href={v.href} className={v.className}>{v.label}</a>
      </li>
    ))
  )

  render() {
    return (
      <div className="span3">
        <div className="well sidebar-nav">
          <ul className="nav nav-list">
            <li className="nav-header">
              <i className="icon-cog"></i>
              <span>API</span>
            </li>
            {this.handleLi(this.state.api)}
          </ul>
          <ul className="nav nav-list">
            <li className="nav-header">
              <span>其他</span>
            </li>
            {this.handleLi(this.state.other)}
          </ul>
        </div>
      </div>
    );
  }
}