import React from 'react';
import { Space, Pagination } from 'antd';
import { FireFilled } from '@ant-design/icons';
import ArticleCard, { ArticleCardProps } from '@/components/ArticleCard';
import BlogCard from '@/components/BlogCard';

export interface ArticleListCardProps {
  articleList: ArticleCardProps[];
}

const ArticleListCard: React.FC<ArticleListCardProps> = ({ articleList }) => {
  return (
    <BlogCard
      title={
        <Space className="c-text-xl">
          <FireFilled />
          热门文章
        </Space>
      }
    >
      {articleList.map(article => {
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
      <div className="c-flex c-jc-center c-margin-t-xl">
        <Pagination total={50} showSizeChanger={false} pageSize={8} />
      </div>
    </BlogCard>
  );
};

export default ArticleListCard;
