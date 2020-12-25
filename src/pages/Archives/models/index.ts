import { Model } from '@/interfaces/Model';
import { ArchivesCardProps } from '../components/ArchivesCard';
import { model } from '../constants';
export type ArchivesModelState = ArchivesCardProps;

const ArchivesModel: Model<ArchivesModelState> = {
  namespace: model.namespace,
  state: {
    articleList: [],
  },
  reducers: {
    setArchivesData(state, { articleList }) {
      return {
        ...state!,
        articleList: articleList!,
      };
    },
  },
  effects: {
    *getArchivesData({ page }, { call, put }) {
      const data = yield call(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            let key = 0;
            resolve({
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
        type: 'setArchivesData',
        ...data,
      });
      return data;
    },
  },
};

export default ArchivesModel;
