import React from 'react';
import { Row, Col } from 'antd';
import ArticleListCard, {
  ArticleListCardProps,
} from './components/ArticleListCard';
import TopArticleCard, {
  TopArticleCardProps,
} from './components/TopArticleCard';
import AboutMeCard from '@/components/GlobalIntroduce/AboutMeCard';
import { PageComponent } from '@/interfaces/Page';
import BulletinBoardCard from '@/components/GlobalIntroduce/BulletinBoardCard';
import NewArticleListCard from '@/components/GlobalIntroduce/NewArticleListCard';
import TagCard from '@/components/GlobalIntroduce/TagCard';
import useSsrResponsive from '@/hooks/useSSrResponsive';
import GlobalHelmet from '@/components/GlobalHelmet';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import useLayout from '@/hooks/useLayout';

type HomeProps = ArticleListCardProps & TopArticleCardProps;

const Home: PageComponent<HomeProps> = ({
  articleList = [],
  topArticleList = [],
}) => {
  const { md } = useSsrResponsive();
  const { relatedTags, newArticleList } = useLayout();
  return (
    <SsrQueueAnim>
      <GlobalHelmet />
      <Row key="home" gutter={[30, 10]}>
        <Col
          span={24}
          order={2}
          md={{
            span: 17,
            order: 1,
          }}
        >
          {md && <TopArticleCard topArticleList={topArticleList} />}
          <ArticleListCard articleList={articleList} />
        </Col>
        <Col
          span={24}
          order={1}
          md={{
            order: 2,
            span: 7,
          }}
        >
          <AboutMeCard />

          <BulletinBoardCard />

          <TagCard />

          {!md && <TopArticleCard topArticleList={topArticleList} />}

          <NewArticleListCard newArticleList={newArticleList} />
        </Col>
      </Row>
    </SsrQueueAnim>
  );
};

Home.getInitialProps = async () => {
  let key = 0;
  return {
    topArticleList: new Array(1).fill(0).map(() => ({
      id: key++,
      time: Date.now(),
      img:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      title:
        'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle',
      desc:
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
    })),
    articleList: new Array(8).fill(0).map(() => ({
      id: key++,
      time: Date.now(),
      img:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      title:
        'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle',
      desc:
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
    })),
  };
};
export default Home;
