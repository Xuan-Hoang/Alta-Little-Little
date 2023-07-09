import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Row, Col, Image, Button } from "antd";
import "../Header/header.css";
import Logo from "../Header/images/logo(ngang).png";
import { PhoneOutlined } from "@ant-design/icons";

const { Header } = Layout;

const CustomHeader = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <Header className="header">
      <Row>
        <Col span={8} className="centered-col">
          <div className="centered-content">
            <Image src={Logo} />
          </div>
        </Col>
        <Col span={3} className="centered-col">
          <div className="centered-content">
            <Button
              className={`button ${activeTab === "home" ? "active" : ""}`}
              onClick={() => handleTabClick("home")}
              type="text"
            >
              Trang chủ
            </Button>
          </div>
        </Col>
        <Col span={3} className="centered-col">
          <div className="centered-content">
            <Button
              className={`button ${activeTab === "event" ? "active" : ""}`}
              onClick={() => handleTabClick("event")}
              type="text"
            >
              Sự kiện
            </Button>
          </div>
        </Col>
        <Col span={3} className="centered-col">
          <div className="centered-content">
            <Button
              className={`button ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => handleTabClick("contact")}
              type="text"
            >
              Liên Hệ
            </Button>
          </div>
        </Col>
        <Col span={6}>
          <div className="centered-content">
            <p>
              <PhoneOutlined className="icon-header" rotate={100} />
              <span style={{ padding: "5px", color: "white" }}>0985900</span>
            </p>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
