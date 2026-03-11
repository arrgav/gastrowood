import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
      <InteractiveBackground />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Hero />
        <Services />
        <Menu />
        <Calculator />
      </main>
      <Footer />
    </>
  );
}

export default App;


