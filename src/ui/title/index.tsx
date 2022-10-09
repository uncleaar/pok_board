import React from 'react';

import styles from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }: TitleProps) => (
  <div className={styles.title}>{children}</div>
);
