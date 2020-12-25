import React from 'react';
import { Tag } from 'antd';
import { Link } from 'umi';
import { TagProps } from '@/interfaces/Data';
import styles from './tag-link.less';
const TagLink: React.FC<TagProps> = ({ name, color, href }) => {
  return (
    <Tag key={name} color={color}>
      <Link className={styles.link} to={href || '/tags/' + name}>
        {name}
      </Link>
    </Tag>
  );
};

export default TagLink;
