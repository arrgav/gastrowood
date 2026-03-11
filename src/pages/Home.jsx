import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <>
      <Hero />
      <Services preview={true} />
      <Menu preview={true} />
    </>
  );
};

export default Home;
