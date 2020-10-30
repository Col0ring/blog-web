import React from 'react';
import { useAnchor } from '../../Provider';
import styles from './heading-anchor.less';
const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

interface HeadingProps {
  level: number;
  id: string;
}
const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) => {
  return React.createElement(elements[level] || elements[0], props, children);
};

interface HeadingAnchorProps {
  level: number;
}
const HeadingAnchor: React.FC<HeadingAnchorProps> = ({ children, level }) => {
  const { add } = useAnchor();
  const childrenArr = React.Children.toArray(children);
  if (childrenArr && childrenArr.length > 0) {
    let nodeValue = '';
    if (React.isValidElement(childrenArr[0])) {
      nodeValue = childrenArr[0].props.value;
      const anchor = '#' + nodeValue + '_' + level;
      const id = nodeValue + '_' + level;
      add({
        level,
        anchor,
        title: nodeValue,
      });
      return (
        <a href={anchor} className={styles.title}>
          <Heading level={level} id={id}>
            {children}
          </Heading>
        </a>
      );
    }
  }
  return <>{children}</>;
};

export default HeadingAnchor;
