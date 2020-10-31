import React from 'react';
import BlogCard from '@/components/BlogCard';
import { Catalog } from '@/components/MarkdownRenderer';
import { Affix } from 'antd';
import styles from './catalog-card.less';
const CatalogCard: React.FC = () => {
  return (
    <Affix offsetTop={60} className={styles.affix}>
      <BlogCard className={styles.catalogCard}>
        <Catalog />
      </BlogCard>
    </Affix>
  );
};

export default CatalogCard;
