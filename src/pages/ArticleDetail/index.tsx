import React from 'react';
import { PageComponent } from '@/interface/Page';

interface Article {
  time?: number;
}

interface ArticleDetailProps {
  article: {};
}

const ArticleDetail: PageComponent<ArticleDetailProps> = ({ article }) => {
  return <div></div>;
};

ArticleDetail.getInitialProps = async () => {
  return {
    article: {},
  };
};

export default ArticleDetail;
