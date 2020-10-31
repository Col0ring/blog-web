import React from 'react';
import { useLocation } from 'umi';
import QueueAnim, { IProps } from 'rc-queue-anim';
import useWindow from '@/hooks/useWindow';
const SsrQueueAnim: React.FC<IProps<{}> & {
  id?: string;
}> = ({ children, id, ...props }) => {
  const win = useWindow();
  const location = useLocation();

  return win ? (
    <QueueAnim
      duration={1500}
      type={['bottom', 'top']}
      ease={['easeOutQuart', 'easeInOutQuart']}
      {...props}
    >
      <div key={id || location.pathname}>{children}</div>
    </QueueAnim>
  ) : (
    <>{children}</>
  );
};

export default SsrQueueAnim;
