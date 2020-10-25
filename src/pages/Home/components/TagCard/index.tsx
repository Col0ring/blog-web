import React from 'react';
import { Tag } from 'antd';
import styles from './tag-card.less';

interface TagsProps {
  color?: string;
  name: string;
}

export interface TagCardProps {
  tags?: TagsProps[];
}

const TagCard: React.FC<TagCardProps> = ({ tags = [] }) => {
  return (
    <div className={styles.tagCard}>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
  );
};

export default TagCard;
