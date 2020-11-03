import React from 'react';
import { IGetInitialProps, IRouteComponentProps } from 'umi';
export type PageComponent<T = any> = React.FC<T & IRouteComponentProps> & {
  getInitialProps: IGetInitialProps<T>;
};
