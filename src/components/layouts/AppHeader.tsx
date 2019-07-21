import React, { useContext, FC } from "react";
import './styles/AppHeader.scss';
import { Row, Col, Icon } from "antd";
import appConfig from '../../config';
import AppContext from "../../lib/context/app-context";
import { Link } from "react-router-dom";
import AppHeaderSecondary from "./AppHeaderSecondary";
import { LinkProp } from "../../types/navlink";
import DigitalClock from "../common/DigitalClock";
import UserAuthBar from "../common/UserAuthBar";
import SectionLinks from "./SectionLinks";

interface AppHeaderProps {
    toggleSideBar: () => void,
}

const AppHeader : FC<AppHeaderProps> = ({ toggleSideBar }) => {
    const isMobile = useContext(AppContext).isMobile;

    const navLinks : LinkProp[] = [
        { to: '/faq', text: 'FAQ' },
        { to: '/about', text: 'ABOUT' }
    ]

    return (
        <Row className={`app-header`}>
            <Col className={`app-header__primary`} span={24}>
                { 
                    isMobile && 
                    <Col span={3} className={`sidebar-toggle`}>
                        <Icon type="menu-unfold" onClick={() => toggleSideBar()}/>
                    </Col> 
                }
                <Col md={6} xs={6} className={`logo`}>
                    <Link to={`/`}>
                        <img src={appConfig.APP_IMAGES.logo} alt={`Logo Alt`} />
                    </Link>
                </Col>

                { 
                    !isMobile && 
                    <Col md={8} className={`nav-links`}>
                        <SectionLinks />
                    </Col> 
                }
                <Col md={10} xs={15} className={`user-details`}>
                    <UserAuthBar />
                </Col>
            </Col>

            <Col className={`app-header__secondary`} span={24}>
                <AppHeaderSecondary navLinks={navLinks} renderRight={() => <DigitalClock />} renderMobile={() => <SectionLinks />}/>
            </Col>
        </Row>
    );
}

export default AppHeader;