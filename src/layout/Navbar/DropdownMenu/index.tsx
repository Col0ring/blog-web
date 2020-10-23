import React from 'react';
import { Drawer } from 'antd';
import { DrawerProps } from 'antd/es/drawer';
export interface DropdownMenuProps extends DrawerProps {
  onClose: NonNullable<DrawerProps['onClose']>;
  visible: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  onClose,
  children,
  visible,
  footer,
  ...rest
}) => {
  return (
    <Drawer
      closable={false}
      visible={visible}
      onClose={onClose}
      footer={footer}
      placement="top"
      {...rest}
      height="auto"
      drawerStyle={{ paddingTop: 70, maxHeight: '100vh' }}
    >
      {children}
    </Drawer>
  );
};

export default DropdownMenu;
