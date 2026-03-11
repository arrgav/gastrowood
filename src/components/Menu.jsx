import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Menu = () => {
  const categories = [
    {
      title: 'Холодные закуски & Канапе',
      img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&q=80&auto=format&fit=crop',
      desc: 'Премиальные закуски, тарталетки, брускетты и сырные плато.'
    },
    {
      title: 'Горячие блюда',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop',
      desc: 'Мясные и рыбные деликатесы, приготовленные на открытом огне или Sous-vide.'
    },
    {
      title: 'Авторские десерты',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80&auto=format&fit=crop',
      desc: 'Элегантные порционные десерты, макаронс и свежие ягоды.'
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
                  width: '100%',
                  backgroundImage: `url(${cat.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
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
