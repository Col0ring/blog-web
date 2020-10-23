import React, { useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import { Menu, Affix, Input } from 'antd';
import {
  FileTextOutlined,
  ReadOutlined,
  MenuOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import Logo from './Logo';
import Search from './Search';
import DropdownMenu from './DropdownMenu';
import styles from './navbar.less';
import useSsrResponsive from '@/hooks/useSSrResponsive';
import useDocScroll from '@/hooks/useDocScroll';
import useWindow from '@/hooks/useWindow';

interface NavMenuProps {
  mode?: 'horizontal' | 'inline';
  onClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ mode = 'horizontal', onClick }) => {
  return (
    <Menu
      triggerSubMenuAction="hover"
      onClick={onClick}
      mode={mode}
      style={{ border: 'none' }}
      className={styles.navMenu}
    >
      <Menu.Item key="a" icon={<HomeOutlined />}>
        首页
      </Menu.Item>
      <Menu.SubMenu title="文章" icon={<ReadOutlined />}>
        <Menu.Item key="setting:3">Vue</Menu.Item>
        <Menu.Item key="setting:3">React</Menu.Item>
        <Menu.Item key="setting:4">Webpack</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item icon={<FileTextOutlined />}>学习笔记</Menu.Item>
      <Menu.Item icon={<UnorderedListOutlined />}>关于我</Menu.Item>
    </Menu>
  );
};

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
              {!md && win && (
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
            {xs && win && (
              <div className={styles.menuContainer}>
                <Search hide={!sm} />
                {md && <NavMenu />}
              </div>
            )}
          </div>
        </nav>
      </Affix>
      {!md && win && (
        <DropdownMenu
          onClose={() => {
            setCollapsed(true);
          }}
          visible={!collapsed}
          footerStyle={{ padding: '20px 40px' }}
          footer={<Input.Search size="large" />}
        >
          <NavMenu
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
