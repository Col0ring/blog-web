import { Action, Reducer } from 'redux';
import { Model as OriginModel, ReducerEnhancer } from 'dva';
type ReducersMapObject<
  State,
  S = any,
  A extends Action = Action & Partial<State>
> = {
  [K in keyof S]: Reducer<State, A>;
};
export interface Model<S = {}> extends OriginModel {
  state: S;
  reducers?: ReducersMapObject<S> | [ReducersMapObject<S>, ReducerEnhancer];
}
