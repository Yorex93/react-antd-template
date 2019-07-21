import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { AppActions } from './types'
import { setAds } from './actions'
import { AxiosResponse} from "axios";
import HTTPClient from '../../utils/http-client';
import { AppAdvertisement } from '../../types/adverts';


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
    yield takeEvery(AppActions.FETCH_ADVERTS, getAdverts)
}

function* appSaga() {
    yield all([fork(watchFetchAdverts)])
}

export default appSaga;
