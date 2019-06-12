
export enum Constants {
    ADD = 'Main/Add',
};

export interface State {
    num: number,
}

export const initialState = {
    num: 0
}

// actions
export const add = (num: number) => ({
    type: Constants.ADD,
    num,
});

// reducer
export default function reducer(
    state: State = initialState,
    action: any
): State {
    Object.freeze(state);
    console.log(state);
    switch (action.type) {
        case Constants.ADD:
            return {
                ...state,
                num: action.num,
            };
        default:
            return state;
    }
}
