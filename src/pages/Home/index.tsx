import React from 'react';
import { Row, Col } from 'antd';
import ArticleListCard, {
  ArticleListCardProps,
} from './components/ArticleListCard';
import TopArticleCard, {
  TopArticleCardProps,
} from './components/TopArticleCard';
import AboutMeCard from './components/AboutMeCard';
import { PageComponent } from '@/interface/Page';
import BulletinBoardCard from './components/BulletinBoardCard';
import NewArticleListCard, {
  NewArticleCardProps,
} from './components/NewArticleListCard';
import TagCard from './components/TagCard/index';
import useSsrResonsive from '@/hooks/useSSrResponsive';
import GlobalHelmet from '@/components/GlobalHelmet';

type HomeProps = ArticleListCardProps &
  NewArticleCardProps &
  TopArticleCardProps;

const Home: PageComponent<HomeProps> = ({
  articleList = [],
  newArticleList = [],
  topArticleList = [],
}) => {
  const { md } = useSsrResonsive();
  return (
    <>
      <GlobalHelmet></GlobalHelmet>
      <div className="c-margin-t-lg">
        <Row gutter={[30, 10]}>
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
      </div>
    </>
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
    newArticleList: new Array(8).fill(0).map(() => ({
      id: key++,
      time: Date.now() - 1000000000,
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
