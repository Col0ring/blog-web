import React from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './logo.less';
export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const LogoClassName = classnames(className, styles.logo);
  return (
    <h1 className={LogoClassName}>
      <Link to="/">
        <img
          className={styles.logoImg}
          alt="Col0ring"
          src={require('@/assets/avatar.jpg')}
        />
        <span className={styles.name}>Col0ring's Blog</span>
      </Link>
    </h1>
  );
};

export default Logo;
