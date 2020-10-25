import React from 'react';
import { Link } from 'umi';
import styles from './new-article-card.less';

interface ArticleProps {
  id: string | number;
  title?: string;
}

export interface NewArticleCardProps {
  artileList?: ArticleProps[];
}

const NewArticleCard: React.FC<NewArticleCardProps> = ({ artileList = [] }) => {
  return (
    <ul className={styles.newArticleCard}>
      {artileList.map(article => {
        return (
          <li className={styles.item}>
            <Link to={'/article/' + article.id}>{article.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewArticleCard;
