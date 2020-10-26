import React from 'react';
import { IGetInitialProps, IRouteComponentProps } from 'umi';
export type PageComponent<T = {}> = React.FC<T & IRouteComponentProps> & {
  getInitialProps: IGetInitialProps<T>;
};
