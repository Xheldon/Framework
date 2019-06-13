import { combineReducers } from 'redux';

import clientMain from './container/duck';

// clientMain 的初始化值, 在各自的 container/duck 内自己定义, 因此无需再像 redux 示例文档中的那样, 在根 store 设置好初始 state, 之后传入各个子 reducer
const allReducers = {
    clientMain,
};

// 为每个组件使用 State 声明类型, 而不用每个组件都声明一次
export type State = {
    [P in keyof typeof allReducers]: ReturnType<typeof allReducers[P]>
}

export default combineReducers(allReducers);
