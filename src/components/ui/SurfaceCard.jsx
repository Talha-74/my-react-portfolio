import React from 'react';
import './ui.css';

function SurfaceCard({ as: Component = 'article', children, className = '', ...props }) {
  return (
    <Component className={`surface-card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default SurfaceCard;
