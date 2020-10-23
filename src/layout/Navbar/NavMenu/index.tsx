import React from 'react';
import { Menu } from 'antd';
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

const NavMenu: React.FC<NavMenuProps> = ({ mode = 'horizontal', onClick }) => {
  return (
    <Menu
      triggerSubMenuAction="hover"
      onClick={onClick}
      mode={mode}
      style={{ border: 'none' }}
      className={styles.navMenu}
    ></Menu>
  );
};

export default NavMenu;
