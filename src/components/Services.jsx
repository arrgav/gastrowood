import React, { useState } from 'react';
import { GlassWater, UtensilsCrossed, CalendarHeart, ChefHat, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const Services = ({ preview = false }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Свадебный кейтеринг',
      icon: <CalendarHeart size={32} />,
      img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop',
      description: 'Безупречная организация вашего главного дня с элегантной подачей и авторским меню.',
      details: [
        'Разработка индивидуального концепта меню под стилистику свадьбы',
        'Предварительная дегустация блюд для жениха и невесты',
        'Организация приветственного коктейля (Welcome-зона)',
        'Эффектная подача блюд: пирамида из шампанского, фламбе-шоу',
        'Предоставление дизайнерской мебели, текстиля и посуды',
        'Персональный менеджер проекта и координатор на площадке'
      ],
      price: 'от 5 000 ₽ / персона'
    },
    {
      title: 'Корпоративные мероприятия',
      icon: <UtensilsCrossed size={32} />,
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop',
      description: 'От небольших презентаций до масштабных гала-ужинов компаний.',
      details: [
        'Разнообразные форматы: от фуршета на 50 до банкета на 1000 персон',
        'Брендирование станций, посуды и элементов декора',
        'Разработка меню в корпоративных цветах компании',
        'Слаженная работа персонала по международным стандартам',
        'Строгое соблюдение тайминга мероприятия',
        'Оптимизация сметы под выделенный бюджет'
      ],
      price: 'от 2 500 ₽ / персона'
    },
    {
      title: 'Выездной бар',
      icon: <GlassWater size={32} />,
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80&auto=format&fit=crop',
      description: 'Авторские коктейли, пирамиды шампанского и профессиональные бармены на вашем мероприятии.',
      details: [
        'Классическая, молекулярная или тематическая барная карта',
        'Мобильные барные стойки разного стиля и конфигурации',
        'Эффектное бармен-шоу и интерактив с гостями',
        'Станции авторских лимонадов, смузи и детокс-напитков',
        'Крафтовый лед, премиальное стекло и свежие ингредиенты',
        'Услуги профессионального сомелье для подбора вин'
      ],
      price: 'от 1 500 ₽ / персона'
    },
    {
      title: "Chef's Table & Частные ужины",
      icon: <ChefHat size={32} />,
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop',
      description: 'Эксклюзивный формат с приготовлением блюд бренд-шефом перед гостями.',
      details: [
        'Гастрономический сет из 5-7 подач от именитого шеф-повара',
        'Полное погружение в кулинарный процесс с комментариями шефа',
        'Фуд-пейринг: подбор винного сопровождения к каждому блюду',
        'Камерная атмосфера: организация в апартаментах, яхте или лофте',
        'Использование редких фермерских продуктов и деликатесов',
        'Эксклюзивная сервировка: фарфор, хрусталь, столовое серебро'
      ],
      price: 'от 10 000 ₽ / персона'
    }
  ];

  const displayedServices = preview ? services.slice(0, 2) : services;

  const openTelegram = (service) => {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу узнать подробнее об услуге "${service.title}".\n` +
      `Ориентировочный бюджет: ${service.price}.\n` +
      `Жду обратной связи!`
    );
    window.open(`https://t.me/Damir_Sultangaliev?text=${text}`, '_blank');
  };

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
          {displayedServices.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="service-card"
              onClick={() => setSelectedService(service)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                cursor: 'pointer'
              }}
            >
              <div 
                className="service-img"
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  backgroundImage: `url(${service.img})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  transition: 'transform 0.5s ease', zIndex: 0
                }}
              />
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to top, rgba(11,28,24,0.9) 0%, rgba(11,28,24,0.2) 50%, transparent 100%)',
                zIndex: 1
              }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem', color: 'var(--color-surface)' }}>
                <div style={{ color: 'var(--color-wood-light)', marginBottom: '1rem', display: 'inline-block' }}>
                  {service.icon}
                </div>
                <h3 style={{ color: 'var(--color-surface)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                  {service.description}
                </p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  fontWeight: 600, color: 'var(--color-wood-light)', transition: 'color var(--transition-fast)'
                }} className="service-link">
                  Подробнее <span style={{ fontSize: '1.2em' }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        {selectedService && (
          <div>
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              {selectedService.description}
            </p>
            
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Что входит в услугу:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'grid', gap: '0.75rem' }}>
              {selectedService.details?.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-wood-light)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.1)',
              flexWrap: 'wrap', gap: '1rem'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Стоимость:</span>
                <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{selectedService.price}</strong>
              </div>
              <button onClick={() => openTelegram(selectedService)} className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                Заказать в Telegram
              </button>
            </div>
          </div>
        )}
      </Modal>

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
