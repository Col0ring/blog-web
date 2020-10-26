import React from 'react';
import { Space } from 'antd';
import { NotificationFilled } from '@ant-design/icons';
import BlogCard from '@/components/BlogCard';
export interface BulletinBoardCardProps {}

const BulletinBoardCard: React.FC<BulletinBoardCardProps> = () => {
  return (
    <BlogCard
      title={
        <Space className="c-text-xl">
          <NotificationFilled />
          博客公告
        </Space>
      }
    >
      <div>Col0ring 的博客，采用 umi + typescript + ssr 开发</div>
    </BlogCard>
  );
};

export default BulletinBoardCard;
