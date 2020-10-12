import React, { useState, useRef, useEffect } from 'react';
import { AutoComplete } from 'antd';
import classnames from 'classnames';
import { SearchOutlined } from '@ant-design/icons';
import styles from './search.less';
export interface SearchProps {
  hide?: boolean;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ hide, className }) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchBoxClassName = classnames(styles.searchBox, className, {
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
