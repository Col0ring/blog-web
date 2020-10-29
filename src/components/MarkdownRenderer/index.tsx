import React, { memo } from 'react';
import ReactMarkdown, { ReactMarkdownPropsBase } from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import HeadingAnchor from './components/HeadingAnchor';
const content = `# Lorem ipsum 😪
## dolor—sit—amet
~~~ts
class MyPromise<T> {
    static allSettled<T extends readonly unknown[] | readonly [unknown]>(
      values: T
    ): MyPromise<
      {
        -readonly [P in keyof T]: PromiseSettledResult<
          T[P] extends PromiseLike<infer U> ? U : T[P]
        >
      }
    >
    static allSettled<T>(
      values: Iterable<T>
    ): MyPromise<PromiseSettledResult<T extends PromiseLike<infer U> ? U : T>[]>
    // 重载函数的返回值有冲突，想不报错需要使用联合类型，这边图省事直接用 any 了
    static allSettled<T>(values: Iterable<T>): MyPromise<any> {
      // 大体写法参照 Promise.all()
      return new MyPromise((reslove) => {
        const resultArr: any[] = []
        const doneArr: boolean[] = []
        // 获取迭代器
        const iter = values[Symbol.iterator]()
        // 当前值
        let cur = iter.next()
        const resolveResult = (value: any, index: number, done?: boolean) => {
          resultArr[index] = {
            status: Status.FULFILLED,
            value
          }
          doneArr[index] = true
          if (done && doneArr.every((item) => item)) {
            reslove(resultArr)
          }
        }
        for (let i = 0; !cur.done; i++) {
          const value = cur.value
          doneArr.push(false)
          cur = iter.next()
          if (isPromise(value)) {
            value.then(
              (value) => {
                resolveResult(value, i, cur.done)
              },
              (reason) => {
                // 这里和 resolve 基本也没什么区别，修改一下状态和属性就ok了
                resultArr[i] = {
                  status: Status.REJECTED,
                  reason
                }
                doneArr[i] = true
                if (cur.done && doneArr.every((item) => item)) {
                  reslove(resultArr)
                }
              }
            )
            // 不是 thenable 直接存储
          } else {
            resolveResult(value, i, cur.done)
          }
        }
      })
    }
  }
~~~
### consectetur &amp; adipisicing
#### elit
##### elit
`;

const renderers: ReactMarkdownPropsBase['renderers'] = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        children={value}
      />
    );
  },
  heading: HeadingAnchor,
};
const MarkdownRenderer: React.FC = ({ children }) => {
  return (
    <>
      <ReactMarkdown
        renderers={renderers}
        plugins={[[gfm, { singleTilde: false }]]}
      >
        {content}
      </ReactMarkdown>
    </>
  );
};

export default memo(MarkdownRenderer);
