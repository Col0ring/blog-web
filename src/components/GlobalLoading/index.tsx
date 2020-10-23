import React from 'react';
import { Spin } from 'antd';
import styles from './loading.less';
interface GlobalLoadingProps {
  tip?: string;
}

const GlobalLoading: React.FC<GlobalLoadingProps> = ({
  tip = '正在努力加载...',
}) => {
  return (
    <div className={styles.loading}>
      <Spin size="large" tip={tip}></Spin>;
    </div>
  );
};

export default GlobalLoading;
