import React from 'react';
import { Space } from 'antd';
import { Link, useHistory } from 'umi';
import { CalendarOutlined } from '@ant-design/icons';
import { formatTime } from '@/utils/time';
import { ArticleProps } from '@/interfaces/Data';
import styles from './archive-article.less';
import ArticleImage from '@/components/ArticleImage';

const ArchiveArticle: React.FC<ArticleProps> = ({ title, desc, img, time }) => {
  const history = useHistory();
  return (
    <div className={styles.ArchiveArticle}>
      {img && (
        <ArticleImage
          preview={false}
          alt={title}
          className={styles.image}
          src={img}
          placeholder
        />
      )}
      <div className={styles.content}>
        <h4 className={styles.title}>
          <Link to={'/article/1'}>{title}</Link>
        </h4>
        <div className={styles.time}>
          <Space size="small">
            <CalendarOutlined />
            <span>{formatTime(time)}</span>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default ArchiveArticle;
