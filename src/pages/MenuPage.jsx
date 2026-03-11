import React from 'react';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';

const MenuPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px' }}
    >
      <div style={{ textAlign: 'center', padding: '4rem 0 0', backgroundColor: 'var(--color-bg)' }}>
        <h1 style={{ color: 'var(--color-primary)' }}>Наше Меню</h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Идеальный баланс вкуса и премиальной подачи.</p>
      </div>
      <Menu full={true} />
    </motion.div>
  );
};

export default MenuPage;
