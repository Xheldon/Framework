
export enum Constants {
    ADD = 'Main/Add',
};

export interface clientMainState {
    num: number,
}

export const initialState: clientMainState = {
    num: 0
}

// actions
export const add = (num: number) => ({
    type: Constants.ADD,
    num,
});

// reducer
export default function reducer(
    state: clientMainState = initialState,
    action: any
): clientMainState {
    Object.freeze(state);
    console.log(state);
    switch (action.type) {
        case Constants.ADD:
            return {
                ...state,
                num: state.num + action.num,
            };
        default:
            return state;
    }
}
