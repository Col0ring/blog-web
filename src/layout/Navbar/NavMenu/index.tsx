import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'umi';
import {
  FileTextOutlined,
  ReadOutlined,
  HomeOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import styles from './navmenu.less';
interface NMenu {
  icon: string;
  title: string;
  children: NMenu[];
}

export interface NavMenuProps {
  menus: NMenu[];
  mode?: 'horizontal' | 'inline';
  onClick?: () => void;
}

const renderMenu = () => {};

const NavMenu: React.FC<NavMenuProps> = ({ mode = 'horizontal', onClick }) => {
  const { pathname } = useLocation();
  return (
    <Menu
      triggerSubMenuAction="hover"
      onClick={onClick}
      mode={mode}
      selectedKeys={[pathname]}
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
      <Menu.Item key="a" icon={<HomeOutlined />}>
        归档
      </Menu.Item>
      <Menu.Item icon={<FileTextOutlined />}>学习笔记</Menu.Item>
      <Menu.Item key={'/me'} icon={<UnorderedListOutlined />}>
        <Link to="/me">关于我</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
