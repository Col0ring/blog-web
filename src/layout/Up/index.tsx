import React from 'react';
import { BackTop } from 'antd';
import { IconFont } from '@/components/TotalIcons';
import styles from './up.less';

const Up: React.FC = () => {
  return (
    <BackTop className={styles.up}>
      <div className={styles.icon}>
        <IconFont type="icon-huojian" />
      </div>
    </BackTop>
  );
};

export default Up;
