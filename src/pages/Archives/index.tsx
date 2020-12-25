import React from 'react';
import { useSelector } from 'umi';
import { Col, Row } from 'antd';
import { PageComponent } from '@/interfaces/Page';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import GlobalHelmet from '@/components/GlobalHelmet';
import GlobalIntroduce from '@/components/GlobalIntroduce';
import ArchivesCard from '@/pages/Archives/components/ArchivesCard';
import { model } from './constants';
const Archives: PageComponent = () => {
  const { articleList, loading } = useSelector(({ archives, loading }) => ({
    articleList: archives.articleList,
    loading: loading.effects['archives/getArchivesData'],
  }));
  return (
    <SsrQueueAnim>
      <GlobalHelmet title="归档" />
      <Row>
        <Col
          span={24}
          md={{
            span: 16,
          }}
        >
          <ArchivesCard loading={loading} articleList={articleList} />
        </Col>
        <Col
          span={0}
          md={{
            offset: 1,
            span: 7,
          }}
        >
          <GlobalIntroduce />
        </Col>
      </Row>
    </SsrQueueAnim>
  );
};

Archives.getInitialProps = async ({ history, store }) => {
  const p = Number(history.location.query.p);
  const page = !Number.isNaN(p) ? p : 1;
  const data = await store.dispatch({
    type: 'archives/getArchivesData',
    page,
  });
  return {
    [model.namespace]: data,
  };
};

export default Archives;
