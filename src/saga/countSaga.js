import { put, takeEvery } from 'redux-saga/effects';
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator } from '../store/countReducer';

//Искусственная задержка
const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker(action) {
  const {type, payload} = action;
  console.log({ mes: "incrementWorker", type, payload });
  yield delay(1000);
  yield put(incrementCreator(payload));
}


function* decrementWorker(action) {
  const {type, payload} = action;
  console.log({ mes: "decrementWorker", type, payload });
  yield delay(1000);
  yield put(decrementCreator(payload));
}

export function* countWatcher() {
  console.log({ mes: "countWatcher" });
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}