import React from 'react';
import CommandLabel from './CommandLabel';
import './ui.css';

function SectionHeader({ eyebrow, title, children, className = '' }) {
  return (
    <header className={`section-header ${className}`.trim()}>
      {eyebrow && <CommandLabel>{eyebrow}</CommandLabel>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </header>
  );
}

export default SectionHeader;
