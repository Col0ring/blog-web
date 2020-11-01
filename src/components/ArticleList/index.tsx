import React from 'react';
import { Pagination } from 'antd';
import { ArticleProps } from '@/interfaces/Data';
import Article from '@/components/Article';

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
        return (
          <Article
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
      {pagination && total && (
        <div className="c-flex c-jc-center c-margin-t-xl">
          <Pagination total={total} showSizeChanger={false} pageSize={8} />
        </div>
      )}
    </>
  );
};

export default ArticleList;
