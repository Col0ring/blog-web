import React, { useState, useRef, useEffect } from 'react';
import { Input, AutoComplete } from 'antd';
import classnames from 'classnames';
import { SearchOutlined } from '@ant-design/icons';
import styles from './search.less';
export interface SearchProps {
  hide: boolean;
}

const Search: React.FC<SearchProps> = ({ hide }) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchBoxClassName = classnames(styles.searchBox, {
    [styles.md]: hide,
    [styles.active]: active,
  });
  useEffect(() => {
    if (active) {
      inputRef.current?.focus();
    }
  }, [active]);
  return (
    <AutoComplete className={styles.search}>
      {/* <Input
        prefix={
          <SearchOutlined
            className={styles.searchIcon}
            onClick={() => {
              console.log(123);
              setActive(!active);
            }}
          />
        }
      /> */}
      <div>
        <div className={searchBoxClassName}>
          <SearchOutlined
            className={styles.searchIcon}
            onClick={() => {
              setActive(active => !active);
            }}
          />
          <input
            ref={inputRef}
            onBlur={() => {
              setActive(false);
            }}
          />
        </div>
      </div>
    </AutoComplete>
  );
};

export default Search;
