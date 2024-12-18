import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Content from './sections/Content';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default App;