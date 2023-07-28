// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { firestore } from '../../../../config/firebaseConfig';
// import Loading from '../../../../components/loading/loading';
// import { Col, Row } from 'antd';
// import { Content } from 'antd/es/layout/layout';
// import { CalendarOutlined } from '@ant-design/icons';
// import '../../../../assets/css/event-detaill.css';
// import { Event } from '../../../../types/Event';
// interface EventDetailPageProps {
//   // ...
// }

// const EventDetail: React.FC<EventDetailPageProps> = () => {
//   const { eventId } = useParams<{ eventId: string }>();
//   const [event, setEvent] = useState<Event | null>(null);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       const eventRef = firestore.collection('event').doc(eventId);
//       const eventDoc = await eventRef.get();

//       if (eventDoc.exists) {
//         const eventData = eventDoc.data() as Event;
//         setEvent(eventData);
//       }
//     };

//     fetchEvent();
//   }, [eventId]);

//   if (!event) {
//     return (
//       <Content className='event'>
//         <section className='event-section'>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '250px' }}>
//             <Loading />
//           </div>
//         </section>
//       </Content>
//     );
//   }
//   const firstFiveWords = event.content1.split(' ').slice(0, 2).join(' ');
//   const restOfText = event.content1.split(' ').slice(2).join(' ');
//   return (
//     <Content className='event'>
//       <section className='event-section'>
//         <div className='event-header'>
//           <h1
//             style={{
//               fontSize: '70px',
//               color: 'white',
//               textAlign: 'center',
//               marginTop: '50px',
//               fontFamily: 'iCielKoni',
//             }}>
//             {event.name}
//           </h1>
//         </div>
//         <div className='event-detaill-content'>
//           <div className='event-detaill-content-border'>
//             <Row>
//               <Col span={6}>
//                 <div>
//                   <img src={event.image1} alt={event.name} style={{ width: '107%', height: '270px' }} />
//                   <div>
//                     <p style={{ fontSize: '16px' }}>
//                       <CalendarOutlined style={{ color: 'yellow' }} />
//                       {event.firtDate} - {event.lastDate}
//                     </p>
//                     <p style={{ marginTop: '-10px' }}>Đầm Sen Park</p>
//                     <h1 style={{ marginTop: '-10px', color: '#FA7D09', fontSize: '32px' }}>
//                       {event.price.toLocaleString()} VND
//                     </h1>
//                   </div>
//                 </div>
//               </Col>
//               <Col span={5} offset={1}>
//                 <div>
//                   <p style={{ fontSize: '17px', marginTop: 0, textAlign: 'justify' }}>
//                     {' '}
//                     <strong style={{ color: '#FA7D09', fontSize: '20px' }}>{firstFiveWords}</strong> {restOfText}
//                   </p>
//                 </div>
//               </Col>
//               <Col span={5} offset={1}>
//                 <div>
//                   <img style={{ width: '100%', height: '190px' }} src={event.image2} alt='' />
//                   <p style={{ fontSize: '17px', textAlign: 'justify' }}>{event.content2}</p>
//                 </div>
//               </Col>
//               <Col span={5} offset={1}>
//                 <div>
//                   <p style={{ fontSize: '17px', marginTop: 0, textAlign: 'justify' }}>{event.content3}</p>
//                   <img style={{ width: '100%', height: '190px' }} src={event.image3} alt='' />
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </div>
//       </section>
//     </Content>
//   );
// };

// export default EventDetail;

import { Content } from 'antd/es/layout/layout';

import { Col, Row } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import '../../../../assets/css/event-detaill.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventById, selectEventById } from '../../../../config/eventSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../../config/store';
import Loading from '../../../../components/loading/loading';

interface EventDetailPageProps {
  //..
}
const EventDetail: React.FC<EventDetailPageProps> = () => {
  const params = useParams<{ id?: string }>();

  const dispatch: AppDispatch = useDispatch();
  const eventId = params.id || '';

  const event = useSelector((state: RootState) => selectEventById(eventId)(state));

  useEffect(() => {
    if (eventId) {
      dispatch(fetchEventById(eventId));
    }
  }, [dispatch, eventId]);

  if (!event) {
    return (
      <Content className='event'>
        <section className='event-section'>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '250px' }}>
            <Loading />
          </div>
        </section>
      </Content>
    );
  }
  const firstFiveWords = event.content1.split(' ').slice(0, 2).join(' ');
  const restOfText = event.content1.split(' ').slice(2).join(' ');
  return (
    <Content className='event'>
      <section className='event-section'>
        <div className='event-header'>
          <h1
            style={{
              fontSize: '70px',
              color: 'white',
              textAlign: 'center',
              marginTop: '50px',
              fontFamily: 'iCielKoni',
            }}>
            {event.name}
          </h1>
        </div>
        <div className='event-detaill-content'>
          <div className='event-detaill-content-border'>
            <Row>
              <Col span={6}>
                <div>
                  <img src={event.image1} alt={event.name} style={{ width: '107%', height: '270px' }} />
                  <div>
                    <p style={{ fontSize: '16px' }}>
                      <CalendarOutlined style={{ color: 'yellow' }} />
                      {event.startDay} - {event.endDay}
                    </p>
                    <p style={{ marginTop: '-10px' }}>Đầm Sen Park</p>
                    <h1 style={{ marginTop: '-10px', color: '#FA7D09', fontSize: '32px' }}>{event.price.toLocaleString()} VND</h1>
                  </div>
                </div>
              </Col>
              <Col span={5} offset={1}>
                <div>
                  <p style={{ fontSize: '17px', marginTop: 0, textAlign: 'justify' }}>
                    {' '}
                    <strong style={{ color: '#FA7D09', fontSize: '20px' }}>{firstFiveWords}</strong> {restOfText}
                  </p>
                </div>
              </Col>
              <Col span={5} offset={1}>
                <div>
                  <img style={{ width: '100%', height: '190px' }} src={event.image2} alt='' />
                  <p style={{ fontSize: '17px', textAlign: 'justify' }}>{event.content2}</p>
                </div>
              </Col>
              <Col span={5} offset={1}>
                <div>
                  <p style={{ fontSize: '17px', marginTop: 0, textAlign: 'justify' }}>{event.content3}</p>
                  <img style={{ width: '100%', height: '190px' }} src={event.image3} alt='' />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default EventDetail;
