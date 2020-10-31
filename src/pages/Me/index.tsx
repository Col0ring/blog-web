import React from 'react';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import { Col, Row, Timeline } from 'antd';
import BlogCard, { TitleBlogCard } from '@/components/BlogCard';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { PageComponent } from '@/interface/Page';
import styles from './me.less';

const content = `
## 总结

本文使用 typescript，根据类型定义从零开始实现了一个 Promise，其中重点深入了对于 then 方法的处理。虽不完美，但也算达到了想要的效果。作者技术有限，如果有什么错误或遗漏的地方还请在评论区中指出，顺便求个👍。

文章的代码已上传至 [github](https://github.com/Col0ring/learning-es6/tree/main/Promise) 

## 参考资料

[面试官：“你能手写一个 Promise 吗”](https://juejin.im/post/6850037281206566919)

[MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Promise A+ 规范（中文翻译）](http://malcolmyu.github.io/malnote/2015/06/12/Promises-A-Plus/)

`;

const Me: PageComponent = () => {
  return (
    <SsrQueueAnim>
      <Row>
        <Col
          span={24}
          md={{
            span: 17,
          }}
        >
          <TitleBlogCard title="关于我">
            <MarkdownRenderer content={content} />
          </TitleBlogCard>
        </Col>
        <Col
          span={0}
          md={{
            offset: 1,
            span: 6,
          }}
        >
          <TitleBlogCard title="学习历程">
            <Timeline mode="alternate">
              <Timeline.Item label="2015-09-01">
                Create a services
              </Timeline.Item>
              <Timeline.Item label="2015-09-01 09:12:11">
                Solve initial network problems
              </Timeline.Item>
              <Timeline.Item>Technical testing</Timeline.Item>
              <Timeline.Item label="2015-09-01 09:12:11">
                Network problems being solved
              </Timeline.Item>
            </Timeline>
          </TitleBlogCard>
        </Col>
      </Row>
    </SsrQueueAnim>
  );
};

Me.getInitialProps = async () => {
  return {};
};

export default Me;
