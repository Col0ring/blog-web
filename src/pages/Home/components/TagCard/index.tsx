import React from 'react';
import { Tag, Space } from 'antd';
import BlogCard from '@/components/BlogCard';

import { TagFilled } from '@ant-design/icons';

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
    <BlogCard
      title={
        <Space className="c-text-xl">
          <TagFilled />
          相关标签
        </Space>
      }
    >
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
    </BlogCard>
  );
};

export default TagCard;
