import { State } from '../rootReducer';

export const clientMainNumSelector = function (state: State): number {
    return state.clientMain.num;
}