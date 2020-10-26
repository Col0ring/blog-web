import React from 'react';
import { useLocation } from 'umi';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import styles from './app-main.less';

const AppMain: React.FC = ({ children }) => {
  const location = useLocation();
  // 进出场动画
  return (
    <main className={styles.appMain}>
      <SsrQueueAnim
        duration={1000}
        key={location.pathname}
        type={['bottom', 'top']}
        ease={['easeOutQuart', 'easeInOutQuart']}
      >
        <div key={location.pathname}>{children}</div>
      </SsrQueueAnim>
    </main>
  );
};

export default AppMain;
