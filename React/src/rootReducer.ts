import { combineReducers } from 'redux';

import clientMain from './container/duck';

const allReducers = {
    clientMain,
};

// 为每个组件使用 State 声明类型, 而不用每个组件都声明一次
export type State = {
    [P in keyof typeof allReducers]: ReturnType<typeof allReducers[P]>
}

export default combineReducers(allReducers);
