import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AppMain from './AppMain';
import useWindow from '@/hooks/useWindow';
import GlobalLoading from '@/components/GlobalLoading';
import { DynamicLoadWrapper } from '@/components/DynamicLoad';
import styles from './index.less';
const Bg = DynamicLoadWrapper({
  path: 'layout/Bg.tsx',
});
const Layout: React.FC = ({ children }) => {
  const win = useWindow();
  return (
    <>
      <div className={styles.appWrapper}>
        <Bg />
        <Navbar />
        <AppMain>{children}</AppMain>
        <Footer />
      </div>
      {!win && <GlobalLoading />}
    </>
  );
};

export default Layout;
