// export default ListEvent;

// import React, { useEffect, useState } from 'react';

// import { firestore } from '../../../../config/firebaseConfig';
// import EventCard from '../card/event-card';
// import { Col, Row } from 'antd';
// import ButtonLeft from '../../../../components/button/button-left';
// import ButtonRight from '../../../../components/button/button-right';
// import Loading from '../../../../components/loading/loading';

// interface Event {
//   id: string;
//   name: string;
//   image1: string;
//   firtDate: string;
//   lastDate: string;
//   price: number;
// }

// const ListEvent = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(true);
//   // const [, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true); // Bắt đầu hiển thị loading

//       const eventsRef = firestore.collection('event');
//       const eventsSnapshot = await eventsRef.get();

//       const fetchedEvents = eventsSnapshot.docs.map((eventDoc) => {
//         const eventData = eventDoc.data() as Event;
//         return {
//           ...eventData,
//           id: eventDoc.id,
//         };
//       });

//       setEvents(fetchedEvents);
//       setLoading(false); // Kết thúc hiển thị loading
//     };

//     fetchEvents();
//   }, []);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 4;

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => {
//       if (prevIndex === 0) {
//         return events.length - itemsPerPage;
//       } else {
//         return prevIndex - itemsPerPage;
//       }
//     });
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => {
//       if (prevIndex === events.length - itemsPerPage) {
//         return 0;
//       } else {
//         return prevIndex + itemsPerPage;
//       }
//     });
//   };

//   const limitedEvents = events.slice(currentIndex, currentIndex + itemsPerPage);
//   return (
//     <div>
//       <Row justify='center' align='middle'>
//         <Col style={{ textAlign: 'center' }} span={1}>
//           <ButtonLeft onClick={handlePrev} />
//         </Col>
//         <Col span={22}>
//           {loading ? (
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
//               <Loading />
//             </div>
//           ) : (
//             limitedEvents.map((event) => <EventCard key={event.id} event={event} />)
//           )}
//         </Col>
//         <Col style={{ textAlign: 'center' }} span={1}>
//           <ButtonRight onClick={handleNext} />
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ListEvent;

import React, { useEffect, useState } from 'react';

import { Row, Col } from 'antd';
import EventCard from '../card/event-card';

import ButtonLeft from '../../../../components/button/button-left';
import ButtonRight from '../../../../components/button/button-right';
import Loading from '../../../../components/loading/loading';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import { fetchEvents, selectEvents, selectLoading } from '../../../../redux/eventSlice';

const ListEvent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const events = useSelector(selectEvents);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(events.length / itemsPerPage) - 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, events.length);
  const limitedEvents = events.slice(startIndex, endIndex);
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '250px' }}>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Row justify='center' align='middle'>
        <Col span={1}>
          <ButtonLeft onClick={handlePrev} />
        </Col>
        <Col span={22}>
          {limitedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Col>
        <Col span={1}>
          <ButtonRight onClick={handleNext} />
        </Col>
      </Row>
    </div>
  );
};

export default ListEvent;
