import React, { useEffect } from 'react';
import { useSelector } from 'umi';
import { TitleBlogCard } from '@/components/BlogCard';
import { model } from './constants';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import { PageComponent } from '@/interfaces/Page';
import styles from './tags.less';
import TagLinkList from '@/components/TagLinkList';
const Tags: PageComponent = () => {
  const { tags, loading } = useSelector(({ tags, loading }) => ({
    tags: tags.tags,
    loading: loading.effects['tags/getTagsData'],
  }));
  return (
    <SsrQueueAnim>
      <TitleBlogCard loading={loading} title="标签云" className={styles.tags}>
        <TagLinkList tags={tags} />
      </TitleBlogCard>
    </SsrQueueAnim>
  );
};

Tags.getInitialProps = async ({ store }) => {
  const data = await store.dispatch({
    type: 'tags/getTagsData',
  });
  // dva 拦截
  return {
    [model.namespace]: data,
  };
};

export default Tags;
