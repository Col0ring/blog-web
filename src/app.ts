import { matchRoutes, RouteConfig } from 'react-router-config';
import { routes } from './router';
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
