import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  useCallback,
  memo,
} from 'react';
import { last } from 'lodash';

interface AnchorItem {
  anchor: string;
  level: number;
  title: string;
  children?: AnchorItem[];
}

type AnchorList = AnchorItem[]; // TOC目录树结构

interface AnchorContextProps {
  list: AnchorList;
  add: (item: Omit<AnchorItem, 'children'>) => void;
}

const AnchorContext = createContext<AnchorContextProps>({
  list: [],
  add: () => {},
});

export const useAnchor = () => {
  const context = useContext(AnchorContext);
  return context;
};

export const AnchorProvider: React.FC = memo(({ children }) => {
  const [item, setItem] = useState<AnchorItem>({} as AnchorItem);
  const visited = useRef<Record<string, boolean>>({});
  const add: AnchorContextProps['add'] = useCallback(item => {
    if (visited.current[item.anchor]) {
      return;
    } else {
      visited.current[item.anchor] = true;
    }
    const list = value.current.list;
    if (list.length === 0) {
      // 第一个 item 直接 push
      list.push(item);
    } else {
      let lastItem = last<AnchorItem>(list)!; // 最后一个 item
      if (item.level > lastItem.level) {
        // item 是 lastItem 的 children
        for (let i = lastItem.level + 1; i <= 2; i++) {
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
  useEffect(() => {
    add(item);
  }, [item]);
  const value = useRef<AnchorContextProps>({
    add: setItem,
    list: [],
  });
  return (
    <AnchorContext.Provider value={value.current}>
      {children}
    </AnchorContext.Provider>
  );
});
