import { all } from 'redux-saga/effects';
import clientMain from './clientMain';

export default function* rootSaga () {
    try {
        yield all([
            ...clientMain
        ]);
    } catch (e) {
        console.log('rootSaga error');
    }
};
