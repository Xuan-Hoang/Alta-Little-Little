import { Content } from 'antd/es/layout/layout';
import ListEvent from './components/listEvent/list-event';
import './/event.css';

const EventPage = () => {
  return (
    <Content className='event'>
      <section className='event-section'>
        <div className='event-header'>
          <h1 style={{ fontSize: '70px', color: 'white', textAlign: 'center', marginTop: '25px' }}>Sự kiện</h1>
        </div>
        <div className='event-content'>
          <ListEvent />
        </div>
      </section>
    </Content>
  );
};

export default EventPage;
