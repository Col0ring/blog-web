import React from 'react';
import { Anchor } from 'antd';
import { useAnchor, AnchorList } from '../Provider';
const { Link } = Anchor;
function render(items: AnchorList) {
  // 递归 render
  return items.map(item => (
    <Link key={item.anchor} href={`${item.anchor}`} title={item.title}>
      {item.children && render(item.children)}
    </Link>
  ));
}

const Catalog: React.FC = () => {
  const { list } = useAnchor();
  return (
    <Anchor affix={false} showInkInFixed>
      {render(list)}
    </Anchor>
  );
};

export default Catalog;
