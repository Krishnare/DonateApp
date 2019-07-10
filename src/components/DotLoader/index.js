import React, { Component } from 'react';
import './index.css';

class DotLoader extends Component {
  render() {
    return (
      <div className="loading-dots">
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    );
  }
}

export default DotLoader;
