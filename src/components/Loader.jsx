import React from 'react';
import './Loader.css';

const Loader = ({ message = 'Medantrik Medtech is loading…' }) => {
  return (
    <div className="mas-loader">
      <div className="mas-loader__center">
        <div className="mas-loader__logo-wrap">
          <img
            src="/images/logo/logo_single.png"
            alt="MultiAiSolution Logo"
            className="mas-loader__logo"
          />
          <div className="mas-loader__ring"></div>
        </div>
        <p className="mas-loader__text">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
