import { Button, Col, DatePicker, Input, InputNumber, Popover, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { CalendarOutlined } from '@ant-design/icons';
import '../../assets/css/checkout.css';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Trini from '../../assets/images/checkout/Trini_Arnold_Votay1 2.png';
import CheckoutModal from '../../components/modalFail/modal';
import dayjs from 'dayjs';

const CheckoutPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [name, setName] = useState(params.get('name') || '');
  const [email, setEmail] = useState(params.get('email') || '');
  const [date, setDate] = useState(params.get('date') || '');
  const [phoneNumber, setPhoneNumber] = useState(params.get('phoneNumber') || '');
  const [quantity, setQuantity] = useState(parseInt(params.get('quantity') || '0', 10));
  const [price, setPrice] = useState(quantity * 90);

  //Tự động thay đổi giá tiền và định dạng giá tiền
  useEffect(() => {
    setPrice(quantity * 90);
  }, [quantity]);
  const formatValue = (value: number): string => {
    const formattedValue = (value * 1000).toLocaleString('vi-VN');
    return `${formattedValue} vnđ`;
  };
  //Truyền value
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  //Định Dạng số thẻ
  const [cardName, setCardName] = useState('');

  const [cardCVV, setCardCVV] = useState<string | null>(null);
  const [cardNumber, setcarNumber] = useState('');
  const handleCardName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    const sanitizedValue = value.replace(/[^A-Za-z\s]/g, '');
    setCardName(sanitizedValue);
  };

  // const handleCardDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCardDate(event.target.value);
  // };

  const handleCardCVV = (value: string | null) => {
    if (value !== null) {
      setCardCVV(value);
    }
  };
  const navigate = useNavigate();
  const handleCarNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/\s/g, '');
    const formattedValue = sanitizedValue.replace(/(\d{4})/g, '$1 ');

    setcarNumber(formattedValue);
  };
  //định dạng input chứa ngày tháng
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [cardDate, setCardDate] = useState<string>('');
  const handleCalendarClick = () => {
    setVisible(true);
  };

  const handleCardDate = (value: dayjs.Dayjs | null, dateString: string) => {
    setSelectedDate(value);
    setCardDate(dateString);
    setVisible(false);
  };

  // Hiện thông báo khi lỗi
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleFormSubmit = () => {
    if (!name || quantity <= 0 || !email || !date || !phoneNumber || !cardNumber || !cardName || !cardDate || !cardCVV) {
      setModalVisible(true);
    } else {
      navigate(`/checkout-detail?quantity=${quantity}&date=${date}`);
    }
    console.log(quantity);
  };
  return (
    <Content className='checkout'>
      <section className='checkout-section'>
        <div className='checkout-section-header'>
          <h1>Thanh Toán</h1>
        </div>
        <div className='checkout-section-content'>
          <Row>
            <Col className='checkout-content1' span={13}>
              <div className='checkout-content1-dotted-border'>
                <div className='checkout-content1-input'>
                  <div className='checkout-content1-title'>
                    <div className='checkout-content1-title-item'>
                      <div className='checkout-content1-dotted-border-item'>
                        <h1 style={{ fontSize: '28px', color: 'white', margin: '12px', fontFamily: 'iCielKoni' }}>Vé Cổng - Vé Gia Đình</h1>
                      </div>
                    </div>
                  </div>

                  <Row>
                    <Col style={{ marginRight: '30px' }} span={9}>
                      <h3>Số Tiền Thanh Toán</h3>
                      <Input type='text' id='price' readOnly style={{ marginTop: '-10px' }} value={formatValue(price)} />
                    </Col>
                    <Col style={{ marginRight: '30px' }} span={3}>
                      <h3>Số Vé</h3>
                      <Input type='number' id='ticketCount' style={{ marginTop: '-10px' }} value={quantity} onChange={handleQuantityChange} />
                    </Col>
                    <Col span={8}>
                      <h3>Ngày Sử Dụng</h3>
                      <Input style={{ marginTop: '-10px' }} value={date} onChange={handleDateChange} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '-30px' }}>
                    <Col span={13}>
                      <h3>Thông Tin Liên Hệ</h3>
                      <Input style={{ marginTop: '-10px' }} value={name} onChange={handleNameChange} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '-30px' }}>
                    <Col span={8}>
                      <h3>Điện Thoại</h3>
                      <Input style={{ marginTop: '-10px' }} value={phoneNumber} onChange={handlePhoneNumberChange} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '-30px' }}>
                    <Col span={13}>
                      <h3>Email</h3>
                      <Input style={{ marginTop: '-10px' }} value={email} onChange={handleEmailChange} />
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <img src={Trini} className='checkout-content1-icon' style={{}} alt='' />
              </div>
            </Col>
            <Col className='checkout-section-break'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                // width="142"
                height='500'
                viewBox='0 0 142 584'
                fill='none'>
                <path
                  d='M139.686 578.711L97.3042 572.472L81.1709 547.233L75.184 542.53V41.2605L81.1709 36.5576L97.3042 11.3185L139.686 5.07928C139.686 5.07928 149.832 0.940703 114.603 0.0314696C85.9604 -0.720999 70.2052 22.6369 70.2052 22.6369C60.4685 34.551 56.7188 37.4668 39.7662 18.4043C22.8135 -0.658295 0 0.0314696 0 0.0314696L29.6513 23.7029L39.7662 42.4833V541.339L29.6513 560.119L0 583.791C0 583.791 22.8451 584.512 39.7662 565.418C56.7188 546.355 60.4685 549.271 70.2052 561.185C70.2052 561.185 85.9604 584.543 114.603 583.791C149.801 582.85 139.686 578.711 139.686 578.711ZM57.2382 519.805C50.4635 519.805 45.0122 514.349 45.0122 507.64C45.0122 500.899 50.495 495.475 57.2382 495.475C63.9815 495.475 69.4643 500.93 69.4643 507.64C69.4958 514.349 64.013 519.805 57.2382 519.805ZM57.2382 483.279C50.4635 483.279 45.0122 477.823 45.0122 471.114C45.0122 464.373 50.495 458.949 57.2382 458.949C63.9815 458.949 69.4643 464.404 69.4643 471.114C69.4958 477.823 64.013 483.279 57.2382 483.279ZM57.2382 448.069C50.4635 448.069 45.0122 442.614 45.0122 435.905C45.0122 429.164 50.495 423.74 57.2382 423.74C63.9815 423.74 69.4643 429.195 69.4643 435.905C69.4958 442.614 64.013 448.069 57.2382 448.069ZM57.2382 411.7C50.4635 411.7 45.0122 406.245 45.0122 399.535C45.0122 392.794 50.495 387.37 57.2382 387.37C63.9815 387.37 69.4643 392.826 69.4643 399.535C69.4958 406.245 64.013 411.7 57.2382 411.7ZM57.2382 376.303C50.4635 376.303 45.0122 370.847 45.0122 364.138C45.0122 357.397 50.495 351.973 57.2382 351.973C63.9815 351.973 69.4643 357.428 69.4643 364.138C69.4958 370.879 64.013 376.303 57.2382 376.303ZM57.2382 340.121C50.4635 340.121 45.0122 334.666 45.0122 327.957C45.0122 321.216 50.495 315.792 57.2382 315.792C63.9815 315.792 69.4643 321.247 69.4643 327.957C69.4958 334.666 64.013 340.121 57.2382 340.121ZM57.2382 304.567C50.4635 304.567 45.0122 299.112 45.0122 292.402C45.0122 285.661 50.495 280.237 57.2382 280.237C63.9815 280.237 69.4643 285.693 69.4643 292.402C69.4958 299.112 64.013 304.567 57.2382 304.567ZM57.2382 268.512C50.4635 268.512 45.0122 263.056 45.0122 256.347C45.0122 249.637 50.495 244.182 57.2382 244.182C63.9815 244.182 69.4643 249.637 69.4643 256.347C69.4643 263.056 64.013 268.512 57.2382 268.512ZM57.2382 232.832C50.4635 232.832 45.0122 227.377 45.0122 220.667C45.0122 213.926 50.495 208.502 57.2382 208.502C63.9815 208.502 69.4643 213.958 69.4643 220.667C69.4958 227.377 64.013 232.832 57.2382 232.832ZM57.2382 196.933C50.4635 196.933 45.0122 191.477 45.0122 184.768C45.0122 178.027 50.495 172.603 57.2382 172.603C63.9815 172.603 69.4643 178.058 69.4643 184.768C69.4958 191.477 64.013 196.933 57.2382 196.933ZM57.2382 161.065C50.4635 161.065 45.0122 155.61 45.0122 148.9C45.0122 142.159 50.495 136.735 57.2382 136.735C63.9815 136.735 69.4643 142.191 69.4643 148.9C69.4958 155.61 64.013 161.065 57.2382 161.065ZM57.2382 125.354C50.4635 125.354 45.0122 119.899 45.0122 113.189C45.0122 106.48 50.495 101.024 57.2382 101.024C63.9815 101.024 69.4643 106.48 69.4643 113.189C69.4643 119.899 64.013 125.354 57.2382 125.354ZM57.2382 89.3298C50.4635 89.3298 45.0122 83.8744 45.0122 77.1649C45.0122 70.4554 50.495 65 57.2382 65C63.9815 65 69.4643 70.4554 69.4643 77.1649C69.4643 83.8744 64.013 89.3298 57.2382 89.3298Z'
                  fill='#FDE8B3'
                />
              </svg>
            </Col>
            <Col className='checkout-section-content2' style={{ width: '460px' }}>
              <div className='checkout-content1-dotted-border'>
                <div className='checkout-content2-input'>
                  <div className='checkout-content2-title'>
                    <div className='checkout-content2-title-item'>
                      <div className='checkout-content2-dotted-border-item'>
                        <h1 style={{ fontSize: '28px', color: 'white', margin: '12px', fontFamily: 'iCielKoni' }}>Thông Tin Thanh Toán</h1>
                      </div>
                    </div>
                  </div>
                  <Row>
                    <h3>Số Thẻ</h3>
                    <Input value={cardNumber} onChange={handleCarNumber} maxLength={19} style={{ marginTop: '-10px' }} />
                  </Row>
                  <Row style={{ marginTop: '-30px' }}>
                    <h3>Họ Và Tên Chủ Thẻ</h3>
                    <Input value={cardName} onChange={handleCardName} type='text' style={{ marginTop: '-10px' }} />
                  </Row>
                  <Row style={{ marginTop: '-30px' }}>
                    <h3>Ngày Hết Hạn</h3>
                    <Input value={cardDate} onChange={(event) => setCardDate(event.target.value)} style={{ width: '85%' }} maxLength={5} />
                    <Popover content={<DatePicker onChange={handleCardDate} format='MM/YY' allowClear={false} />} trigger='click' visible={visible} placement='topRight'>
                      <CalendarOutlined className='vector3-icon-calendar' onClick={handleCalendarClick} />
                    </Popover>
                  </Row>
                  <Row style={{ marginTop: '-30px' }}>
                    <Col>
                      <h3>CVV/CVC</h3>
                      <InputNumber
                        type='password'
                        maxLength={3}
                        value={cardCVV}
                        onChange={handleCardCVV}
                        style={{
                          marginTop: '-10px',
                          width: '30%',
                          fontSize: 'x-large',
                          borderRadius: '10px',
                          boxShadow: '-1px 3px 3px 0px rgba(178, 91, 11, 0.5) inset',
                        }}
                      />
                    </Col>
                  </Row>
                  <div className='checkout-button'>
                    {/* {contextHolder} */}
                    <Button
                      style={{
                        width: '80%',
                        height: '55px',
                        background: '#FF000A',
                        margin: '20px 0px 0px 50px',
                      }}
                      onClick={handleFormSubmit}>
                      <h3 style={{ fontSize: '20px', color: 'white', margin: '5px' }}>Đặt Vé</h3>
                    </Button>
                    <CheckoutModal inputValue={name || email || date || phoneNumber || cardName || cardNumber || cardDate} isOpen={modalVisible} onClose={handleModalClose} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default CheckoutPage;
