import React from 'react';
import classnames from 'classnames';
import styles from './logo.less';
export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const LogoClassName = classnames(className, styles.logo);
  return (
    <h1 className={LogoClassName}>
      <img
        className={styles.logoImg}
        alt="Col0ring"
        src={require('@/assets/avatar.jpg')}
      />
      <span className={styles.name}>Col0ring's Blog</span>
    </h1>
  );
};

export default Logo;
