import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact'

const App: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<CV />} />
      <Route path="/contact" element={<Contact />} />
      {/* Future pages: /projects, /resume, /contact */}
    </Routes>
  </Layout>
);

export default App;
