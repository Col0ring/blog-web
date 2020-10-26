import React from 'react';
import styles from './app-main.less';

const AppMain: React.FC = ({ children }) => {
  return <main className={styles.appMain}>{children}</main>;
};

export default AppMain;
