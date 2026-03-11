import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {
  const [guests, setGuests] = useState(50);
  const [format, setFormat] = useState('furshet');
  const [needWaiters, setNeedWaiters] = useState(true);
  const telegramUsername = 'Damir_Sultangaliev';

  const formats = {
    coffee: { name: 'Кофе-брейк', price: 1200 },
    furshet: { name: 'Фуршет', price: 2500 },
    banket: { name: 'Банкет', price: 4500 }
  };

  const calculateTotal = () => {
    let base = guests * formats[format].price;
    if (needWaiters) {
      // 1 waiter per 15 guests, 5000 per waiter
      base += Math.ceil(guests / 15) * 5000;
    }
    return base;
  };

  const total = calculateTotal();

  const handleOrder = () => {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу рассчитать стоимость кейтеринга:\n` +
      `- Формат: ${formats[format].name}\n` +
      `- Количество гостей: ${guests}\n` +
      `- Обслуживание: ${needWaiters ? 'Да' : 'Нет'}\n` +
      `- Предварительная сумма: ${total.toLocaleString('ru-RU')} руб.\n` +
      `Жду обратной связи!`
    );
    window.open(`https://t.me/${telegramUsername}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="section-subtitle">Оценка бюджета</span>
          <h2 style={{ color: 'var(--color-primary)' }}>Калькулятор стоимости</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(16px)',
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255,255,255,0.4)'
          }}
        >
          
          {/* Формат */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text)' }}>
              Выберите формат:
            </label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.entries(formats).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setFormat(key)}
                  style={{
                    flex: '1 1 auto',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: `1px solid ${format === key ? 'var(--color-primary)' : '#e2e8f0'}`,
                    backgroundColor: format === key ? 'var(--color-primary)' : 'transparent',
                    color: format === key ? 'white' : 'var(--color-text)',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                >
                  {value.name}
                  <div style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '0.25rem' }}>
                    от {value.price} ₽ / чел.
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Количество гостей */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text)' }}>
              Количество гостей: <span style={{ color: 'var(--color-primary)' }}>{guests} чел.</span>
            </label>
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              style={{
                width: '100%',
                cursor: 'pointer',
                accentColor: 'var(--color-primary)'
              }}
            />
          </div>

          {/* Обслуживание */}
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <input
              type="checkbox"
              id="waiters"
              checked={needWaiters}
              onChange={(e) => setNeedWaiters(e.target.checked)}
              style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--color-primary)', cursor: 'pointer' }}
            />
            <label htmlFor="waiters" style={{ cursor: 'pointer', fontWeight: 500 }}>
              Необходимо обслуживание (официанты, бармены, посуда)
            </label>
          </div>

          {/* Итог и кнопка */}
          <div style={{ 
            borderTop: '1px solid #e2e8f0', 
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Предварительная стоимость:</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                ~ {total.toLocaleString('ru-RU')} ₽
              </div>
            </div>
            
            <button 
              onClick={handleOrder}
              className="btn btn-primary"
              style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}
            >
              Заказать в Telegram
            </button>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
