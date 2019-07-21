import React, { FC, Suspense, lazy, useEffect, useCallback } from "react";
import { IUserState, IUser } from "../redux/user/types";
import { IApplicationState } from "../redux/application/types";
import { RouteComponentProps, Switch, Route, withRouter } from "react-router-dom";
import { RootState } from "../redux";
import { Dispatch, bindActionCreators } from "redux";
import { setAppLoading, setMobile, subscribeNotifications } from "../redux/application/actions";
import { logout, passwordChanged } from "../redux/user/actions";
import { connect } from "react-redux";
import FeatureContainer from "../components/feature";
import AppContext from "../lib/context/app-context";

// LAYOUT
const LandingPageContainer = lazy(() => import('../components/landing-page'));

interface AppRoutesStateProps{
    userState: IUserState;
    appState: IApplicationState
}

interface AppRoutesDispatchProps{
    setAppLoading: (isLoading: boolean) => void,
    setMobile: (isMobile: boolean) => void,
    passwordChanged: () => void,
    subscribeNotifications: (user: IUser) => void,
    logout: () => void
}

type Props = AppRoutesStateProps & AppRoutesDispatchProps & RouteComponentProps;

const Routes : FC<Props> = (props) => {
    const setMobile = props.setMobile;
    const sub = props.subscribeNotifications;

    const updateDimensions = useCallback(
        () => {
            if(window.screen.availWidth < 992){
                setMobile(true);
            } else {
                setMobile(false);
            }
        },
        [setMobile],
      );

    useEffect(() => {
        updateDimensions();    
        window.addEventListener("resize", () => updateDimensions());
        return () => {
            window.removeEventListener("resize", () => updateDimensions());
        }
    }, [updateDimensions]);

    useEffect(() => {
        sub({
           firstName: "",
           lastName: "",
           username: 'Test',
           email: ''
       }) 
    }, [sub])

   

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppContext.Provider value={{ isMobile: props.appState.isMobile }}>
                <Switch>
                    <Route path={`/`} render={() => <LandingPageContainer />} exact />
                    <Route path={`/feature`} render={() => <FeatureContainer />} exact />
                    <Route render={() => <div>Not found</div>} exact />
                </Switch>
            </AppContext.Provider>
        </Suspense>
    )
}

const mapStateToProps = (state: RootState): AppRoutesStateProps => {
    return {
        userState: state.userState,
        appState: state.appState
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setAppLoading: setAppLoading,
    logout: logout,
    setMobile: setMobile,
    passwordChanged: passwordChanged,
    subscribeNotifications: subscribeNotifications
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
