import Head from "next/head";
import { Layout, Menu, Breadcrumb, Button, Affix, Typography } from "antd";
import { Row, Col } from "antd";
import Link from "next/link";

import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import React from "react";
import SelectLanguage from "../components/SelectLanguage";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Home() {
    const [collapsed, setCollapsed] = React.useState(false);

    const toggle = () => {
        setCollapsed((collapsed) => !collapsed);
    };

    return (
        <>
            <Head>
                <meta
                    key="title"
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <title>Главная страница</title>
            </Head>
            <Layout>
                <Header
                    className="header"
                    style={{
                        position: "fixed",
                        zIndex: 1,
                        width: "100%",
                        padding: 0,
                        display: "flex",
                        justifyContent: "space-between",
                        height: "50px",
                    }}
                >
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{
                            display: "flex",
                            alignItems: "center",

                        }}
                    >
                        <div
                            key="1"
                            className="trigger"
                            onClick={toggle}
                            style={{ color: "white", margin: "15px" }}
                        >
                            {React.createElement(
                                collapsed
                                    ? MenuUnfoldOutlined
                                    : MenuFoldOutlined
                            )}
                        </div>
                        <h2 style={{ color: "white", margin: "0px", }}>Название</h2>
                    </Menu>

                    <SelectLanguage color="white" />
                </Header>
                <Layout style={{ marginTop: 50 }}>
                    <Sider
                        width={200}
                        className="site-layout-background"
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{ height: "100%", borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                icon={<UserOutlined />}
                                title="subnav 1"
                            >
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                icon={<LaptopOutlined />}
                                title="subnav 2"
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                icon={<NotificationOutlined />}
                                title="subnav 3"
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: "0 21px 24px", height: "100%" }}>
                        <Row>
                            <Col span={18} push={6}>
                                <Content
                                    style={{
                                        margin: "21px 16px 0",
                                        backgroundColor: "white",
                                        height: "200em",
                                    }}
                                >
                                    <div
                                        className="site-layout-background"
                                        style={{ padding: 24, minHeight: 360 }}
                                    >
                                        content
                                        <Button type="primary" block>
                                            <Link href="/auth">Выход</Link>
                                        </Button>
                                    </div>
                                </Content>
                            </Col>
                            <Col span={6} pull={18}>
                                <Affix offsetTop={72}>
                                    <Content
                                        className="site-layout-background"
                                        style={{
                                            backgroundColor: "white",
                                            height: "100vh",
                                            padding: 24,
                                            minHeight: 360,
                                            maxWidth: "inherit",
                                            display: "block",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        contentcontentcontentcontentcontentcontentcontentcontent
                                        tentcontentcontentcontentcontentcontentcontent
                                    </Content>
                                </Affix>
                            </Col>
                        </Row>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}
