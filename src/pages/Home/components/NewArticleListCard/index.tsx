import React from 'react';
import { Link } from 'umi';
import { Space } from 'antd';
import { FieldTimeOutlined, FileDoneOutlined } from '@ant-design/icons';
import BlogCard from '@/components/BlogCard';
import { formatTime } from '@/utils/time';
import styles from './new-article-list-card.less';

interface ArticleProps {
  id: string | number;
  title?: string;
  time?: number;
}

export interface NewArticleCardProps {
  newArticleList: ArticleProps[];
}

const NewArticleCard: React.FC<NewArticleCardProps> = ({ newArticleList }) => {
  return (
    <BlogCard
      title={
        <Space className="c-text-xl">
          <FileDoneOutlined />
          最新文章
        </Space>
      }
    >
      <ul className={styles.newArticleCard}>
        {newArticleList.map(article => {
          return (
            <li key={article.id} className={styles.item}>
              <Link className="c-text-cut" to={'/article/' + article.id}>
                {article.title}
              </Link>
              {article.time && (
                <div className={styles.time}>
                  <Space size="small">
                    <FieldTimeOutlined />
                    <span>{formatTime(article.time)}</span>
                  </Space>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </BlogCard>
  );
};

export default NewArticleCard;
