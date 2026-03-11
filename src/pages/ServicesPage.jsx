import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }} // Компенсация навбара
    >
      <div style={{ textAlign: 'center', padding: '4rem 0 0', backgroundColor: 'var(--color-bg)' }}>
        <h1 style={{ color: 'var(--color-primary)' }}>Все Услуги</h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Мы готовы организовать мероприятие любого масштаба.</p>
      </div>
      <Services />
    </motion.div>
  );
};

export default ServicesPage;
