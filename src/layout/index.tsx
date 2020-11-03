import React, { memo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AppMain from './AppMain';
import useWindow from '@/hooks/useWindow';
import GlobalLoading from '@/components/GlobalLoading';
import { DynamicLoadWrapper } from '@/components/DynamicLoad';
import Up from './Up';
import styles from './index.less';
import { PageComponent } from '@/interfaces/Page';
const Bg = memo(
  DynamicLoadWrapper({
    path: 'layout/Bg.tsx',
  }),
);

const Layout: PageComponent = ({ children }) => {
  const win = useWindow();
  return (
    <>
      <div className={styles.appWrapper}>
        <Bg />
        <Navbar />
        <AppMain>{children}</AppMain>
        <Footer />
        <Up />
      </div>
      {!win && <GlobalLoading />}
    </>
  );
};

Layout.getInitialProps = async ({ store }) => {
  const data = await store.dispatch({
    type: 'layout/getLayoutData',
  });
  return {
    layout: data,
  };
};

export default Layout;
