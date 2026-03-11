import React from 'react';
import { GlassWater, UtensilsCrossed, CalendarHeart, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Свадебный банкет',
      description: 'Изящное меню и идеальная сервировка для самого важного дня в вашей жизни.',
      icon: <CalendarHeart size={40} strokeWidth={1.5} />,
      img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop'
    },
    {
      title: 'Корпоративный фуршет',
      description: 'Стильный подход к деловым мероприятиям, презентациям и тимбилдингам.',
      icon: <GlassWater size={40} strokeWidth={1.5} />,
      img: 'https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?w=800&q=80&auto=format&fit=crop'
    },
    {
      title: 'Гала-ужин',
      description: 'Премиальная подача и авторские блюда в формате классического банкета.',
      icon: <UtensilsCrossed size={40} strokeWidth={1.5} />,
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop'
    },
    {
      title: 'Выездной бар',
      description: 'Авторские коктейли, ароматный кофе и свежие смузи от профессиональных барменов.',
      icon: <ChefHat size={40} strokeWidth={1.5} />,
      img: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-subtitle">Наши форматы</span>
          <h2 style={{ color: 'var(--color-primary)' }}>Безупречность в каждой детали</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
            Мы создаем атмосферу и вкус, которые идеально соответствуют вашему мероприятию,
            от камерных встреч до масштабных праздников.
          </p>
        </motion.div>

        <div className="grid-2">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="service-card"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              {/* Card Image Background */}
              <div 
                className="service-img"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${service.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease',
                  zIndex: 0
                }}
              />
              
              {/* Gradient overlay for readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(11,28,24,0.9) 0%, rgba(11,28,24,0.2) 50%, transparent 100%)',
                zIndex: 1
              }} />

              {/* Content */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '2.5rem',
                color: 'var(--color-surface)'
              }}>
                <div style={{ 
                  color: 'var(--color-wood-light)',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ color: 'var(--color-surface)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                  {service.description}
                </p>
                <Link to="/order" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  color: 'var(--color-wood-light)',
                  transition: 'color var(--transition-fast)'
                }} className="service-link">
                  Рассчитать <span style={{ fontSize: '1.2em' }}>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
        }
        .service-card:hover .service-img {
          transform: scale(1.05);
        }
        .service-link:hover {
          color: var(--color-surface) !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
