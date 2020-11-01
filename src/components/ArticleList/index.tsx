import React from 'react';
import { Pagination } from 'antd';
import { ArticleProps } from '@/interfaces/Data';
import ArticleCard from '@/components/Article';

export interface ArticleListProps {
  articleList: ArticleProps[];
  total?: number;
}

const ArticleList: React.FC<ArticleListProps> = ({
  articleList,
  total = 50,
}) => {
  return (
    <>
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
      {total && (
        <div className="c-flex c-jc-center c-margin-t-xl">
          <Pagination total={total} showSizeChanger={false} pageSize={8} />
        </div>
      )}
    </>
  );
};

export default ArticleList;
