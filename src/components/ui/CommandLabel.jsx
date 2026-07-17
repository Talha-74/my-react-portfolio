import React from 'react';
import './ui.css';

function CommandLabel({ children, className = '', ...props }) {
  return (
    <p className={`command-label ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

export default CommandLabel;
