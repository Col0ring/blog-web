import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { SpinProps } from 'antd/es/spin';

export interface LazyLoadProps extends SpinProps {
  loading?: React.ReactNode;
}

const DefaultLoading: React.FC<SpinProps> = props => {
  return <Spin tip="正在加载..." {...props}></Spin>;
};

const LazyLoad: React.FC<LazyLoadProps> = ({ children, loading, ...rest }) => {
  return (
    <Suspense fallback={loading ? loading : <DefaultLoading {...rest} />}>
      {children}
    </Suspense>
  );
};

export default LazyLoad;
