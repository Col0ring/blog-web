import React from 'react';
import { PageComponent } from '@/interfaces/Page';
import SsrQueueAnim from '@/components/SsrQueueAnim';

const Archives: PageComponent = () => {
  return <SsrQueueAnim>Filling</SsrQueueAnim>;
};

Archives.getInitialProps = async () => {
  return {};
};

export default Archives;
