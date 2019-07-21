import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { UserActionTypes, ILoginRequest } from './types'
import { logoutSuccess} from './actions'
import { AxiosResponse} from "axios";
import { IAction } from '../../types/redux/action';
import HTTPClient from '../../utils/http-client';



function* handleLogin(action: IAction<ILoginRequest>) {
    if(!action.payload){
        return;
    }
    yield;
}


function* handleLogout() {
    localStorage.clear();
    try {
        const res: AxiosResponse<any> = yield call(HTTPClient.post, '/logout', {});
        if (res.status !== 200) {
            yield put(logoutSuccess())
        } else {
            localStorage.clear();
            yield put(logoutSuccess())
        }
    } catch (err) {
        yield put(logoutSuccess())
    }
}



function* watchLoginRequest() {
    yield takeEvery(UserActionTypes.LOGIN_REQUEST, handleLogin)
}

function* watchLogoutRequest() {
    yield takeEvery(UserActionTypes.LOGOUT, handleLogout)
}

function* userSaga() {
    yield all([fork(watchLoginRequest), fork(watchLogoutRequest)])
}

export default userSaga;
