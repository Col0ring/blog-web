import React from 'react';
import { useSelector } from 'umi';
import { Row, Col } from 'antd';
import ArticleListCard from './components/ArticleListCard';
import TopArticleCard from './components/TopArticleCard';
import AboutMeCard from '@/components/GlobalIntroduce/AboutMeCard';
import { PageComponent } from '@/interfaces/Page';
import BulletinBoardCard from '@/components/GlobalIntroduce/BulletinBoardCard';
import NewArticleListCard from '@/components/GlobalIntroduce/NewArticleListCard';
import TagCard from '@/components/GlobalIntroduce/TagCard';
import useSsrResponsive from '@/hooks/useSSrResponsive';
import GlobalHelmet from '@/components/GlobalHelmet';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import useLayout from '@/hooks/useLayout';
import { model } from '@/pages/Home/constants';

const Home: PageComponent = () => {
  const { md } = useSsrResponsive();
  const { relatedTags, newArticleList } = useLayout();
  const { home, loading } = useSelector(({ loading, home }) => ({
    home,
    loading: loading.effects['home/getHomeData'],
  }));
  const { articleList, topArticleList } = home;
  return (
    <SsrQueueAnim>
      <GlobalHelmet />
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
          <ArticleListCard loading={loading} articleList={articleList} />
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

          <TagCard tags={relatedTags} />

          {!md && <TopArticleCard topArticleList={topArticleList} />}

          <NewArticleListCard newArticleList={newArticleList} />
        </Col>
      </Row>
    </SsrQueueAnim>
  );
};

Home.getInitialProps = async ({ history, store }) => {
  const p = Number(history.location.query.p);
  const page = !Number.isNaN(p) ? p : 1;
  const data = await store.dispatch({
    type: 'home/getHomeData',
    page,
  });
  // dva 拦截
  return {
    [model.namespace]: data,
  };
};
export default Home;
