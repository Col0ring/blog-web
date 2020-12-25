import { Model } from '@/interfaces/Model';
import { model } from '../constants';
import { TagProps } from '@/interfaces/Data';
export interface TagsModelState {
  tags: TagProps[];
}
const tagsModel: Model<TagsModelState> = {
  namespace: model.namespace,
  state: {
    tags: [],
  },
  reducers: {
    setTagsData(state, { tags }) {
      return {
        ...state!,
        tags: tags!,
      };
    },
  },
  effects: {
    *getTagsData({ page }, { call, put }) {
      const data = yield call(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            let key = 0;
            resolve({
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
            });
          }, 2000);
        });
      });
      yield put({
        type: 'setTagsData',
        ...data,
      });
      return data;
    },
  },
};

export default tagsModel;
