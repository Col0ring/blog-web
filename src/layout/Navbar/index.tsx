import React, { useState } from 'react';
import { Menu, Affix } from 'antd';
import { useResponsive } from 'ahooks';
import {
  MailOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import Logo from './Logo';
import Search from './Search';
import styles from './navbar.less';

export interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const responsive = useResponsive();
  const md = responsive ? responsive.md : false;
  const sm = responsive ? responsive.sm : false;
  return (
    // 服务端渲染的 bug
    <Affix offsetTop={0} target={() => (window ? window : null)}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <div className={styles.logoContainer}>
            {!md && (
              <div className={styles.trigger}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    onClick: () => {
                      setCollapsed(!collapsed);
                    },
                  },
                )}
              </div>
            )}
            <Logo />
          </div>
          <div className={styles.menuContainer}>
            <Search hide={!sm} />
            {md && (
              <Menu mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                  Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                  Navigation Two
                </Menu.Item>
                <Menu.Item key="mail" icon={<MailOutlined />}>
                  Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                  Navigation Two
                </Menu.Item>
              </Menu>
            )}
          </div>
        </div>
      </div>
    </Affix>
  );
};

export default Navbar;
