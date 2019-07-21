import { all, call, fork, put, takeEvery, take, cancel, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { AppActions, AppNotification } from './types'
import { setAds, addNotification } from './actions'
import { AxiosResponse} from "axios";
import HTTPClient from '../../utils/http-client';
import { AppAdvertisement } from '../../types/adverts';
import appSocket from "../../sockets";
import { UserActionTypes } from '../user/types';
  
function subscribe(socket: SocketIOClient.Socket) {
    return eventChannel(emit => {
        socket.on('notification', (notification: AppNotification) => {
            console.log("Notification Received", { notification });
            emit(addNotification(notification));
        });
      return () => {};
    });
}

function* read(socket: SocketIOClient.Socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
      let action = yield take(channel);
      yield put(action);
    }
  }
  
function* write(socket: SocketIOClient.Socket) {
    while (true) {
        const { payload } = yield take(AppActions.SEND_MESSAGE);
        socket.emit('message', payload);
    }
}

function* handleIO(socket: SocketIOClient.Socket) {
    yield fork(read, socket);
    yield fork(write, socket);
}

function* setUpSockets({ payload }: any) {
    while (true) {
        appSocket.emit('notifications', { username: payload.username });
        const task = yield fork(handleIO, appSocket);
        yield take(UserActionTypes.LOGOUT_SUCCESS);
        yield cancel(task);
        appSocket.emit('logout');
    }
}


function* getAdverts() {
    try {
        let url = "";
        if(!url){
            // Hard code ads
            return yield put(setAds({
                feature1: [],
            }))
        }
        const res: AxiosResponse<AppAdvertisement> = yield call(HTTPClient.get, url);
        if (res.status === 200) {
            yield put(setAds(res.data))
        }
    } catch (err) {
        
    }
}



function* watchFetchAdverts() {
    yield takeEvery(AppActions.SUBSCRIBE_NOTIFICATIONS, setUpSockets)
}

function* watchSubscriptions() {
    yield takeLatest(AppActions.FETCH_ADVERTS, getAdverts)
}

function* appSaga() {
    yield all([fork(watchFetchAdverts), fork(watchSubscriptions)])
}

export default appSaga;
