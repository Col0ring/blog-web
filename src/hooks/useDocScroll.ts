import { useEffect } from 'react';
import { useDebounceFn } from 'ahooks';
interface useDocScrollProps {
  scrollUp?: (value: number) => void;
  upDelay?: number;
  scrollDown?: (value: number) => void;
  downDelay?: number;
}
const useDocScroll = ({
  scrollDown = () => {},
  upDelay = 0,
  downDelay = 0,
  scrollUp = () => {},
}: useDocScrollProps): void => {
  const scrollUpCb = useDebounceFn(scrollUp, {
    wait: upDelay,
  });
  const scrollDownCb = useDebounceFn(scrollDown, {
    wait: downDelay,
  });
  let beforeValue = 0;
  const scrollListener = () => {
    const afterValue = document.scrollingElement!.scrollTop;
    if (afterValue - beforeValue > 0) {
      scrollDownCb.run(afterValue);
    } else {
      scrollUpCb.run(afterValue);
    }
    beforeValue = afterValue;
  };
  useEffect(() => {
    if (document.scrollingElement) {
      beforeValue = document.scrollingElement.scrollTop;
      document.addEventListener('scroll', scrollListener);
    }
    return () => {
      if (document.scrollingElement) {
        document.removeEventListener('scroll', scrollListener);
      }
    };
  }, [scrollUp, scrollDown]);
};

export default useDocScroll;
