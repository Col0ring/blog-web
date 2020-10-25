import React from 'react';
import { useLocation } from 'umi';
import QueueAnim from 'rc-queue-anim';
import styles from './app-main.less';

const AppMain: React.FC = ({ children }) => {
  const location = useLocation();
  // 进出场动画
  return (
    <main className={styles.appMain}>
      <QueueAnim
        duration={1000}
        key={location.pathname}
        type={['bottom', 'top']}
        ease={['easeOutQuart', 'easeInOutQuart']}
      >
        <div key={location.pathname}>{children}</div>
      </QueueAnim>
    </main>
  );
};

export default AppMain;
