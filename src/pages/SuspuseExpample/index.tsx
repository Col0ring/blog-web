import React from 'react';
import { ErrorBoundaryWrapper } from '@/components/ErrorBoundary';
const feachData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
const getMessage = () => {
  let msg = '';
  let e: any = null;
  let status = 'pending';
  const promise = feachData().then(
    res => {
      status = 'success';
      msg = res as string;
    },
    err => {
      status = 'fail';
      msg = 'error';
      e = err;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw promise;
      } else if (status === 'fail') {
        throw e;
      }
      return msg;
    },
  };
};

const resource = getMessage();

const Me: React.FC<{ me: string }> = ({ me }) => {
  const msg = resource.read();
  return <>{me}</>;
};

export default ErrorBoundaryWrapper<{ me: string }>({
  showError: true,
})(Me);
