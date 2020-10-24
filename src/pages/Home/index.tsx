import React from 'react';
import { Link } from 'umi';
import { Row, Col } from 'antd';
import BlogCard from '@/components/BlogCard';
const Home = () => {
  return (
    <Row gutter={30}>
      <Col span={15}>
        <BlogCard>Home</BlogCard>
      </Col>
      <Col span={9}>
        <Link to="/">跳转</Link>
      </Col>
    </Row>
  );
};

export default Home;
