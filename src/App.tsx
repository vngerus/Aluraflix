import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Content from './sections/Content';
import Footer from './sections/Footer';
import NewVideo from './sections/NewVideo';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Content />
            </>
          } />
          <Route path="/new-video" element={<NewVideo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
