import { all } from 'redux-saga/effects';
import postSagas from './post';

export default function* rootSaga() {
    yield all([
        postSagas()
    ])
}