import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Menu = ({ preview = false }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      title: 'Coffee Break',
      desc: 'Легкие закуски и бодрящие напитки для деловых встреч и перерывов.',
      details: [
        'Свежая мини-выпечка (круассаны, даниши)',
        'Брускетты с лососем и ростбидом',
        'Ассорти мини-кишей',
        'Сезонные фрукты и ягоды',
        'Свежесваренный кофе (Арабика 100%)',
        'Авторские чаи и домашние лимонады'
      ],
      price: 'от 1 200 ₽ / персона'
    },
    {
      title: 'Buffet',
      desc: 'Изысканный фуршет с широким ассортиментом холодных и горячих закусок.',
      details: [
        'Канапе с деликатесами и морепродуктами',
        'Тарталетки с авторскими сырами',
        'Салаты в индивидуальной подаче (верин, шот)',
        'Горячие закуски на шпажках',
        'Мини-бургеры и слайдеры премиум',
        'Десерты (макаронс, профитроли, муссы)'
      ],
      price: 'от 2 500 ₽ / персона'
    },
    {
      title: 'Banquet',
      desc: 'Классический гастрономический ужин с премиальным обслуживанием.',
      details: [
        'Индивидуальная эстетичная сервировка стола',
        'Холодные закуски в стол и рыбные/мясные плато',
        'Горячая банкетная закуска (например, жюльен в кокоте)',
        'Основные блюда из мяса, птицы или рыбы на выбор',
        'Сложные гарниры и авторские соусы',
        'Персональный официант на каждые 8-10 гостей'
      ],
      price: 'от 4 000 ₽ / персона'
    },
    {
      title: 'Барбекю (BBQ)',
      desc: 'Блюда на открытом огне для загородных мероприятий.',
      details: [
        'Стейки, шашлычки и морепродукты на гриле',
        'Овощи-гриль и свежие фермерские салаты',
        'Станция с бургерами ручной работы',
        'Домашние соусы: барбекю, дзадзики, томатный',
        'Работа профессионального гриль-мастера',
        'Морсы и прохладительные напитки'
      ],
      price: 'от 3 500 ₽ / персона'
    },
    {
      title: 'Коктейль',
      desc: 'Элегантный формат для светских раутов и вечеринок.',
      details: [
        'Только finger-food (без приборов)',
        'Авторские мини-закуски',
        'Сыры и мясные деликатесы',
        'Станция с устрицами (по запросу)',
        'Пирамида из бокалов шампанского',
        'Работа профессионального бармена'
      ],
      price: 'от 3 000 ₽ / персона'
    },
    {
      title: 'Детское меню',
      desc: 'Яркие, полезные и вкусные блюда, которые точно понравятся детям.',
      details: [
        'Мини-пиццы и цветные бургеры',
        'Овощная соломка с мягким соусом',
        'Куриные наггетсы и картофель фри (запеченный)',
        'Фруктовые шпажки',
        'Кэнди-бар: капкейки, леденцы, маршмэллоу',
        'Молочные коктейли и соки'
      ],
      price: 'от 1 500 ₽ / персона'
    }
  ];

  return (
    <section id="menu" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Гастрономия</span>
            <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Наше Меню</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/order" className="btn btn-secondary">
              Заказать дегустацию
            </Link>
          </motion.div>
        </div>

        <div className="grid-3">
          {categories.map((cat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
                cursor: 'pointer'
              }}
              className="menu-card"
            >
              <div 
                style={{
                  height: '250px',
                  backgroundColor: 'rgba(213, 203, 184, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1495147466023-06a92429b709', // coffee
                    '1555243896-c709bfa0b564', // buffet
                    '1414253152815-586790db86b7', // banquet
                    '1555939594-58d7cb561ad1', // bbq
                    '1551024739-1ad88f0a1e35', // cocktail 
                    '1513442542250-854d436a73f2'  // kids
                  ][idx]}?w=600&h=400&fit=crop`}
                  alt={cat.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {cat.title}
                  <ArrowUpRight size={20} style={{ color: 'var(--color-wood-dark)' }} />
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 0 }}>
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedCategory} 
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.title}
      >
        {selectedCategory && (
          <div>
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              {selectedCategory.desc}
            </p>
            
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Особенности:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'grid', gap: '0.75rem' }}>
              {selectedCategory.details.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-wood-light)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Ориентировочная стоимость:</span>
                <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{selectedCategory.price}</strong>
              </div>
              <Link to="/order" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                Рассчитать для меня
              </Link>
            </div>
          </div>
        )}
      </Modal>
      
      <style>{`
        .menu-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg) !important;
        }
        .menu-card:hover svg {
          transform: translate(2px, -2px);
          color: var(--color-primary) !important;
          transition: all 0.2s;
        }
      `}</style>
    </section>
  );
};

export default Menu;
