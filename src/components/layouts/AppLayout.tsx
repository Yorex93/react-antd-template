import React, { FC, useContext, useState } from "react";
import { Layout, Drawer, Row, Col} from "antd";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import './styles/AppLayout.scss';
import AppContext from "../../lib/context/app-context";
import appConfig from "../../config"

const { Header, Footer, Sider, Content } = Layout;

interface OwnProps {
    layoutBody: () => JSX.Element,
    sideBarLeft?: () => JSX.Element,
    sideBarRight?: () => JSX.Element,

    //Drawer for Mobile View
    drawerLayout?: () => JSX.Element
}

type Props = OwnProps;

const AppLayout : FC<Props> = ({ layoutBody, sideBarLeft, sideBarRight, drawerLayout }) => {
    const isMobile = useContext(AppContext).isMobile;
    const isDesktop = !isMobile;
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    }
    return (
        <Layout className={`app-layout`}>
            { 
                isMobile && 
                <Drawer visible={!collapsed} width={280} placement={`left`} onClose={toggleSidebar}>
                    <Row type={`flex`} gutter={20} className={`app-drawer`}>
                        <Col span={24}>
                            <img src={appConfig.APP_IMAGES.logo} alt={`App Logo in sidebar`} width={`90%`} className={`logo`}/>
                        </Col>
                        <Col span={24}>
                            { drawerLayout && drawerLayout() }
                        </Col>
                    </Row>
                </Drawer> 
            }
            <Header style={{ padding: 0, height: 'auto', lineHeight: 'unset' }}>
                <AppHeader toggleSideBar = {toggleSidebar}/>
            </Header>
            <Layout>
                { 
                    sideBarLeft && isDesktop && <Sider width="240" theme="light" className={`app-sidebar`}>{ sideBarLeft() }</Sider> 
                }
                <Content>
                    { layoutBody() }
                </Content>
                { 
                    sideBarRight && isDesktop && <Sider width="240" theme="light" className={`app-sidebar`}> { sideBarRight() }</Sider> 
                }
            </Layout>
            <Footer style={{ padding: 0 }}>
                <AppFooter />
            </Footer>
      </Layout>
    )
}

export default AppLayout;
