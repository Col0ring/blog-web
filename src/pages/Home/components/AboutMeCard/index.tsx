import React from 'react';
import { Link } from 'umi';
import { Avatar, Space } from 'antd';
import { QqOutlined, GithubOutlined, GoogleOutlined } from '@ant-design/icons';
import styles from './about-me-card.less';
export interface AboutMeCardProps {}

const AboutMeCard: React.FC<AboutMeCardProps> = () => {
  return (
    <div className={styles.aboutMeCard}>
      <div className={styles.avatarContainer}>
        <Avatar
          className={styles.avatar}
          src={require('@/assets/avatar.jpg')}
        />
        <span className={styles.name}>Col0ring</span>
        <span className={styles.desc}>Don't aim for the perfect softsare.</span>
      </div>
      <div className={styles.articleInfo}>
        <Link to="/" className={styles.content}>
          <span>文章</span>
          <span>40</span>
        </Link>
        <Link to="/" className={styles.content}>
          <span>标签</span>
          <span>40</span>
        </Link>
        <Link to="/" className={styles.content}>
          <span>分类</span>
          <span>40</span>
        </Link>
      </div>
      <div className={styles.socialAccounts}>
        <Space>
          <QqOutlined />
          <GithubOutlined />
          <GoogleOutlined />
        </Space>
      </div>
    </div>
  );
};

export default AboutMeCard;
