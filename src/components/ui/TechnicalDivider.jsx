import React from 'react';
import './ui.css';

function TechnicalDivider({ label, className = '' }) {
  return (
    <div className={`technical-divider ${className}`.trim()} aria-hidden={!label}>
      <span />
      {label && <strong>{label}</strong>}
      <span />
    </div>
  );
}

export default TechnicalDivider;
