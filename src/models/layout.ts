import { Model } from '@/interfaces/Model';
import { LayoutProps } from '@/interfaces/Data';

export interface LayoutModelState extends LayoutProps {}

const LayoutModel: Model<LayoutModelState> = {
  namespace: 'layout',
  state: {
    newArticleList: [],
    relatedTags: [],
  },
  reducers: {
    setLayoutData(state, { newArticleList, relatedTags }) {
      return {
        ...state,
        newArticleList: newArticleList!,
        relatedTags: relatedTags!,
      };
    },
  },
  effects: {
    *getLayoutData(action, { call, put }) {
      const data = yield call(() => {
        return new Promise(resolve => {
          let key = 0;
          resolve({
            newArticleList: new Array(8).fill(0).map(() => ({
              id: key++,
              time: Date.now() - 1000000000,
              img:
                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
              title:
                'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle',
              desc:
                '我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介我是简介',
              tags: [
                {
                  color: 'red',
                  name: 'red',
                },
                {
                  color: 'green',
                  name: 'green',
                },
                {
                  color: 'cyan',
                  name: 'cyan',
                },
              ],
            })),
            relatedTags: [],
          });
        });
      });

      yield put({
        type: 'setLayoutData',
        ...data,
      });
      return data;
    },
  },
};

export default LayoutModel;
