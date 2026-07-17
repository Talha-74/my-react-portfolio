import React from 'react';
import './ui.css';

function TextLink({ children, className = '', ...props }) {
  return (
    <a className={`text-link ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}

export default TextLink;
