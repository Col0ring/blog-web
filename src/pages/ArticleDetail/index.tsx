import React from 'react';
import { PageComponent } from '@/interface/Page';
import { TagProps } from '@/interface/Data';
import styles from './article-detail.less';

interface ArticleProps {
  id: number | string;
  time: number;
  title: string;
  content: string;
  img?: string;
  tags?: TagProps[];
}

interface ArticleDetailProps {
  article: ArticleProps;
}

const ArticleDetail: PageComponent<ArticleDetailProps> = ({ article }) => {
  return <div>article</div>;
};

ArticleDetail.getInitialProps = async () => {
  return {
    article: {
      id: 1,
      time: Date.now(),
      img:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      title:
        'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle',
      content:
        '我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介',
      tags: [
        {
          color: 'red',
          name: 'red',
        },
        {
          color: 'green',
          name: 'green',
        },
        {
          color: 'cyan',
          name: 'cyan',
        },
      ],
    },
  };
};

export default ArticleDetail;
