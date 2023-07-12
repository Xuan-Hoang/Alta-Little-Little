import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import HomePage from './layout/Home/home';
import CustomHeader from './layout/Header/header';
import EventPage from './layout/Event/event';
import ContactPage from './layout/Contact/contact';
import CheckoutPage from './layout/Checkout/checkout';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <CustomHeader />
        <Content>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/event' element={<EventPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
