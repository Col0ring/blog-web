import { useResponsive } from 'ahooks';
interface Responsive {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}
const useSsrResonsive = (): Responsive => {
  const responsive = (useResponsive() as unknown) as Responsive;
  return responsive
    ? responsive
    : {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
      };
};

export default useSsrResonsive;
