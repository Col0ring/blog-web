import React from 'react';
import classnames from 'classnames';
import styles from './blog-card.less';

export interface BlogCardProps {
  className?: string;
  bodyClassName?: string;
  titleClassName?: string;
  footerClassName?: string;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
  title?: React.ReactNode;
}

const BlogCard: React.FC<BlogCardProps> = ({
  children,
  className,
  bodyClassName,
  titleClassName,
  footerClassName,
  footer,
  style,
  title,
}) => {
  const blogCardClassName = classnames(styles.blogCard, className);
  const cardBodyClassName = classnames(styles.body, bodyClassName);
  const cardTitleClassName = classnames(styles.title, titleClassName);
  const cardFooterClassName = classnames(styles.footer, footerClassName);
  return (
    <div className={blogCardClassName} style={style}>
      {title && <div className={cardTitleClassName}>{title}</div>}
      <div className={cardBodyClassName}>{children}</div>
      {footer && <div className={cardFooterClassName}>{footer}</div>}
    </div>
  );
};

const TitleBlogCard: React.FC<BlogCardProps> = ({ title, ...props }) => {
  return (
    <BlogCard
      title={<h1 className={styles.titleBlogCard}>{title}</h1>}
      {...props}
    />
  );
};

export const ArticleBlogCard: React.FC<BlogCardProps & {
  total: number;
}> = ({ total, title, ...props }) => {
  return (
    <BlogCard
      title={
        <h1 className={styles.articleBlogCard}>
          正在显示 {title} 标签下的 {total} 篇文章:
        </h1>
      }
      {...props}
    />
  );
};

export { TitleBlogCard };
export default BlogCard;
