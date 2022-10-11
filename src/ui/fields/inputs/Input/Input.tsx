import React from 'react';

import styles from './Input.module.scss';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean;
}

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ id, placeholder, ...props }, inputRef) => (
    <label htmlFor={id}>
      <span className={styles.label}>{placeholder}</span>
      <input className={styles.input} ref={inputRef} id={id} {...props} />
    </label>
  )
);
