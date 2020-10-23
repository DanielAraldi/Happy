import React from 'react';

import loadingImg from '../images/loading-page.gif';

import '../styles/components/loading.css';

export default function Loading() {
  return (
    <div className="loading-page">
      <img src={loadingImg} alt="Loading..." />
      <h3>Finding Happy...</h3>
    </div>
  )
}