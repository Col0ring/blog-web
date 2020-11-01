import React from 'react';
import AboutMeCard from './AboutMeCard';
import BulletinBoardCard from './BulletinBoardCard';
import TagCard from './TagCard';
import NewArticleListCard from './NewArticleListCard';
import useLayout from '@/hooks/useLayout';

const GlobalIntroduce: React.FC = () => {
  const { relatedTags, newArticleList } = useLayout();
  return (
    <>
      <AboutMeCard />
      <BulletinBoardCard />
      <TagCard />
      <NewArticleListCard newArticleList={newArticleList} />
    </>
  );
};

export default GlobalIntroduce;
