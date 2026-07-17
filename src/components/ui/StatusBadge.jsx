import React from 'react';
import './ui.css';

function StatusBadge({ children, tone = 'neutral', className = '', ...props }) {
  return (
    <span className={`status-badge status-badge--${tone} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}

export default StatusBadge;
