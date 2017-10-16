import React from 'react';
import ConentLeft from '../components/home/ContentLeft';
import ContentRight from '../components/home/ContentRight';

export default function () {
  return (
    <div className="content">
      <div className="container">
        <div className="row-fluid">
          <div className="span9 page">
            <ContentRight></ContentRight>
          </div>
          <div className="span3">
            <ConentLeft></ConentLeft>
          </div>
        </div>
      </div>
    </div>
  );
}