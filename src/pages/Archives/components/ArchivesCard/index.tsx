import React from 'react';
import BlogCard from '@/components/BlogCard';
import { Timeline } from 'antd';
import Article from '@/components/Article';
import styles from './archives-card.less';
const ArchivesCard: React.FC = () => {
  let key = 0;
  const articleList = new Array(8).fill(0).map(() => ({
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
  }));
  return (
    <BlogCard>
      <Timeline mode="right">
        {articleList.map(article => {
          return (
            <Timeline.Item>
              <Article
                id={article.id}
                time={article.time}
                key={article.id}
                img={article.img}
                desc={article.desc}
                title={article.title}
                tags={article.tags}
              />
            </Timeline.Item>
          );
        })}
      </Timeline>
    </BlogCard>
  );
};

export default ArchivesCard;
