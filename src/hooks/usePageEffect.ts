import { useUpdateEffect, usePrevious } from 'ahooks';
import { useLocation } from 'umi';

const usePageEffect = (onPageChange: (page: number) => void) => {
  const { query, pathname } = useLocation();
  const prePathname = usePrevious(pathname);
  const p = Number(query.p);
  useUpdateEffect(() => {
    if (pathname === prePathname) {
      const page = !Number.isNaN(p) ? p : 1;
      onPageChange(page);
    }
  }, [p, pathname]);
};

export default usePageEffect;
