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
import { LayoutProps } from '@/interfaces/Data';
import { LayoutContext } from '@/hooks/useLayout';
const Bg = memo(
  DynamicLoadWrapper({
    path: 'layout/Bg.tsx',
  }),
);

const Layout: PageComponent<LayoutProps> = ({
  children,
  relatedTags,
  newArticleList,
}) => {
  const win = useWindow();
  return (
    <LayoutContext.Provider
      value={{
        relatedTags,
        newArticleList,
      }}
    >
      <div className={styles.appWrapper}>
        <Bg />
        <Navbar />
        <AppMain>{children}</AppMain>
        <Footer />
        <Up />
      </div>
      {!win && <GlobalLoading />}
    </LayoutContext.Provider>
  );
};

Layout.getInitialProps = async () => {
  let key = 0;
  return {
    newArticleList: new Array(8).fill(0).map(() => ({
      id: key++,
      time: Date.now() - 1000000000,
      img:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      title:
        'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle',
      desc:
        '我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介',
      tags: [
        {
          color: 'red',
          name: 'red',
        },
        {
          color: 'green',
          name: 'green',
        },
        {
          color: 'cyan',
          name: 'cyan',
        },
      ],
    })),
    relatedTags: [],
  };
};

export default Layout;
