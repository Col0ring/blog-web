import React from 'react';
import classnames from 'classnames';
import styles from './blog-card.less';

export interface BlogCardProps {
  className?: string;
  style?: React.CSSProperties;
}

const BlogCard: React.FC<BlogCardProps> = ({ children, className, style }) => {
  const blogCardClassName = classnames(styles.blogCard, className);
  return (
    <div className={blogCardClassName} style={style}>
      {children}
    </div>
  );
};

export default BlogCard;
