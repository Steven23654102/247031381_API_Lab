import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewArticle from './components/NewArticle';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/new">新增文章</Link>
        </nav>
        <Routes>
          <Route path="/new" element={<NewArticle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
