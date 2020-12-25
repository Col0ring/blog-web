import React from 'react';
import { Space } from 'antd';
import { Link } from 'umi';
import BlogCard from '@/components/BlogCard';
import { TagFilled, RightOutlined } from '@ant-design/icons';
import styles from './tag-card.less';
import TagLinkList from '@/components/TagLinkList';
import { TagProps } from '@/interfaces/Data';

export interface TagCardProps {
  tags: TagProps[];
}

const TagCard: React.FC<TagCardProps> = ({ tags = [] }) => {
  return (
    <BlogCard
      title={
        <div className="c-flex c-jc-space-between c-ai-center">
          <Space className="c-text-xl">
            <TagFilled />
            相关标签
          </Space>
          <Link to="/tags">
            更多
            <RightOutlined />
          </Link>
        </div>
      }
    >
      <div className={styles.tagCard}>
        <TagLinkList tags={tags} />
      </div>
    </BlogCard>
  );
};

export default TagCard;
