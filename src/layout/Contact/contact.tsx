import { Content } from 'antd/es/layout/layout';
import '../../assets/css/contact.css';
import Alex from '../../assets/images/contact/Alex_AR_Lay_Do shadow 1.png';
import { Button, Col, Form, Input, Row } from 'antd';
import React, { useState, ChangeEvent } from 'react';
import Address from '../../assets/Svg/address.svg';
import Phone from '../../assets/Svg/phone.svg';
import Email from '../../assets/Svg/email.svg';
import ModalSuccess from '../../components/modalSuccess/modal';
import ModalFail from '../../components/modalFail-2/modal';

const ContactPage = () => {
  const [isModalVisibleSuccess, setIsModalVisibleSuccess] = useState(false);
  const [isModalVisibleFail, setIsModalModalVisibleFail] = useState(false);
  const [formValues, setFormValues] = useState({
    contactName: '',
    contactEmail: '',
    contactPhoneNumber: '',
    contactNote: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [id]: value }));
  };

  const handleCloseModal = () => {
    setIsModalVisibleSuccess(false);
    setIsModalModalVisibleFail(false);
  };

  const handleSubmit = () => {
    // Kiểm tra nếu một trong các trường Input còn trống
    if (!formValues.contactName || !formValues.contactEmail || !formValues.contactPhoneNumber || !formValues.contactNote) {
      setIsModalModalVisibleFail(true);
    } else {
      setIsModalVisibleSuccess(true);
    }
  };

  return (
    <Content className='contact'>
      <section className='contact-section'>
        <div className='contact-section-header'>
          <h1 style={{ fontFamily: 'iCielKoni' }}>Liên Hệ</h1>
        </div>
        <div className='contact-section-content'>
          <Row>
            <Col span={13} className='contact-section-content1'>
              <div className='contact-content1-dotted-border'>
                <div className='contact-content1-text'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
                </div>
                <div className='contact-content2-input'>
                  <Form>
                    <Form.Item>
                      <Input placeholder='Họ Và Tên' id='contactName' value={formValues.contactName} onChange={handleInputChange} />
                      <Input placeholder='Email' id='contactEmail' value={formValues.contactEmail} onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item>
                      <Input placeholder='Số Điện Thoại' type='number' id='contactPhoneNumber' value={formValues.contactPhoneNumber} onChange={handleInputChange} />
                      <Input placeholder='Địa Chỉ' id='address' />
                    </Form.Item>
                    <Form.Item>
                      <Input.TextArea placeholder='Lời Nhắn' id='contactNote' value={formValues.contactNote} onChange={handleTextAreaChange} />
                    </Form.Item>
                  </Form>
                </div>
                <div className='contact-button'>
                  <Button id='contentSubmit' htmlType='submit' onClick={handleSubmit}>
                    <h3 style={{ fontSize: '20px', color: 'white', margin: '5px' }}>Gửi Liên Hệ</h3>
                  </Button>
                  <ModalSuccess inputValue='example' isOpen={isModalVisibleSuccess} onClose={handleCloseModal} />
                  <ModalFail inputValue='example' isOpen={isModalVisibleFail} onClose={handleCloseModal} />
                </div>
              </div>
              <div>
                <img src={Alex} className='contact-section-content-icon' style={{}} alt='' />
              </div>
            </Col>
            <Col span={7} className='contact-section-content2'>
              <div className='contact-content2-item'>
                <div className='contact-content2-dotted-border'>
                  <img style={{ marginRight: '20px', width: '40px' }} src={Address} alt='' />
                  <p>
                    <h1>Địa Chỉ</h1>
                    <span> 86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</span>
                  </p>
                </div>
              </div>
              <div className='contact-content2-item'>
                <div className='contact-content2-dotted-border'>
                  <img style={{ marginRight: '20px', width: '40px' }} src={Email} alt='' />
                  <p>
                    <h1>Email</h1>
                    <span> investigate@your-site.com</span>
                  </p>
                </div>
              </div>
              <div className='contact-content2-item'>
                <div className='contact-content2-dotted-border'>
                  <img style={{ marginRight: '20px', width: '40px' }} src={Phone} alt='' />
                  <p>
                    <h1>Điện Thoại</h1>
                    <span>+84 145 689 798</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Content>
  );
};

export default ContactPage;
