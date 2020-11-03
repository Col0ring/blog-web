import { Model } from '@/interfaces/Model';
import { ArticleListCardProps } from '../components/ArticleListCard';
import { TopArticleCardProps } from '../components/TopArticleCard';
export type HomeModelState = ArticleListCardProps & TopArticleCardProps;

const homeModel: Model<HomeModelState> = {
  namespace: 'home',
  state: {
    articleList: [],
    topArticleList: [],
  },
  reducers: {
    setHomeData(state, { articleList, topArticleList }) {
      return {
        ...state!,
        articleList: articleList!,
        topArticleList: topArticleList!,
      };
    },
  },
  effects: {
    *getHomeData({ page }, { call, put }) {
      const data = yield call(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            let key = 0;
            resolve({
              topArticleList: new Array(1).fill(0).map(() => ({
                id: key++,
                time: Date.now(),
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
              articleList: new Array(page).fill(0).map(() => ({
                id: key++,
                time: Date.now(),
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
            });
          }, 2000);
        });
      });
      yield put({
        type: 'setHomeData',
        ...data,
      });

      return data;
    },
  },
};

export default homeModel;
