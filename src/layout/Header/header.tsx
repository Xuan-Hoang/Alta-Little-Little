import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Image, Button } from 'antd';
import '../../assets/css/header.css';
import Logo from '../../assets/images/header/logo(ngang).png';
import { PhoneOutlined } from '@ant-design/icons';

const { Header } = Layout;

const CustomHeader = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'home';
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };
  const location = useLocation();
  useEffect(() => {
    setActiveTab(location.pathname === '/' ? 'home' : activeTab);
  }, [location.pathname, activeTab]);
  return (
    <Header className='header'>
      <Row>
        <Col span={8} className='centered-col'>
          <div className='centered-content'>
            <Image src={Logo} />
          </div>
        </Col>
        <Col span={3} className='centered-col'>
          <div className='centered-content'>
            <Button className={`button ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')} type='text'>
              Trang chủ
            </Button>
          </div>
        </Col>
        <Col span={3} className='centered-col'>
          <div className='centered-content'>
            <Button className={`button ${activeTab === 'event' ? 'active' : ''}`} onClick={() => handleTabClick('event')} type='text'>
              Sự kiện
            </Button>
          </div>
        </Col>
        <Col span={3} className='centered-col'>
          <div className='centered-content'>
            <Button className={`button ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleTabClick('contact')} type='text'>
              Liên Hệ
            </Button>
          </div>
        </Col>
        <Col span={6}>
          <div className='centered-content'>
            <p>
              <PhoneOutlined className='icon-header' rotate={100} />
              <span style={{ padding: '5px', color: 'white' }}>0985900</span>
            </p>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
