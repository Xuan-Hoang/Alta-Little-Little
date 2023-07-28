import '../../assets/css/checkout_detaill.css';
import { Content } from 'antd/es/layout/layout';
import MySlider from './components/slider/slider';
import { Col, Row } from 'antd';
import Alvin from '../../assets/images/checkout/Alvin_Arnold_Votay1 1.png';
import { Link } from 'react-router-dom';
const CheckoutDetail: React.FC = () => {
  return (
    <Content className='checkout-detaill'>
      <section className='checkout-section'>
        <div className='slider-header'>
          <h1
            style={{
              fontSize: '70px',
              color: 'white',
              textAlign: 'center',
              marginTop: '25px',
              fontFamily: 'iCielKoni',
            }}>
            Thanh Toán Thành công
          </h1>
        </div>

        <div className='slider-content'>
          <div className='slider-conten1'>
            <MySlider />
          </div>
        </div>
        <img src={Alvin} alt='' className='checkoutDetaill-icon' />
        <Row justify='end' align='middle' style={{ marginTop: '10px ' }}>
          <Col span={2}>
            <Link style={{ paddingTop: '-20px', color: 'white' }} to={{}}>
              <div style={{ background: '#BD000B', height: '30px', borderRadius: '5px' }}>
                <h1
                  style={{
                    height: '90%',
                    background: '#FF000A',
                    padding: '2px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    fontSize: '15px',
                  }}>
                  Tải Vé
                </h1>
              </div>
            </Link>
          </Col>
          <Col span={12} style={{ marginLeft: '20px' }}>
            <Link style={{ paddingTop: '-20px', color: 'white' }} to={{}}>
              <div style={{ background: '#BD000B', width: '18%', height: '30px', borderRadius: '5px' }}>
                <h1
                  style={{
                    height: '90%',
                    background: '#FF000A',
                    padding: '2px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    fontSize: '15px',
                  }}>
                  Gửi Email
                </h1>
              </div>
            </Link>
          </Col>
        </Row>
      </section>
    </Content>
  );
};

export default CheckoutDetail;
