import React from 'react';
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
  const childrenArr = React.Children.toArray(children);
  if (childrenArr && childrenArr.length > 0) {
    let nodeValue = '';
    if (React.isValidElement(childrenArr[0])) {
      nodeValue = childrenArr[0].props.value;
      return (
        <a href={`#${nodeValue}`} className={styles.title}>
          <Heading level={level} id={nodeValue}>
            {children}
          </Heading>
        </a>
      );
    }
  }
  return <>{children}</>;
};

export default HeadingAnchor;
