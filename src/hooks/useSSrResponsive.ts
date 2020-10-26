import { useResponsive } from 'ahooks';
import useWindow from './useWindow';
interface Responsive {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}
const useSsrResonsive = (): Responsive => {
  const responsive = (useResponsive() as unknown) as Responsive;
  const win = useWindow();
  return responsive && win
    ? responsive
    : {
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
      };
};

export default useSsrResonsive;
