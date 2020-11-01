import React from 'react';
import { Space } from 'antd';
import { UpSquareFilled } from '@ant-design/icons';
import BlogCard from '@/components/BlogCard';
import ArticleList, { ArticleListProps } from '@/components/ArticleList';
export interface TopArticleCardProps {
  topArticleList: ArticleListProps['articleList'];
}

const TopArticleCard: React.FC<TopArticleCardProps> = ({ topArticleList }) => {
  return (
    <BlogCard
      title={
        <Space className="c-text-xl">
          <UpSquareFilled />
          置顶文章
        </Space>
      }
    >
      <ArticleList pagination={false} articleList={topArticleList} />
    </BlogCard>
  );
};

export default TopArticleCard;
