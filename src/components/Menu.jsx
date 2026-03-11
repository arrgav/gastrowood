import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const Menu = ({ preview = false }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      title: 'Coffee Break',
      img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&auto=format',
      desc: 'Легкие закуски и бодрящие напитки для деловых встреч и перерывов.',
      details: [
        'Свежая мини-выпечка (круассаны, даниши)',
        'Брускетты с лососем и ростбифом',
        'Ассорти мини-кишей',
        'Сезонные фрукты и ягоды',
        'Свежесваренный кофе (Арабика 100%)',
        'Авторские чаи и домашние лимонады'
      ],
      price: 'от 1 200 ₽ / персона'
    },
    {
      title: 'Buffet',
      img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&auto=format',
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
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format',
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
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&auto=format',
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
      img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop&auto=format',
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
      img: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=600&h=400&fit=crop&auto=format',
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

  const displayedCategories = preview ? categories.slice(0, 3) : categories;

  const openTelegram = (cat) => {
    const text = encodeURIComponent(
      `Здравствуйте! Интересует меню "${cat.title}".
` +
      `Ориентировочная стоимость: ${cat.price}.
` +
      `Жду обратной связи!`
    );
    window.open(`https://t.me/Damir_Sultangaliev?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Гастрономия</span>
            <h2 style={{ color: 'var(--color-primary)', margin: 0 }}>Наше Меню</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/order" className="btn btn-secondary">
              Заказать дегустацию
            </Link>
          </motion.div>
        </div>

        <div className="grid-3">
          {displayedCategories.map((cat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
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
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={cat.img}
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
              <button onClick={() => openTelegram(selectedCategory)} className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                Заказать в Telegram
              </button>
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
