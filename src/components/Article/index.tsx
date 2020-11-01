import React from 'react';
import { Tag, Space } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'umi';
import ArticleImage from '@/components/ArticleImage';
import { formatTime } from '@/utils/time';
import { ArticleProps } from '@/interfaces/Data';
import styles from './article.less';

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  desc,
  img,
  time,
  tags = [],
}) => {
  const history = useHistory();
  return (
    <div
      className={styles.article}
      onClick={() => {
        history.push('/article/1');
      }}
    >
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
        <h4 className={`${styles.title} c-text-cut`}>{title}</h4>
        <p className={`${styles.desc} c-text-cut`}>{desc}</p>

        <div
          className={styles.tags}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {tags.map(tag => {
            return (
              <Tag key={tag.name} color={tag.color}>
                <Link
                  className={styles.link}
                  to={tag.href || '/tags/' + tag.name}
                >
                  {tag.name}
                </Link>
              </Tag>
            );
          })}
        </div>
        <div className={styles.time}>
          <Space size="small">
            <FieldTimeOutlined />
            <span>{formatTime(time)}</span>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
