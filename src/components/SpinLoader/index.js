import React, { Component } from 'react';
import PropTypes from 'prop-types';
import loader from "../../assets/images/loader.svg";
import './index.css';

class SpinLoader extends Component {
  render() {
    const { verticalCenter } = this.props;
    return (
      <div className={`loader${verticalCenter ? ' spin-loader-vertical-center' : ''}`}>
        <img src={loader} alt="loader" />
      </div>
    );
  }
}

// propTypes.
SpinLoader.propTypes = {
  verticalCenter: PropTypes.bool,
}

export default SpinLoader;
