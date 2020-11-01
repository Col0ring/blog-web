import React from 'react';
import { Space, Tag } from 'antd';
import { UserOutlined, CalendarOutlined, TagOutlined } from '@ant-design/icons';
import BlogCard from '@/components/BlogCard';
import { TagProps } from '@/interfaces/Data';
import { formatTime } from '@/utils/time';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import styles from './article-card.less';

const content = `
  ## 总结

  本文使用 typescript，根据类型定义从零开始实现了一个 Promise，其中重点深入了对于 then 方法的处理。虽不完美，但也算达到了想要的效果。作者技术有限，如果有什么错误或遗漏的地方还请在评论区中指出，顺便求个👍。

  文章的代码已上传至 [github](https://github.com/Col0ring/learning-es6/tree/main/Promise) 

  ## 参考资料

  [面试官：“你能手写一个 Promise 吗”](https://juejin.im/post/6850037281206566919)

  [MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

  [Promise A+ 规范（中文翻译）](http://malcolmyu.github.io/malnote/2015/06/12/Promises-A-Plus/)

  `;
interface ArticleProps {
  id: number | string;
  time: number;
  title: string;
  content: string;
  img?: string;
  tags?: TagProps[];
}

export interface ArticleCardProps {
  article: ArticleProps;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <BlogCard
      title={
        <div className={styles.header}>
          <h1 className={styles.title}>
            titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle
          </h1>
          <div className={styles.meta}>
            <Space size="large">
              <span className={styles.name}>
                <Space>
                  <UserOutlined />
                  Col0ring
                </Space>
              </span>
              <span className={styles.time}>
                <Space>
                  <CalendarOutlined />
                  {formatTime(new Date('2018-8-16').getTime(), {
                    complete: true,
                  })}
                </Space>
              </span>
            </Space>
          </div>
          {article && article.tags && article.tags.length > 0 && (
            <div className={styles.tags}>
              <span className={styles.label}>
                <TagOutlined />
              </span>
              <span>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
              </span>
            </div>
          )}
        </div>
      }
    >
      <MarkdownRenderer content={content}></MarkdownRenderer>
      <p className="c-margin-tb-lg c-text-right c-text-sm c-text-grey">
        🚫 未经作者授权请勿转载
      </p>
    </BlogCard>
  );
};

export default ArticleCard;
