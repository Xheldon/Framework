import { Constants } from '../container/duck';

import { takeEvery } from 'redux-saga/effects'

function add () {
    setTimeout(() => {
        console.log('add saga finished');
    }, 1000);
}

export default [
    takeEvery(Constants.ADD, add)
];