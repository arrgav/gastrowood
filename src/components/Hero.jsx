import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      zIndex: 1
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }} />
      
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to right, rgba(11, 28, 24, 0.9), rgba(11, 28, 24, 0.6))',
        zIndex: -1
      }} />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container" 
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'var(--color-surface)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          paddingTop: '4rem'
        }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'var(--color-wood-light)',
          fontWeight: 600,
          fontSize: '0.875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          <Leaf size={16} /> Премиальный кейтеринг в Москве
        </div>
        
        <h1 style={{
          color: 'var(--color-surface)',
          margin: 0,
          textShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}>
          Искусство вкуса. <br/>
          <span style={{ color: 'var(--color-wood-light)', fontStyle: 'italic' }}>Эстетика природы.</span>
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '600px',
          fontWeight: 300,
          marginBottom: '1rem',
          lineHeight: 1.6
        }}>
          Идеальное гастрономическое сопровождение вашего события. 
          Авторское меню, стильная подача и безупречный сервис, который запомнится.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#menu" className="btn btn-primary" style={{
            backgroundColor: 'var(--color-wood-light)',
            color: 'var(--color-text)',
            boxShadow: '0 4px 15px rgba(213, 203, 184, 0.4)'
          }}>
            Смотреть меню <ArrowRight size={20} />
          </a>
          <a href="#calculator" className="btn" style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            color: 'var(--color-surface)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            Рассчитать стоимость
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
