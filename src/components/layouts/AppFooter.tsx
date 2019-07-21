import React, { useContext } from "react";
import './styles/AppFooter.scss';
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import AppContext from "../../lib/context/app-context";
import appConfig from '../../config';

const AppFooter = () => {
    const isMobile = useContext(AppContext).isMobile;
    return (
        <>
        <Row className={`app-footer`}>
            <Row type={`flex`} gutter={24}>
                <Col span={isMobile ? 20 : 18} offset={isMobile ? 2 : 3}>
                    <Col md={6} xs={24} className={`links`}>
                        <img src={appConfig.APP_IMAGES.logo} alt={`Western Lotto Logo`} width={`80%`} className={`logo`}/>
                    </Col>
                    <Col md={6} xs={12} className={`links`}>
                        <span className={`heading`}>Western Lotto</span>
                        <Link to={`/about`}>About Us</Link>
                        <Link to={`/terms-and-conditions`}>Terms &amp; Conditions</Link>
                        <Link to={`/privacy-policy`}>Privacy Policy</Link>
                        <Link to={`/responsible-gaming`}>Responsible Gaming</Link>
                        <Link to={`/cookie-policy`}>Cookie Policy</Link>
                    </Col>
                    <Col md={6} xs={12} className={`links`}>
                        <span className={`heading`}>How to play</span>
                        <Link to={`/help/faq`}>FAQ</Link>
                        <Link to={`/help/lotto`}>Lotto</Link>
                        <Link to={`/help/games`}>Games</Link>
                    </Col>

                    <Col md={6} xs={24} className={`links`}>
                        <span className={`heading`}>Contact Us</span>
                        <Link to={`#`}>
                            Telephone: {appConfig.CONTACT_INFO.telephone[0]}
                        </Link>
                        <Link to={`#`}>
                            Email: {appConfig.CONTACT_INFO.email[0]}
                        </Link>
                    </Col>
                </Col>
            </Row>
        </Row>
        <Row  className={`app-footer-secondary`}>

        </Row>
        </>
    );
}

export default AppFooter;