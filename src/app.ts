import { matchRoutes, RouteConfig } from 'react-router-config';
import { configResponsive } from 'ahooks';
import { routes } from './router';
// 配置断点
configResponsive({
  xs: 427,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
});
export const ssr = {
  beforeRenderServer: async ({ context }: any) => {
    const { path } = context as {
      path: string;
      status: number;
    };
    const matchedRoutes = matchRoutes(routes as RouteConfig[], path);
    if (
      matchedRoutes.some(route => !route.route.path || route.route.path === '*')
    ) {
      context.status = 404;
    }
  },
};
