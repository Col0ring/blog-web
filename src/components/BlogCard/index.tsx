import React from 'react';
import classnames from 'classnames';
import styles from './blog-card.less';

export interface BlogCardProps {
  className?: string;
  bodyClassName?: string;
  titleClassName?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
}

const BlogCard: React.FC<BlogCardProps> = ({
  children,
  className,
  bodyClassName,
  titleClassName,
  style,
  title,
}) => {
  const blogCardClassName = classnames(styles.blogCard, className);
  const cardBodyClassName = classnames(styles.body, bodyClassName);
  const cardTitleClassName = classnames(styles.title, titleClassName);
  return (
    <div className={blogCardClassName} style={style}>
      {title && <div className={cardTitleClassName}>{title}</div>}
      <div className={cardBodyClassName}>{children}</div>
    </div>
  );
};

export default BlogCard;
