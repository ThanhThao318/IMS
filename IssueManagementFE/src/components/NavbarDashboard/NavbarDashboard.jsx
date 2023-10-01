import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const NavbarDashboard = ({ dashboardBody }) => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    getItem("Dashboard", "0", <DashboardOutlined />),
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="main-sidebar-header">
          <a href="index.html" className="header-logo">
            <img
              src="https://spruko.com/demo/ynex/dist/assets/images/brand-logos/desktop-dark.png"
              alt="logo"
              className="desktop-dark mx-auto d-block"
            />
            <img
              src="https://spruko.com/demo/ynex/dist/assets/images/brand-logos/toggle-dark.png"
              alt="logo"
              className="toggle-dark mx-auto d-block"
            ></img>
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={(item) => {
            console.log(item.key);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Space size={24}>
            <Badge dot offset={[-4, 4]}>
              <Avatar shape="circle" icon={<UserOutlined />} />
            </Badge>
          </Space>
        </Header>
        <Content
          style={{
            padding: "24px 16px 0",
            overflow: "initial",
            backgroundColor: "#F0F1F7",
          }}
        >
          {dashboardBody}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
