import React, { FC, useContext } from "react";
import { Row, Button } from "antd";
import "./styles/UserAuthBar.scss";
import AppContext from "../../lib/context/app-context";

const UserAuthBar : FC<{}> = () => {
    const isMobile = useContext(AppContext).isMobile;

    return (
        <Row type={`flex`} justify={`end`} className={`app-user-auth-bar`} gutter={10}>
            {/* Dont show inputs on */}
            { !isMobile && <>
                <input placeholder={`username`} />
                <input placeholder={`password`} />
                </>
            }
            <Button className={`login-btn`}>Login</Button>
            <Button className={`register-btn`}>Register</Button>
        </Row>
    )
}

export default UserAuthBar;
