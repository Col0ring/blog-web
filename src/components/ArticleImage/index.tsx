import React from 'react';
import classnames from 'classnames';
import { ImageProps } from 'rc-image';
import { Image } from 'antd';
import styles from './article-image.less';
const ArticleImage: React.FC<ImageProps> = ({ className, ...props }) => {
  const imageClassName = classnames(className, styles.articleImage);
  return <Image className={imageClassName} {...props} />;
};

export default ArticleImage;
