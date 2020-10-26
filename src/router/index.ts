import { IRoute } from 'umi';
export const routes: IRoute[] = [
  {
    path: '/',
    component: '@/layout',
    routes: [
      {
        path: '/',
        component: '@/pages/Home',
      },
      {
        path: '/article/:id',
        component: '@/pages/ArticleDetail',
      },
      {
        path: '*',
        component: '@/pages/NotFound',
      },
    ],
  },
];
