import React from 'react';
import { Row, Col } from 'antd';
import { PageComponent } from '@/interface/Page';
import { TagProps } from '@/interface/Data';
import ArticleCard from './components/ArticleCard';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import AboutMeCard from '@/components/AboutMeCard';
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
  return (
    <SsrQueueAnim>
      <Row gutter={20}>
        <Col
          span={24}
          md={{
            span: 17,
          }}
        >
          <ArticleCard article={article} />
        </Col>
        <Col
          span={0}
          md={{
            span: 7,
          }}
        >
          <AboutMeCard />
        </Col>
      </Row>
    </SsrQueueAnim>
  );
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
