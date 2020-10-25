import React from 'react';
import { Image, Tag } from 'antd';
import styles from './article-card.less';
import { Link } from 'umi';

interface TagProps {
  name: string;
  href?: string;
  color?: string;
}

export interface ArticleCardProps {
  id: string | number;
  img?: string;
  title?: string;
  desc?: string;
  tags?: TagProps[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  desc,
  img,
  tags = [],
}) => {
  return (
    <div className={styles.articleCard}>
      {img && (
        <Image
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
        <div className={styles.tags}>
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
      </div>
    </div>
  );
};

export default ArticleCard;
