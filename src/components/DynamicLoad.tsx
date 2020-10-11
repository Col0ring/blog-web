import React from 'react';
import { dynamic } from 'umi';
import { Spin } from 'antd';
import { SpinProps } from 'antd/es/spin';
import { ErrorBoundaryProps, ErrorBoundary } from '@/components/ErrorBoundary';

export interface LazyLoadProps extends SpinProps {
  loading?: React.ReactNode;
}
const DefaultLoading: React.FC<SpinProps> = props => {
  return <Spin tip="正在加载..." {...props}></Spin>;
};

export interface DynamicLoadProps {
  path: string;
}

export const DynamicLoad: React.FC<DynamicLoadProps> = ({ path }) => {
  const DynamicComponent = dynamic({
    loader: async function() {
      try {
        const { default: DefaultComponent } = await import(`@/${path}`);
        return DefaultComponent;
      } catch (error) {
        return () => {
          throw error;
        };
      }
    },
    loading: () => <DefaultLoading />,
  });
  return <DynamicComponent />;
};

export function DynamicLoadWrapper<P = {}>({
  path,
  ...rest
}: DynamicLoadProps & ErrorBoundaryProps) {
  const DynamicLoad: React.FC<P> = props => {
    const DynamicComponent = dynamic({
      loader: async function() {
        try {
          const { default: DefaultComponent } = await import(`@/${path}`);
          return DefaultComponent;
        } catch (error) {
          return () => {
            throw error;
          };
        }
      },
      loading: () => <DefaultLoading />,
    });
    return (
      <ErrorBoundary {...rest}>
        <DynamicComponent {...props} />
      </ErrorBoundary>
    );
  };
  return DynamicLoad;
}
