import React from 'react';
import './ui.css';

function LoadingFallback({ label = 'Loading interface…' }) {
  return (
    <div className="loading-fallback" role="status" aria-live="polite">
      <span />
      {label}
    </div>
  );
}

export default LoadingFallback;
