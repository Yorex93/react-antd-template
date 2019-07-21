import { Reducer } from "redux";
import { combineReducers, Store, createStore, applyMiddleware } from "redux";
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userSaga, userReducer } from "./user";
import { appReducer } from "./application";
import { IUserState } from "./user/types";
import { IApplicationState } from "./application/types";
import appSaga from "./application/sagas";


export interface RootState{
    userState: IUserState,
    appState: IApplicationState,
}

export const rootReducer : Reducer<RootState> = combineReducers<RootState>({
    userState: userReducer,
    appState: appReducer,
});


export function* rootSaga() {
    yield all([
        fork(userSaga), fork(appSaga)
    ]);
}


export default function configureStore(history: History, initialState: RootState): Store<RootState> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
    ]

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(rootSaga);
    return store
}

