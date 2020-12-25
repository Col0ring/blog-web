import React from 'react';
import { ArticleProps } from '@/interfaces/Data';
import Article from '@/components/Article';
import BlogPagination from '@/components/BlogPagination';

export interface ArticleListProps {
  articleList: ArticleProps[];
  pagination?: boolean;
  total?: number;
}

const ArticleList: React.FC<ArticleListProps> = ({
  articleList,
  pagination = true,
  total = 50,
}) => {
  return (
    <>
      {articleList.map(article => {
        return <Article {...article} key={article.id} />;
      })}
      {pagination && total && <BlogPagination total={total} />}
    </>
  );
};

export default ArticleList;
