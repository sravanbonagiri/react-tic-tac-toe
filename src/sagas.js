import { put, takeEvery, all, take } from 'redux-saga/effects'
import firebase from './Firebase'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    const payload = yield take("CLICK");
    console.log(payload);
}

function* handleSubmitAsync(){
    const payload = yield take("UPDATE")
    firebase.database().ref("tic-tac-toe").push({
        game_history: payload["state"]
      });
    console.log("Saved data to Firebase")
}

export {
    helloSaga,
    incrementAsync,
    watchIncrementAsync,
    handleSubmitAsync
}
