import React from 'react';
import { TitleBlogCard } from '@/components/BlogCard';
import { Timeline, Pagination } from 'antd';
import ArchiveArticle from '../ArchiveArticle';
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
    <TitleBlogCard title="归档">
      <Timeline mode="left">
        <Timeline.Item color="red">
          <span className="c-text-xl c-text-primary">文章总览 - 40</span>
        </Timeline.Item>
        {articleList.map(article => {
          return (
            <Timeline.Item key={article.id}>
              <ArchiveArticle
                id={article.id}
                time={article.time}
                img={article.img}
                desc={article.desc}
                title={article.title}
                tags={article.tags}
              />
            </Timeline.Item>
          );
        })}
      </Timeline>
      <div className="c-flex c-jc-center c-margin-t-xl">
        <Pagination total={59} showSizeChanger={false} pageSize={8} />
      </div>
    </TitleBlogCard>
  );
};

export default ArchivesCard;
