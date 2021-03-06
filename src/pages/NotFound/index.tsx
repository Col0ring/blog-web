import React from 'react';
import { Link } from 'umi';
import { Result, Button, Space } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import SsrQueueAnim from '@/components/SsrQueueAnim';
import styles from './not-found.less';
const NotFound: React.FC = () => {
  return (
    <SsrQueueAnim>
      <div className={styles.notFound}>
        <Result
          status="404"
          title="404"
          subTitle={
            <Space>
              <CloseCircleOutlined className={styles.icon} />
              页面没有找到
            </Space>
          }
          extra={
            <Button type="primary">
              <Link to="/">回到首页</Link>
            </Button>
          }
        />
      </div>
    </SsrQueueAnim>
  );
};

export default NotFound;
