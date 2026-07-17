import React from 'react';
import './ui.css';

function PageContainer({ as: Component = 'section', children, className = '', size = 'lg', ...props }) {
  return (
    <Component className={`page-container page-container--${size} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default PageContainer;
