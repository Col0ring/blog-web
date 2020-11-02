import React from 'react';
import { ArticleBlogCard } from '@/components/BlogCard';
import ArticleList, { ArticleListProps } from '@/components/ArticleList';
export interface TagArticleListCardProps {
  tagArticleList: ArticleListProps['articleList'];
}
const TagArticleListCard: React.FC<TagArticleListCardProps> = ({
  tagArticleList,
}) => {
  return (
    <ArticleBlogCard type="tag" title={'Vue'} total={50}>
      <ArticleList articleList={tagArticleList} />
    </ArticleBlogCard>
  );
};

export default TagArticleListCard;
