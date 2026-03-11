import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-surface)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'inline-block', fontWeight: 700, fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-surface)' }}>
              <span style={{ color: 'var(--color-wood-light)' }}>Gastro</span>Wood
            </a>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '300px' }}>
              Премиальный кейтеринг в Москве. Искусство вкуса и эстетика природы для вашего безупречного события.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: 'var(--color-surface)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Навигация</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#services" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }} className="footer-link">Услуги</a></li>
              <li><a href="#menu" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }} className="footer-link">Меню</a></li>
              <li><a href="#calculator" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }} className="footer-link">Калькулятор стоимости</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--color-surface)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Контакты</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
              <li>Москва, Россия</li>
              <li><a href="mailto:hello@gastrowood.ru" className="footer-link">hello@gastrowood.ru</a></li>
              <li><a href="https://t.me/your_username" target="_blank" rel="noreferrer" className="footer-link" style={{ color: 'var(--color-wood-light)', fontWeight: 500 }}>Написать в Telegram</a></li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.875rem'
        }}>
          <p>© {new Date().getFullYear()} GastroWood Catering. Все права защищены.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="footer-link">Политика конфиденциальности</a>
            <a href="#" className="footer-link">Условия использования</a>
          </div>
        </div>
      </div>
      <style>{`
        .footer-link:hover {
          color: var(--color-surface) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
