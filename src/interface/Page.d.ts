import React from 'react';
import { IGetInitialProps, IRouteComponentProps } from 'umi';
export type PageComponent<
  T extends IRouteComponentProps = IRouteComponentProps
> = React.FC<T> & {
  getInitialProps: IGetInitialProps;
};
