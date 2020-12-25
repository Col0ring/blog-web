import React from 'react';
import TagLink from '../TagLink';
import styles from './tag-link-list.less';
import { TagProps } from '@/interfaces/Data';

export interface TagLinkProps {
  tags: TagProps[];
}

const TagLinkList: React.FC<TagLinkProps> = ({ tags }) => {
  return (
    <div
      className={styles.tags}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {tags.map(tag => {
        return <TagLink {...tag} key={tag.name} />;
      })}
    </div>
  );
};

export default TagLinkList;
