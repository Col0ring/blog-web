import React, { useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import { Affix, Input } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from './Logo';
import Search from './Search';
import DropdownMenu from './DropdownMenu';
import NavMenu from './NavMenu';
import styles from './navbar.less';
import useSsrResponsive from '@/hooks/useSSrResponsive';
import useDocScroll from '@/hooks/useDocScroll';
import useWindow from '@/hooks/useWindow';

const Navbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { md, sm, xs } = useSsrResponsive();
  const [scrollDown, setScrollDown] = useState(false);
  const win = useWindow();
  const affixClassName = classnames(styles.affix, {
    [styles.scrollDown]: scrollDown,
  });
  const navbarWrapperClassName = classnames(styles.navbarWrapper, {
    [styles.scrollDown]: scrollDown,
  });
  const scrollOptions = useMemo(() => {
    return {
      scrollDown: () => {
        setScrollDown(true);
      },
      upDelay: 200,
      scrollUp: () => {
        setScrollDown(false);
      },
      downDelay: 200,
    };
  }, [setScrollDown]);
  useDocScroll(scrollOptions);
  useEffect(() => {
    if (md) {
      setCollapsed(true);
    }
  }, [md]);

  return (
    <>
      <Affix offsetTop={0} className={affixClassName} target={() => win}>
        <nav className={navbarWrapperClassName}>
          <div className={styles.navbar}>
            <div className={styles.logoContainer}>
              {!md && (
                <div className={styles.trigger}>
                  <MenuOutlined
                    onClick={() => {
                      setCollapsed(!collapsed);
                    }}
                  />
                </div>
              )}
              <Logo />
            </div>
            {xs && (
              <div className={styles.menuContainer}>
                <Search hide={!sm} />
                {md && <NavMenu menus={[]} />}
              </div>
            )}
          </div>
        </nav>
      </Affix>
      {!md && (
        <DropdownMenu
          onClose={() => {
            setCollapsed(true);
          }}
          visible={!collapsed}
          footerStyle={{ padding: '20px 40px' }}
          footer={<Input.Search size="large" />}
        >
          <NavMenu
            menus={[]}
            mode="inline"
            onClick={() => {
              setCollapsed(true);
            }}
          />
        </DropdownMenu>
      )}
    </>
    // 服务端渲染的 bug
  );
};

export default Navbar;
