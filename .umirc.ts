import { defineConfig } from 'umi';
import { routes } from './src/router';
const outputPath = '/dist-web/';

const env = process.env.NODE_ENV;
const path = env === 'development' ? '/' : outputPath;

export default defineConfig({
  title: false,
  metas: [],
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: outputPath,
  publicPath: path,
  ssr: {
    // devServerRender: false,
  },
  dynamicImport: {
    loading: '@/components/GlobalLoading',
  },
  ignoreMomentLocale: true,
  dva: {
    hmr: true,
  },
  targets: false,
  routes: routes,
});
