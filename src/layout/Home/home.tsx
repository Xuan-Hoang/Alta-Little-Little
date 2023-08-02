// export default HomePage;
// import { Col, Image, Layout, Row, Form, DatePicker, Popover, Input, Button, Select } from 'antd';
// import '../../assets/css/Home.css';
// import Logo from '../../assets/images/home/logo-home.png';
// import people4 from '../../assets/images/home/people 4.png';
// import iconFrame from '../../assets/images/home/Frame.png';
// import Converted03 from '../../assets/images/home/18451 [Converted]-03 1.png';
// import Converted02 from '../../assets/images/home/18451 [Converted]-02 1.png';
// import Converted04 from '../../assets/images/home/18451 [Converted]-04 1.png';
// import Converted05 from '../../assets/images/home/18451 [Converted]-05 1.png';
// import Converted06 from '../../assets/images/home/18451 [Converted]-06 1.png';
// import Lisa from '../../assets/images/home/Lisa.png';
// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import { CalendarOutlined, HeartFilled } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import ModalFail from '../../components/modalFail-2/modal';

// const { Content } = Layout;
// const logoStyle: React.CSSProperties = {
//   width: '181px',
//   height: '145px',
// };

// const HomePage = () => {
//   //định dạng input chứa ngày tháng
//   const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
//   const [dateInputValue, setDateInputValue] = useState<string>('');
//   const handleCalendarClick = () => {
//     setVisible(true);
//   };
//   const handleDateChange = (value: dayjs.Dayjs | null, dateString: string) => {
//     setSelectedDate(value);
//     setDateInputValue(dateString);
//     setVisible(false);
//   };

//   const formatDate = (date: dayjs.Dayjs | null): string => {
//     if (date) {
//       return date.format('DD/MM/YYYY');
//     }
//     return '';
//   };
//   //lấy value từ các input
//   const [typeTK, setType] = useState<string>('options 1');
//   const TypeTK = (value: string) => {
//     setType(value);
//   };
//   const [formData, setFormData] = useState({
//     type: '',
//     quantity: '',
//     name: '',
//     phoneNumber: '',
//     email: '',
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [event.target.id]: event.target.value,
//     });
//   };

//   //Hiện modal khi lỗi
//   const navigate = useNavigate();
//   const [visible, setVisible] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const handleModalClose = () => {
//     setModalVisible(false);
//   };
//   const handleTabClick = () => {
//     if (!typeTK || !formData.quantity || !dateInputValue || !formData.name || !formData.phoneNumber || !formData.email) {
//       console.log(formatDate(selectedDate));
//       setModalVisible(true);
//     } else {
//       const params = new URLSearchParams({
//         type: typeTK,
//         quantity: formData.quantity,
//         date: dateInputValue,
//         name: formData.name,
//         phoneNumber: formData.phoneNumber,
//         email: formData.email,
//       });
//       navigate(`/checkout?${params.toString()}`);
//     }
//   };

//   return (
//     <Content className='home'>
//       <section className='section'>
//         <div>
//           <Row>
//             <Col>
//               {' '}
//               <Image style={logoStyle} src={Logo} />
//             </Col>
//             <Col span={6}>
//               <div className='title'>
//                 <h1 style={{ fontFamily: 'iCielKoni' }}>Đầm Sen Park</h1>
//               </div>
//             </Col>
//             <Col span={3}>
//               {/* hot-air-balloon*/}
//               <img src={Converted03} className='hot-air-balloon03' alt='' />
//             </Col>
//             <Col span={4}>
//               {/* hot-air-balloon*/}
//               <img src={Converted02} className='hot-air-balloon02' alt='' />
//             </Col>
//             <Col span={7}>
//               <img className='people4' src={people4} alt='' />
//             </Col>
//             <Col>
//               <img src={Converted05} className='hot-air-balloon05' alt='' />
//             </Col>
//           </Row>
//         </div>

//         <div className='content-home'>
//           <Row>
//             <img src={Converted06} className='hot-air-balloon06' alt='' />

//             <Col className='vector' span={14}>
//               <div className='dotted-border'>
//                 <div className='text-content'>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>

//                   <p>Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
//                 </div>
//                 <div className='text-content2'>
//                   <Row align='middle'>
//                     <Col>
//                       <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
//                     </Col>
//                     <Col>
//                       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
//                     </Col>
//                   </Row>
//                   <Row align='middle'>
//                     <Col>
//                       <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
//                     </Col>
//                     <Col>
//                       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
//                     </Col>
//                   </Row>
//                   <Row align='middle'>
//                     <Col>
//                       <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
//                     </Col>
//                     <Col>
//                       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
//                     </Col>
//                   </Row>
//                   <Row align='middle'>
//                     <Col>
//                       <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
//                     </Col>
//                     <Col>
//                       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
//                     </Col>
//                   </Row>
//                 </div>
//               </div>
//               <div className=''>
//                 <img src={Lisa} className='lisa' alt='' />
//               </div>
//             </Col>
//             <Col className='vector2'>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 // width="142"
//                 height='480'
//                 viewBox='0 0 142 584'
//                 fill='none'>
//                 <path
//                   d='M139.686 578.711L97.3042 572.472L81.1709 547.233L75.184 542.53V41.2605L81.1709 36.5576L97.3042 11.3185L139.686 5.07928C139.686 5.07928 149.832 0.940703 114.603 0.0314696C85.9604 -0.720999 70.2052 22.6369 70.2052 22.6369C60.4685 34.551 56.7188 37.4668 39.7662 18.4043C22.8135 -0.658295 0 0.0314696 0 0.0314696L29.6513 23.7029L39.7662 42.4833V541.339L29.6513 560.119L0 583.791C0 583.791 22.8451 584.512 39.7662 565.418C56.7188 546.355 60.4685 549.271 70.2052 561.185C70.2052 561.185 85.9604 584.543 114.603 583.791C149.801 582.85 139.686 578.711 139.686 578.711ZM57.2382 519.805C50.4635 519.805 45.0122 514.349 45.0122 507.64C45.0122 500.899 50.495 495.475 57.2382 495.475C63.9815 495.475 69.4643 500.93 69.4643 507.64C69.4958 514.349 64.013 519.805 57.2382 519.805ZM57.2382 483.279C50.4635 483.279 45.0122 477.823 45.0122 471.114C45.0122 464.373 50.495 458.949 57.2382 458.949C63.9815 458.949 69.4643 464.404 69.4643 471.114C69.4958 477.823 64.013 483.279 57.2382 483.279ZM57.2382 448.069C50.4635 448.069 45.0122 442.614 45.0122 435.905C45.0122 429.164 50.495 423.74 57.2382 423.74C63.9815 423.74 69.4643 429.195 69.4643 435.905C69.4958 442.614 64.013 448.069 57.2382 448.069ZM57.2382 411.7C50.4635 411.7 45.0122 406.245 45.0122 399.535C45.0122 392.794 50.495 387.37 57.2382 387.37C63.9815 387.37 69.4643 392.826 69.4643 399.535C69.4958 406.245 64.013 411.7 57.2382 411.7ZM57.2382 376.303C50.4635 376.303 45.0122 370.847 45.0122 364.138C45.0122 357.397 50.495 351.973 57.2382 351.973C63.9815 351.973 69.4643 357.428 69.4643 364.138C69.4958 370.879 64.013 376.303 57.2382 376.303ZM57.2382 340.121C50.4635 340.121 45.0122 334.666 45.0122 327.957C45.0122 321.216 50.495 315.792 57.2382 315.792C63.9815 315.792 69.4643 321.247 69.4643 327.957C69.4958 334.666 64.013 340.121 57.2382 340.121ZM57.2382 304.567C50.4635 304.567 45.0122 299.112 45.0122 292.402C45.0122 285.661 50.495 280.237 57.2382 280.237C63.9815 280.237 69.4643 285.693 69.4643 292.402C69.4958 299.112 64.013 304.567 57.2382 304.567ZM57.2382 268.512C50.4635 268.512 45.0122 263.056 45.0122 256.347C45.0122 249.637 50.495 244.182 57.2382 244.182C63.9815 244.182 69.4643 249.637 69.4643 256.347C69.4643 263.056 64.013 268.512 57.2382 268.512ZM57.2382 232.832C50.4635 232.832 45.0122 227.377 45.0122 220.667C45.0122 213.926 50.495 208.502 57.2382 208.502C63.9815 208.502 69.4643 213.958 69.4643 220.667C69.4958 227.377 64.013 232.832 57.2382 232.832ZM57.2382 196.933C50.4635 196.933 45.0122 191.477 45.0122 184.768C45.0122 178.027 50.495 172.603 57.2382 172.603C63.9815 172.603 69.4643 178.058 69.4643 184.768C69.4958 191.477 64.013 196.933 57.2382 196.933ZM57.2382 161.065C50.4635 161.065 45.0122 155.61 45.0122 148.9C45.0122 142.159 50.495 136.735 57.2382 136.735C63.9815 136.735 69.4643 142.191 69.4643 148.9C69.4958 155.61 64.013 161.065 57.2382 161.065ZM57.2382 125.354C50.4635 125.354 45.0122 119.899 45.0122 113.189C45.0122 106.48 50.495 101.024 57.2382 101.024C63.9815 101.024 69.4643 106.48 69.4643 113.189C69.4643 119.899 64.013 125.354 57.2382 125.354ZM57.2382 89.3298C50.4635 89.3298 45.0122 83.8744 45.0122 77.1649C45.0122 70.4554 50.495 65 57.2382 65C63.9815 65 69.4643 70.4554 69.4643 77.1649C69.4643 83.8744 64.013 89.3298 57.2382 89.3298Z'
//                   fill='#FDE8B3'
//                 />
//               </svg>
//             </Col>
//             <Col className='vector3' style={{ width: '475px' }}>
//               <div className='vector3-dotted-border'>
//                 <div className='vector3-title'>
//                   <div className='vector3-title-item'>
//                     <div className='vector3-dotted-border-item'>
//                       <h1 style={{ fontSize: '28px', color: 'white', margin: '5px' }}>Vé Của Bạn</h1>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='vector3-content'>
//                   <Form className='vector3-form'>
//                     <Form.Item>
//                       <Select
//                         size='large'
//                         value={typeTK}
//                         onChange={TypeTK}
//                         options={[
//                           { value: 'options 1', label: 'Gói Gia Đình' },
//                           { value: 'options 2', label: 'Gói...' },
//                         ]}
//                       />
//                       <HeartFilled className='vector3-icon-heart' />
//                     </Form.Item>
//                     <Form.Item>
//                       <Input type='number' id='quantity' value={formData.quantity} onChange={handleChange} placeholder='Số Vé' />
//                       <Input id='date' value={dateInputValue} onChange={(event) => setDateInputValue(event.target.value)} placeholder='Ngày sử dụng' />
//                       <Popover content={<DatePicker onChange={handleDateChange} format='DD/MM/YYYY' allowClear={false} />} trigger='click' visible={visible} placement='topRight'>
//                         <CalendarOutlined className='vector3-icon-calendar' onClick={handleCalendarClick} />
//                       </Popover>
//                     </Form.Item>
//                     <Form.Item>
//                       <Input id='name' value={formData.name} onChange={handleChange} placeholder='Họ và Tên' />
//                     </Form.Item>
//                     <Form.Item>
//                       <Input type='number' id='phoneNumber' value={formData.phoneNumber} onChange={handleChange} placeholder='Số Điện Thoại' />
//                     </Form.Item>
//                     <Form.Item>
//                       <Input id='email' value={formData.email} onChange={handleChange} placeholder='Địa Chỉ Email' />
//                     </Form.Item>
//                     <Form.Item>
//                       <ModalFail
//                         inputValue={typeTK || formData.email || formData.name || dateInputValue || formData.quantity || formData.phoneNumber}
//                         isOpen={modalVisible}
//                         onClose={handleModalClose}
//                       />
//                       <div className='button-home'>
//                         <Button id='submit' htmlType='submit' onClick={() => handleTabClick()}>
//                           <h3 style={{ fontSize: '20px', color: 'white', margin: '5px' }}>Đặt Vé</h3>
//                         </Button>
//                       </div>
//                     </Form.Item>
//                   </Form>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </section>
//       <img src={Converted03} className='hot-air-balloon032' alt='' />
//       <img src={Converted04} className='hot-air-balloon04' alt='' />
//     </Content>
//   );
// };

// export default HomePage;
import { Col, Image, Layout, Row, Form, DatePicker, Popover, Input, Button, Select } from 'antd';
import '../../assets/css/Home.css';
import Logo from '../../assets/images/home/logo-home.png';
import people4 from '../../assets/images/home/people 4.png';
import iconFrame from '../../assets/images/home/Frame.png';
import Converted03 from '../../assets/images/home/18451 [Converted]-03 1.png';
import Converted02 from '../../assets/images/home/18451 [Converted]-02 1.png';
import Converted04 from '../../assets/images/home/18451 [Converted]-04 1.png';
import Converted05 from '../../assets/images/home/18451 [Converted]-05 1.png';
import Converted06 from '../../assets/images/home/18451 [Converted]-06 1.png';
import Lisa from '../../assets/images/home/Lisa.png';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { CalendarOutlined, HeartFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ModalFail from '../../components/modalFail-2/modal';

const { Content } = Layout;
const logoStyle: React.CSSProperties = {
  width: '181px',
  height: '145px',
};

const HomePage = () => {
  //định dạng input chứa ngày tháng
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [dateInputValue, setDateInputValue] = useState<string>('');
  const handleCalendarClick = () => {
    setVisible(true);
  };

  const handleDateChange = (value: dayjs.Dayjs | null, dateString: string) => {
    setSelectedDate(value);
    setDateInputValue(dateString);
    setVisible(false);
  };

  const formatDate = (date: dayjs.Dayjs | null): string => {
    if (date) {
      return date.format('DD/MM/YYYY');
    }
    return '';
  };

  //lấy value từ các input
  const [typeTK, setType] = useState<string>('options 1');
  const TypeTK = (value: string) => {
    setType(value);
  };
  const [formData, setFormData] = useState({
    type: '',
    quantity: '',
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  //Hiện modal khi lỗi
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleTabClick = () => {
    if (!typeTK || !formData.quantity || !dateInputValue || !formData.name || !formData.phoneNumber || !formData.email) {
      console.log(formatDate(selectedDate));
      setModalVisible(true);
    } else {
      const params = new URLSearchParams({
        type: typeTK,
        quantity: formData.quantity,
        date: dateInputValue,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
      });
      navigate(`/checkout?${params.toString()}`);
    }
  };

  return (
    <Content className='home'>
      <section className='section'>
        <div>
          <Row>
            <Col>
              {' '}
              <Image style={logoStyle} src={Logo} />
            </Col>
            <Col span={6}>
              <div className='title'>
                <h1 style={{ fontFamily: 'iCielKoni' }}>Đầm Sen Park</h1>
              </div>
            </Col>
            <Col span={3}>
              {/* hot-air-balloon*/}
              <img src={Converted03} className='hot-air-balloon03' alt='' />
            </Col>
            <Col span={4}>
              {/* hot-air-balloon*/}
              <img src={Converted02} className='hot-air-balloon02' alt='' />
            </Col>
            <Col span={7}>
              <img className='people4' src={people4} alt='' />
            </Col>
            <Col>
              <img src={Converted05} className='hot-air-balloon05' alt='' />
            </Col>
          </Row>
        </div>

        <div className='content-home'>
          <Row>
            <img src={Converted06} className='hot-air-balloon06' alt='' />

            <Col className='vector' span={14}>
              <div className='dotted-border'>
                <div className='text-content'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>

                  <p>Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
                </div>
                <div className='text-content2'>
                  <Row align='middle'>
                    <Col>
                      <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
                    </Col>
                    <Col>
                      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                    </Col>
                  </Row>
                  <Row align='middle'>
                    <Col>
                      <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
                    </Col>
                    <Col>
                      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                    </Col>
                  </Row>
                  <Row align='middle'>
                    <Col>
                      <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
                    </Col>
                    <Col>
                      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                    </Col>
                  </Row>
                  <Row align='middle'>
                    <Col>
                      <img src={iconFrame} style={{ width: '35px', paddingRight: '5px' }} alt='' />
                    </Col>
                    <Col>
                      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className=''>
                <img src={Lisa} className='lisa' alt='' />
              </div>
            </Col>
            <Col className='vector2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                // width="142"
                height='480'
                viewBox='0 0 142 584'
                fill='none'>
                <path
                  d='M139.686 578.711L97.3042 572.472L81.1709 547.233L75.184 542.53V41.2605L81.1709 36.5576L97.3042 11.3185L139.686 5.07928C139.686 5.07928 149.832 0.940703 114.603 0.0314696C85.9604 -0.720999 70.2052 22.6369 70.2052 22.6369C60.4685 34.551 56.7188 37.4668 39.7662 18.4043C22.8135 -0.658295 0 0.0314696 0 0.0314696L29.6513 23.7029L39.7662 42.4833V541.339L29.6513 560.119L0 583.791C0 583.791 22.8451 584.512 39.7662 565.418C56.7188 546.355 60.4685 549.271 70.2052 561.185C70.2052 561.185 85.9604 584.543 114.603 583.791C149.801 582.85 139.686 578.711 139.686 578.711ZM57.2382 519.805C50.4635 519.805 45.0122 514.349 45.0122 507.64C45.0122 500.899 50.495 495.475 57.2382 495.475C63.9815 495.475 69.4643 500.93 69.4643 507.64C69.4958 514.349 64.013 519.805 57.2382 519.805ZM57.2382 483.279C50.4635 483.279 45.0122 477.823 45.0122 471.114C45.0122 464.373 50.495 458.949 57.2382 458.949C63.9815 458.949 69.4643 464.404 69.4643 471.114C69.4958 477.823 64.013 483.279 57.2382 483.279ZM57.2382 448.069C50.4635 448.069 45.0122 442.614 45.0122 435.905C45.0122 429.164 50.495 423.74 57.2382 423.74C63.9815 423.74 69.4643 429.195 69.4643 435.905C69.4958 442.614 64.013 448.069 57.2382 448.069ZM57.2382 411.7C50.4635 411.7 45.0122 406.245 45.0122 399.535C45.0122 392.794 50.495 387.37 57.2382 387.37C63.9815 387.37 69.4643 392.826 69.4643 399.535C69.4958 406.245 64.013 411.7 57.2382 411.7ZM57.2382 376.303C50.4635 376.303 45.0122 370.847 45.0122 364.138C45.0122 357.397 50.495 351.973 57.2382 351.973C63.9815 351.973 69.4643 357.428 69.4643 364.138C69.4958 370.879 64.013 376.303 57.2382 376.303ZM57.2382 340.121C50.4635 340.121 45.0122 334.666 45.0122 327.957C45.0122 321.216 50.495 315.792 57.2382 315.792C63.9815 315.792 69.4643 321.247 69.4643 327.957C69.4958 334.666 64.013 340.121 57.2382 340.121ZM57.2382 304.567C50.4635 304.567 45.0122 299.112 45.0122 292.402C45.0122 285.661 50.495 280.237 57.2382 280.237C63.9815 280.237 69.4643 285.693 69.4643 292.402C69.4958 299.112 64.013 304.567 57.2382 304.567ZM57.2382 268.512C50.4635 268.512 45.0122 263.056 45.0122 256.347C45.0122 249.637 50.495 244.182 57.2382 244.182C63.9815 244.182 69.4643 249.637 69.4643 256.347C69.4643 263.056 64.013 268.512 57.2382 268.512ZM57.2382 232.832C50.4635 232.832 45.0122 227.377 45.0122 220.667C45.0122 213.926 50.495 208.502 57.2382 208.502C63.9815 208.502 69.4643 213.958 69.4643 220.667C69.4958 227.377 64.013 232.832 57.2382 232.832ZM57.2382 196.933C50.4635 196.933 45.0122 191.477 45.0122 184.768C45.0122 178.027 50.495 172.603 57.2382 172.603C63.9815 172.603 69.4643 178.058 69.4643 184.768C69.4958 191.477 64.013 196.933 57.2382 196.933ZM57.2382 161.065C50.4635 161.065 45.0122 155.61 45.0122 148.9C45.0122 142.159 50.495 136.735 57.2382 136.735C63.9815 136.735 69.4643 142.191 69.4643 148.9C69.4958 155.61 64.013 161.065 57.2382 161.065ZM57.2382 125.354C50.4635 125.354 45.0122 119.899 45.0122 113.189C45.0122 106.48 50.495 101.024 57.2382 101.024C63.9815 101.024 69.4643 106.48 69.4643 113.189C69.4643 119.899 64.013 125.354 57.2382 125.354ZM57.2382 89.3298C50.4635 89.3298 45.0122 83.8744 45.0122 77.1649C45.0122 70.4554 50.495 65 57.2382 65C63.9815 65 69.4643 70.4554 69.4643 77.1649C69.4643 83.8744 64.013 89.3298 57.2382 89.3298Z'
                  fill='#FDE8B3'
                />
              </svg>
            </Col>
            <Col className='vector3' style={{ width: '475px' }}>
              <div className='vector3-dotted-border'>
                <div className='vector3-title'>
                  <div className='vector3-title-item'>
                    <div className='vector3-dotted-border-item'>
                      <h1 style={{ fontSize: '28px', color: 'white', margin: '5px' }}>Vé Của Bạn</h1>
                    </div>
                  </div>
                </div>
                <div className='vector3-content'>
                  <Form className='vector3-form'>
                    <Form.Item>
                      <Select
                        size='large'
                        value={typeTK}
                        onChange={TypeTK}
                        options={[
                          { value: 'options 1', label: 'Gói Gia Đình' },
                          { value: 'options 2', label: 'Gói...' },
                        ]}
                      />
                      <HeartFilled className='vector3-icon-heart' />
                    </Form.Item>
                    <Form.Item>
                      <Input type='number' id='quantity' value={formData.quantity} onChange={handleChange} placeholder='Số Vé' />
                      <Input id='date' value={dateInputValue} onChange={(event) => setDateInputValue(event.target.value)} placeholder='Ngày sử dụng' />
                      <Popover content={<DatePicker onChange={handleDateChange} format='DD/MM/YYYY' allowClear={false} />} trigger='click' visible={visible} placement='topRight'>
                        <CalendarOutlined className='vector3-icon-calendar' onClick={handleCalendarClick} />
                      </Popover>
                    </Form.Item>
                    <Form.Item>
                      <Input id='name' value={formData.name} onChange={handleChange} placeholder='Họ và Tên' />
                    </Form.Item>
                    <Form.Item>
                      <Input type='number' id='phoneNumber' value={formData.phoneNumber} onChange={handleChange} placeholder='Số Điện Thoại' />
                    </Form.Item>
                    <Form.Item>
                      <Input id='email' value={formData.email} onChange={handleChange} placeholder='Địa Chỉ Email' />
                    </Form.Item>
                    <Form.Item>
                      <ModalFail
                        inputValue={typeTK || formData.email || formData.name || dateInputValue || formData.quantity || formData.phoneNumber}
                        isOpen={modalVisible}
                        onClose={handleModalClose}
                      />
                      <div className='button-home'>
                        <Button id='submit' htmlType='submit' onClick={() => handleTabClick()}>
                          <h3 style={{ fontSize: '20px', color: 'white', margin: '5px' }}>Đặt Vé</h3>
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <img src={Converted03} className='hot-air-balloon032' alt='' />
      <img src={Converted04} className='hot-air-balloon04' alt='' />
    </Content>
  );
};

export default HomePage;
