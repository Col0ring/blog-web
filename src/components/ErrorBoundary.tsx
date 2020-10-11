import { Alert } from 'antd';
import React from 'react';
export interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  showError?: boolean;
}

const initialState = {
  hasError: false,
  error: null as Error | null,
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  typeof initialState
> {
  readonly state: Readonly<typeof initialState> = initialState;
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    const { fallback, showError, children } = this.props;
    const { error, hasError } = this.state;
    const message = showError ? error?.message : '出错啦！';
    const description = showError
      ? error?.stack
      : '页面加载好像出现了点错误，请刷新页面重试';
    if (hasError) {
      return fallback ? (
        fallback
      ) : (
        <Alert
          message={message}
          description={description}
          type="error"
          showIcon
        />
      );
    }
    return children;
  }
}
export function ErrorBoundaryWrapper<P = {}>(props: ErrorBoundaryProps = {}) {
  return (WrapperedComponent: React.ComponentType<P>) => {
    class ErrorBoundary extends React.Component<P, typeof initialState> {
      readonly state: Readonly<typeof initialState> = initialState;
      static getDerivedStateFromError(error: Error) {
        return {
          hasError: true,
          error,
        };
      }
      render() {
        const { fallback, showError } = props;
        const { children, ...rest } = this.props;
        const { error, hasError } = this.state;
        const message = showError ? error?.message : '出错啦！';
        const description = showError
          ? error?.stack
          : '页面加载好像出现了点错误，请刷新页面重试';
        if (hasError) {
          return fallback ? (
            fallback
          ) : (
            <Alert
              message={message}
              description={description}
              type="error"
              showIcon
            />
          );
        }
        return (
          <WrapperedComponent {...(rest as P)}>{children}</WrapperedComponent>
        );
      }
    }
    return ErrorBoundary;
  };
}
