import React, { FC, useContext } from "react";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import {LinkProp} from "../../types/navlink"
import AppContext from "../../lib/context/app-context";

interface AppHeaderSecondaryProps {
    navLinks: LinkProp[],
    // Component to render to right section
    renderRight?: () => JSX.Element,
    // Component to render to Left section
    renderLeft?: () => JSX.Element,
    // Component to render on mobile view
    renderMobile?: () => JSX.Element
}

const AppHeaderSecondary : FC<AppHeaderSecondaryProps> = ({ navLinks, renderLeft, renderRight, renderMobile }) => {
    const isMobile = useContext(AppContext).isMobile;
    const mobileClass = isMobile ? 'nav-mobile' : '';

    return (
        <Row type="flex" justify="center" className={mobileClass}>
            { !isMobile &&
                <>
                    <Col span={4} className={`app-header__secondary-right`}>
                        { renderLeft && renderLeft() }
                    </Col>
                    <Col span={16} className={`ul-wrapper`}>
                        <ul>
                            { navLinks.map((l, i) =>  
                                <li key={i}>
                                    { l.onClick && <NavLink to={`#`} activeClassName={`active`} onClick={l.onClick}>{l.text}</NavLink> }
                                    { !l.onClick && <NavLink to={l.to} activeClassName={`active`}>{l.text}</NavLink>}
                                </li>)
                            }
                        </ul>
                    </Col>

                    <Col span={4} className={`app-header__secondary-right`}>
                        { renderRight && renderRight() }
                    </Col>
                </>
            }
            { isMobile && renderMobile && renderMobile() }

        </Row>
    )
}

export default AppHeaderSecondary;
