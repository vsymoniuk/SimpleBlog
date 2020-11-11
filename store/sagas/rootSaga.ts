import { all } from 'redux-saga/effects';
// import chatSagas from './chat';
// import usersSagas from './users';

export default function* rootSaga() {
    yield all([
        // chatSagas(),
        // usersSagas()
    ])
}