import React from 'react';
import QueueAnim, { IProps } from 'rc-queue-anim';
import useWindow from '@/hooks/useWindow';
const SsrQueueAnim: React.FC<IProps<{}>> = ({ children, ...props }) => {
  const win = useWindow();
  return win ? <QueueAnim {...props}>{children}</QueueAnim> : <>{children}</>;
};

export default SsrQueueAnim;
