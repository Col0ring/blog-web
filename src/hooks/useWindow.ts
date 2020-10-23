import { useEffect, useState } from 'react';

const useWindow = () => {
  const [win, setWin] = useState<null | Window>(null);
  useEffect(() => {
    setWin(window);
  }, []);
  return win;
};

export default useWindow;
