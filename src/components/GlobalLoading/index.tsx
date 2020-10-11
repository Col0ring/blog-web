import React from 'react';
import { Spin } from 'antd';
import styles from './loading.less';
export default () => {
  return (
    <div className={styles.loading}>
      <Spin size="large" tip="加载中..."></Spin>;
    </div>
  );
};
