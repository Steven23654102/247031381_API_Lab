import 'antd/dist/reset.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Space } from 'antd';

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Articles from './components/Articles';            
import DetailArticle from './components/DetailArticle'; 

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ backgroundColor: '#001529' }}>
          <nav>
            <Space>
              <Link to="/" style={{ color: '#fff' }}>Home</Link>
              <Link to="/dashboard" style={{ color: '#fff' }}>Dashboard</Link>
              <Link to="/about" style={{ color: '#fff' }}>About</Link>
              <Link to="/a" style={{ color: '#fff' }}>Articles</Link> 
            </Space>
          </nav>
        </Header>

        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/a" element={<Articles />} />             
            <Route path="/a/:id" element={<DetailArticle />} />    
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          VT6003CEM Demo
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
