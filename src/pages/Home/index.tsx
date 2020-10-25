import React from 'react';
import { IRouteComponentProps } from 'umi';
import { Row, Col, Space } from 'antd';
import {
  NotificationFilled,
  FireFilled,
  FileDoneOutlined,
  TagFilled,
} from '@ant-design/icons';
import BlogCard from '@/components/BlogCard';
import ArticleCard, { ArticleCardProps } from './components/ArticleCard';
import AboutMeCard from './components/AboutMeCard';
import { PageComponent } from '@/interface/Page';
import BulletinBoardCard from './components/BulletinBoardCard';
import NewArticleCard from './components/NewArticleCard';
import TagCard from './components/TagCard/index';

interface HomeProps extends IRouteComponentProps {
  articleList: ArticleCardProps[];
}

const Home: PageComponent<HomeProps> = ({ articleList = [] }) => {
  return (
    <div className="c-margin-t-lg">
      <Row gutter={[30, 10]}>
        <Col
          span={24}
          order={2}
          md={{
            span: 17,
            order: 1,
          }}
        >
          <BlogCard
            title={
              <Space className="c-text-xl">
                <FireFilled />
                置顶文章
              </Space>
            }
          >
            {/* <ArticleCard /> */}
          </BlogCard>
          <BlogCard
            title={
              <Space className="c-text-xl">
                <FireFilled />
                热门文章
              </Space>
            }
          >
            {articleList.map(article => {
              return (
                <ArticleCard
                  id={article.id}
                  key={article.id}
                  img={article.img}
                  desc={article.desc}
                  title={article.title}
                  tags={article.tags}
                />
              );
            })}
          </BlogCard>
        </Col>
        <Col
          span={24}
          order={1}
          md={{
            order: 2,
            span: 7,
          }}
        >
          <BlogCard>
            <AboutMeCard />
          </BlogCard>

          <BlogCard
            title={
              <Space className="c-text-xl">
                <NotificationFilled />
                博客公告
              </Space>
            }
          >
            <BulletinBoardCard />
          </BlogCard>

          <BlogCard
            title={
              <Space className="c-text-xl">
                <TagFilled />
                相关标签
              </Space>
            }
          >
            <TagCard />
          </BlogCard>

          <BlogCard
            title={
              <Space className="c-text-xl">
                <FileDoneOutlined />
                最新文章
              </Space>
            }
          >
            <NewArticleCard artileList={articleList} />
          </BlogCard>
        </Col>
      </Row>
    </div>
  );
};

Home.getInitialProps = async () => {
  return {
    articleList: new Array(8).fill({
      id: 1,
      img:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      title:
        'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle',
      desc:
        '我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介',
      tags: [
        {
          color: 'red',
          name: 'red',
        },
        {
          color: 'green',
          name: 'green',
        },
        {
          color: 'cyan',
          name: 'cyan',
        },
      ],
    }),
  };
};

export default Home;
