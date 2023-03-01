import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USERS, addUsersCreator } from '../store/usersReducer';

//Запрос к апи
const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUsersWorker(action) {
  console.log({ mes: "fetchUsersWorker", action });
  const data = yield call(fetchUsersFromApi);
  console.log({ mes: "fetchUsersWorker", data });
  const json = yield call(() => new Promise(res => res(data.json())));
  yield put(addUsersCreator(json));
}

export function* usersWatcher() {
  console.log({ mes: "usersWatcher" });
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}