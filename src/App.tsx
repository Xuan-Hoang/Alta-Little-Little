import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";

import HomePage from "./layout/Home/home";
import CustomHeader from "./layout/Header/header";
import EventPage from "./layout/Event/event";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <CustomHeader />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/event" element={<EventPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
