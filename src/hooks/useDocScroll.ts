import { useEffect } from 'react';
import { useDebounceFn } from 'ahooks';
interface useDocScrollProps {
  scrollUp?: () => void;
  upDelay?: number;
  scrollDown?: () => void;
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
    if (afterValue - beforeValue >= 0) {
      scrollDownCb.run();
    } else {
      scrollUpCb.run();
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
