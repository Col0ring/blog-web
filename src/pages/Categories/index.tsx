import React from 'react';
import { Link } from 'umi';
import { PageComponent } from '@/interfaces/Page';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import GlobalHelmet from '@/components/GlobalHelmet';
import { Col, Pagination, Row, Timeline } from 'antd';
import GlobalIntroduce from '@/components/GlobalIntroduce';
import { TitleBlogCard } from '@/components/BlogCard';

const Categories: PageComponent = () => {
  return (
    <SsrQueueAnim>
      <GlobalHelmet title="分类" />
      <Row>
        <Col
          span={24}
          md={{
            span: 16,
          }}
        >
          <TitleBlogCard title="文章分类">
            <Timeline>
              <Timeline.Item color="red">
                <span className="c-text-xl c-text-primary">分类 - 40</span>
              </Timeline.Item>
              <Timeline.Item color="green">
                <Link to="/categories/Vue">
                  Create a services site 2015-09-01
                </Link>
              </Timeline.Item>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
              <Timeline.Item color="green">
                Create a services site 2015-09-01
              </Timeline.Item>
            </Timeline>
            <div className="c-flex c-jc-center c-margin-t-xl">
              <Pagination total={59} showSizeChanger={false} pageSize={8} />
            </div>
          </TitleBlogCard>
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

Categories.getInitialProps = async () => {
  return {};
};

export default Categories;
