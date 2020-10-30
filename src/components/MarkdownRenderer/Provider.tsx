import React, { useRef, createContext, useContext, useCallback } from 'react';
import { last } from 'lodash';

export interface AnchorItem {
  anchor: string;
  level: number;
  title: string;
  children?: AnchorItem[];
}

export type AnchorList = AnchorItem[]; // TOC目录树结构

interface AnchorContextProps {
  list: AnchorList;
  reset: () => void;
  add: (item: Omit<AnchorItem, 'children'>) => void;
}

const AnchorContext = createContext<AnchorContextProps>({
  list: [],
  reset: () => {},
  add: () => {},
});

export const useAnchor = () => {
  const context = useContext(AnchorContext);
  return context;
};

export const AnchorProvider: React.FC = ({ children }) => {
  const add: AnchorContextProps['add'] = useCallback(item => {
    const list = contextValue.current.list;
    if (list.length === 0) {
      // 第一个 item 直接 push
      list.push(item);
    } else {
      let lastItem = last<AnchorItem>(list)!; // 最后一个 item
      if (item.level > lastItem.level) {
        // item 是 lastItem 的 children
        for (let i = lastItem.level + 1; i <= 6; i++) {
          const { children } = lastItem;
          if (!children) {
            // 如果 children 不存在
            lastItem.children = [item];
            break;
          }

          lastItem = last<AnchorItem>(children)!; // 重置 lastItem 为 children 的最后一个 item
          if (item.level <= lastItem.level) {
            // item level 小于或等于 lastItem level 都视为与 children 同级
            children.push(item);
            break;
          }
        }
      } else {
        // 置于最顶级
        list.push(item);
      }
    }
  }, []);
  const reset = useCallback(() => {
    contextValue.current.list = [];
  }, []);
  const contextValue = useRef<AnchorContextProps>({
    add,
    reset,
    list: [],
  });

  return (
    <AnchorContext.Provider value={contextValue.current}>
      {children}
    </AnchorContext.Provider>
  );
};
