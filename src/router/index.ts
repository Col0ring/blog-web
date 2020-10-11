import { IRoute } from 'umi';
export const routes: IRoute[] = [
  {
    path: '/',
    component: '@/layout',
    exact: true,
  },
  {
    path: '*',
    component: '@/pages/index',
  },
];
