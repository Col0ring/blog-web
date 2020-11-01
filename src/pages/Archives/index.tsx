import React from 'react';
import { Col, Row } from 'antd';
import { PageComponent } from '@/interfaces/Page';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import GlobalHelmet from '@/components/GlobalHelmet';
import GlobalIntroduce from '@/components/GlobalIntroduce';
import ArchivesCard from '@/pages/Archives/components/ArchivesCard';

const Archives: PageComponent = () => {
  return (
    <SsrQueueAnim>
      <GlobalHelmet title="归档" />
      <Row gutter={[30, 10]}>
        <Col
          span={24}
          md={{
            span: 17,
          }}
        >
          <ArchivesCard />
        </Col>
        <Col
          span={0}
          md={{
            span: 7,
          }}
        >
          <GlobalIntroduce />
        </Col>
      </Row>
    </SsrQueueAnim>
  );
};

Archives.getInitialProps = async () => {
  return {};
};

export default Archives;
