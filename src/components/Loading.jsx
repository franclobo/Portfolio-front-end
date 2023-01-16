import React from 'react';
import loading from './Images/loading.gif';
import './home.scss';

const Loading = () => (
  <div className="loading">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
