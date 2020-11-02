import React from 'react';
import { useUpdateEffect } from 'ahooks';
import { PageComponent } from '@/interfaces/Page';
import GlobalIntroduce from '@/components/GlobalIntroduce';
import { Row, Col } from 'antd';
import TagArticleListCard, {
  TagArticleListCardProps,
} from '@/pages/TagArticle/components/TagArticleListCard';
import SsrQueueAnim from '@/components/SsrQueueAnim';

type TagArticleProps = TagArticleListCardProps;

const TagArticle: PageComponent<TagArticleProps> = ({
  tagArticleList = [],
  match,
}) => {
  const { name } = match.params as { name: string };

  useUpdateEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <SsrQueueAnim id="tagArticle">
      <Row gutter={30}>
        <Col
          span={24}
          md={{
            span: 17,
          }}
        >
          <TagArticleListCard tagArticleList={tagArticleList} />
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

TagArticle.getInitialProps = async () => {
  let key = 0;
  return {
    tagArticleList: new Array(8).fill(0).map(() => ({
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

export default TagArticle;
