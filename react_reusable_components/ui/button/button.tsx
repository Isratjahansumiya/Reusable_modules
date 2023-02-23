import React, { ReactNode } from 'react';
import classes from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export function Button({ children, color = 'default', size = 'small', onClick }: ButtonProps) {
  const buttonClasses = [
    classes.Button,
    classes[color],
    classes[size],
  ].join(' ');
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
