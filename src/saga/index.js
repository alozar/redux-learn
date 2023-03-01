import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga";
import { usersWatcher } from "./usersSaga";

export function* rootWatcher() {
  yield all([countWatcher(),usersWatcher()]);
}