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
        path: '/tags',
        component: '@/pages/Tags',
      },
      {
        path: '/tags/:name',
        component: '@/pages/TagArticle',
      },
      {
        path: '/archives',
        component: '@/pages/Archives',
      },
      {
        path: '/me',
        component: '@/pages/Me',
      },
      {
        path: '*',
        component: '@/pages/NotFound',
      },
    ],
  },
];
