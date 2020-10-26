import React from 'react';
import { Space } from 'antd';
import { FireFilled } from '@ant-design/icons';
import BlogCard from '@/components/BlogCard';
import ArticleCard, { ArticleCardProps } from '@/components/ArticleCard';

export interface TopArticleCardProps {
  topArticleList: ArticleCardProps[];
}

const TopArticleCard: React.FC<TopArticleCardProps> = ({ topArticleList }) => {
  return (
    <BlogCard
      title={
        <Space className="c-text-xl">
          <FireFilled />
          置顶文章
        </Space>
      }
    >
      {topArticleList.map(article => {
        return (
          <ArticleCard
            id={article.id}
            time={article.time}
            key={article.id}
            img={article.img}
            desc={article.desc}
            title={article.title}
            tags={article.tags}
          />
        );
      })}
    </BlogCard>
  );
};

export default TopArticleCard;
