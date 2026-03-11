import React from 'react';
import Calculator from '../components/Calculator';
import { motion } from 'framer-motion';

const OrderPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-primary-light)' }}
    >
      <div style={{ width: '100%' }}>
        <Calculator />
      </div>
    </motion.div>
  );
};

export default OrderPage;
