import React from 'react';
import { Drawer, Menu } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
import styles from './dropdown-menu.less';
export interface DropdownMenuProps extends DrawerProps {
  onClose: NonNullable<DrawerProps['onClose']>;
  visible: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  onClose,
  visible,
  ...rest
}) => {
  return (
    <Drawer
      visible={visible}
      onClose={onClose}
      placement="top"
      {...rest}
      className={styles.dropdownMenu}
    >
      <Menu>
        <Menu.Item key="mail">Navigation One</Menu.Item>
        <Menu.Item>Navigation Two</Menu.Item>
      </Menu>
    </Drawer>
  );
};

export default DropdownMenu;
