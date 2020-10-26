import React from 'react';
import * as AllIcons from '@ant-design/icons';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

export interface TotalIconsProps extends AntdIconProps {
  name: string;
}
export const IconFont = AllIcons.createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2159589_zz7u6kf6zr.js'],
});

const TotalIcons: React.FC<TotalIconsProps> = ({ name, ...rest }) => {
  return name
    ? React.createElement((AllIcons as GlobalObject)[name], {
        ...rest,
      })
    : null;
};

export default TotalIcons;
