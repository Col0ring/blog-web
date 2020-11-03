import React, { useCallback } from 'react';
import qs from 'querystring';
import { useHistory, useLocation } from 'umi';
import { Pagination } from 'antd';
import { PaginationProps } from 'antd/es/pagination';

const BlogPagination: React.FC<PaginationProps> = ({ ...props }) => {
  const history = useHistory();
  const { query } = useLocation();
  const onChange: PaginationProps['onChange'] = useCallback(
    page => {
      history.push({
        search: qs.stringify({
          ...query,
          p: page,
        }),
      });
    },
    [query, history],
  );
  return (
    <div className="c-flex c-jc-center c-margin-t-xl">
      <Pagination
        onChange={onChange}
        showSizeChanger={false}
        pageSize={8}
        {...props}
      />
    </div>
  );
};

export default BlogPagination;
