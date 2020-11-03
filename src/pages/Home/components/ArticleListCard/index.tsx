import React from 'react';
import { Space } from 'antd';
import { FireFilled } from '@ant-design/icons';
import ArticleList, { ArticleListProps } from '@/components/ArticleList';
import BlogCard from '@/components/BlogCard';

export interface ArticleListCardProps {
  articleList: ArticleListProps['articleList'];
  loading?: boolean;
}

const ArticleListCard: React.FC<ArticleListCardProps> = ({
  articleList,
  loading,
}) => {
  return (
    <BlogCard
      loading={loading}
      title={
        <Space className="c-text-xl">
          <FireFilled />
          热门文章
        </Space>
      }
    >
      <ArticleList articleList={articleList} />
    </BlogCard>
  );
};

export default ArticleListCard;
