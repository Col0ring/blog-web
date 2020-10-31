import React, { useMemo } from 'react';
import ReactMarkdown, { ReactMarkdownPropsBase } from 'react-markdown';
import { Image } from 'antd';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import HeadingAnchor from './components/HeadingAnchor';
import { useAnchor } from './Provider';
import styles from './markdown-renderer.less';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const { reset } = useAnchor();
  // 每次渲染前先重置
  reset();
  const renderers: ReactMarkdownPropsBase['renderers'] = useMemo(
    () => ({
      code: ({ language, value }) => {
        return (
          <SyntaxHighlighter
            style={vscDarkPlus}
            language={language}
            children={value}
          />
        );
      },
      link: node => {
        return (
          <a href={node.href} target="_blank" rel="noopener noreferrer">
            {node.children}
          </a>
        );
      },
      heading: node => {
        return <HeadingAnchor {...node} />;
      },
      paragraph: node => {
        if (
          node.node.children.length > 0 &&
          node.node.children[0].type === 'image'
        ) {
          return <div className="c-margin-tb-sm">{node.children}</div>;
        }
        return <p>{node.children}</p>;
      },
      image: node => {
        return <Image className={styles.image} alt={node.alt} src={node.src} />;
      },
    }),
    [],
  );

  return (
    <>
      <ReactMarkdown
        className={styles.rendererWrapper}
        renderers={renderers}
        plugins={[[gfm, { singleTilde: false }]]}
      >
        {content}
      </ReactMarkdown>
    </>
  );
};

export default MarkdownRenderer;
export * from './Provider';
export { default as Catalog } from './Catalog';
