import React from 'react';
import './ui.css';

function Button({ as: Component = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Component className={`signal-button signal-button--${variant} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;

export default Button;
