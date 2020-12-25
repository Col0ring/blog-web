export * from 'react-redux';
import {
  Loading,
  HomeModelState,
  LayoutModelState,
  ArchivesModelState,
  TagsModelState,
} from 'umi';

declare module 'react-redux' {
  interface DefaultRootState {
    loading: Loading;
    home: HomeModelState;
    layout: LayoutModelState;
    archives: ArchivesModelState;
    tags: TagsModelState;
    [key: string]: any;
  }
}
