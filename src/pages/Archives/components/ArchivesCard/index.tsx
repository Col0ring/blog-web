import React from 'react';
import { Timeline } from 'antd';
import ArchiveArticle from '../ArchiveArticle';
import { TitleBlogCard } from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';
import { ArticleProps } from '@/interfaces/Data';
export interface ArchivesCardProps {
  articleList: ArticleProps[];
  loading?: boolean;
}

const ArchivesCard: React.FC<ArchivesCardProps> = ({
  articleList,
  loading,
}) => {
  return (
    <TitleBlogCard loading={loading} title="归档">
      <Timeline mode="left">
        <Timeline.Item color="red">
          <span className="c-text-xl c-text-primary">文章总览 - 40</span>
        </Timeline.Item>
        {articleList.map(article => {
          return (
            <Timeline.Item key={article.id}>
              <ArchiveArticle
                id={article.id}
                time={article.time}
                img={article.img}
                desc={article.desc}
                title={article.title}
                tags={article.tags}
              />
            </Timeline.Item>
          );
        })}
      </Timeline>
      <div className="c-flex c-jc-center c-margin-t-xl">
        <BlogPagination total={59} />
      </div>
    </TitleBlogCard>
  );
};

export default ArchivesCard;
