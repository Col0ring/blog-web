import React from 'react';
import { Helmet } from 'umi';
import setting from '@/setting';
export interface GlobalHelmetProps {
  encodeSpecialCharacters?: boolean;
  title?: string;
}
const GlobalHelmet: React.FC<GlobalHelmetProps> = ({
  children,
  title,
  encodeSpecialCharacters,
}) => {
  return (
    <Helmet encodeSpecialCharacters={encodeSpecialCharacters}>
      <title>{title ? title + ' - ' + setting.title : setting.title}</title>
      {children}
    </Helmet>
  );
};

export default GlobalHelmet;
