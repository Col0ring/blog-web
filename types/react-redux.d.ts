import { LayoutModelState } from '@/layout/layout.model';

export * from 'react-redux';
import { Loading, HomeModelState } from 'umi';

declare module 'react-redux' {
  interface DefaultRootState {
    loading: Loading;
    home: HomeModelState;
    layout: LayoutModelState;
    [key: string]: any;
  }
}
