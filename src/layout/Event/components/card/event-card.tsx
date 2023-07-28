import { Link } from 'react-router-dom';

import { Space } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { Event } from '../../../../types/Event';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <>
      <Space direction='vertical' style={{ margin: '0px 20px 0px 15px' }}>
        <div
          style={{
            background: '#FFF',
            textAlign: 'start',
            width: '275px',
            height: '410px',
            borderRadius: '20px',
          }}>
          <img src={event.image1} alt={event.name} style={{ borderRadius: '20px 20px 0 0', width: '275px' }} />
          <div style={{ padding: '20px' }}>
            <h1 className='title-web' style={{ fontSize: '25px', marginTop: '-10px' }}>
              {event.name}
            </h1>
            <p style={{ marginTop: '-20px' }}>Đầm Sen Park</p>
            <p style={{ fontSize: '15px', marginTop: '-5px' }}>
              <CalendarOutlined style={{ color: 'yellow' }} />
              {event.startDay} - {event.endDay}
            </p>
            <h1 style={{ fontSize: '25px', marginTop: '-5px', color: '#FA7D09' }}>
              {event.price.toLocaleString()} VND
              <Link style={{ paddingTop: '-20px', color: 'white' }} to={`/event-detaill/${event.id}`}>
                <div style={{ background: '#BD000B', width: '56%', height: '30px', borderRadius: '5px' }}>
                  <h1
                    style={{
                      height: '90%',
                      background: '#FF000A',
                      padding: '2px',
                      textAlign: 'center',
                      borderRadius: '5px',
                      fontSize: '15px',
                    }}>
                    Xem Chi Tiết
                  </h1>
                </div>
              </Link>
            </h1>
          </div>
        </div>
      </Space>
    </>
  );
};

export default EventCard;
