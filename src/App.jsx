import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
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
