import React from 'react';
import { Space, Tag } from 'antd';
import BlogCard from '@/components/BlogCard';
import { TagProps } from '@/interface/Data';
import styles from './article-card.less';

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
              <span className={styles.name}>Col0ring</span>
              <span className={styles.time}>2020-8-17</span>
            </Space>
          </div>
          {article && article.tags && article.tags.length > 0 && (
            <div className={styles.tags}>
              <span className={styles.label}>标签:</span>
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
    ></BlogCard>
  );
};

export default ArticleCard;
