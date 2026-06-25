import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const scrollReveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const serviceList = [
  {
    id: 'newborn',
    title: 'Newborn Photography',
    subtitle: 'Best: 5–14 Days Old',
    desc: 'Womb-like curled poses, cozy swaddles, and warm wool nests that celebrate your baby\'s first days. Sessions are conducted at a slow, baby-led pace in our sanitised, heated studio.',
    img: '/generated_baby_one.png',
    video: '/newborn_hero_bg.mp4',
    bgColor: '#FFEBF0',
    tagColor: 'var(--primary-pink)',
    bulletPoints: [
      'Warm temperature-controlled studio (26–28°C)',
      'Certified safety handlers trained in newborn anatomy',
      'Imported organic stretch wraps and wooden props',
      'Dedicated private nursing space for mother and baby'
    ]
  },
  {
    id: 'milestone',
    title: 'Baby Milestone Shoots',
    subtitle: 'Best: 3–11 Months Old',
    desc: 'Celebrate every proud developmental milestone—from tummy-time smiles and wobbly sitting to crawling and initial standing achievements. Colorful, expressive, and fun.',
    img: '/generated_baby_two.png',
    video: '/milestone_hero_bg.mp4',
    bgColor: '#FFF6E5',
    tagColor: '#D35400',
    bulletPoints: [
      'Age-appropriate wooden props, rings, and benches',
      'Focus on real textures and responsive baby expressions',
      'UV-sanitized floor mats and safety cushions',
      'Includes custom themed clothing sets and beanies'
    ]
  },
  {
    id: 'cakesmash',
    title: 'Cake Smash Shoots',
    subtitle: 'Best: 1st Birthday',
    desc: 'A messy, delightful celebration of your baby\'s first year! Watch your toddler explore, dig, and play with their very first birthday cake in front of custom decorated themes.',
    img: '/hero_slide_3.png',
    video: '/cakesmash_hero_bg.mp4',
    bgColor: '#E6F0FA',
    tagColor: '#2980B9',
    bulletPoints: [
      'Custom styled backdrops (Unicorn, Jungle, Floral, etc.)',
      'UV-sanitized layout before cake smashing',
      'Premium custom cake provided with the session',
      'Ends with a warm bubble-bath mini shoot'
    ]
  }
];

export default function Services({ setActivePage }) {
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      {/* ── HERO BANNER ── */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 60%, #FFF5F6 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Floating clouds/camera mascots */}
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: -65, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -15, 0], rotate: [-4, 4, -4] }}
          transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ position: 'absolute', left: '24px', bottom: '0px', width: 'clamp(90px, 12vw, 175px)', height: 'clamp(90px, 12vw, 175px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="/3d_baby_camera.png" alt="Mascot Camera" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>
        
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: 65, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -18, 0], rotate: [5, -5, 5] }}
          transition={{ opacity: { duration: 0.8, delay: 0.2 }, scale: { duration: 0.8, delay: 0.2 }, y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }, rotate: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 } }}
          style={{ position: 'absolute', right: '24px', bottom: '0px', width: 'clamp(90px, 11vw, 160px)', height: 'clamp(90px, 11vw, 160px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="/3d_baby_cloud.png" alt="Mascot Cloud" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2.5px' }}>Our Photography Services</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(28px, 5.5vw, 54px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '18px', lineHeight: 1.2 }}>
              Preserving Every Tiny Milestone Beautifully
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 auto' }}>
              At Baby Shine Studio, we understand that babies grow in the blink of an eye. We help you hold on to these short-lived stages through creative, safe, and timeless portraits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE QUICK SELECTOR HUB ── */}
      <section style={{ maxWidth: '1200px', margin: '-40px auto 80px', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '16px'
        }}>
          {serviceList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              onClick={() => {
                const element = document.getElementById(`section-${service.id}`);
                element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              whileHover={{ y: -6 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '20px 16px',
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(61,51,42,0.06)',
                border: '1.5px solid rgba(222, 93, 131, 0.08)'
              }}
            >
              <h4 className="heading-sans" style={{ fontSize: '14px', margin: 0, color: 'var(--text-dark)', fontWeight: 700 }}>
                {service.title.split(' ')[0]} {service.title.split(' ')[1] || ''}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DETAILED ALTERNATING SERVICE SECTIONS ── */}
      <section style={{ width: '100%', boxSizing: 'border-box' }}>
        {serviceList.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              id={`section-${service.id}`}
              style={{
                width: '100%',
                padding: '80px 0',
                borderBottom: idx !== serviceList.length - 1 ? '1px solid rgba(222,93,131,0.08)' : 'none',
                background: isEven ? 'rgba(255, 245, 246, 0.15)' : 'transparent'
              }}
            >
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 24px',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '50px',
                alignItems: 'center'
              }} className="md-grid-2">

                {/* Left Column (Alternates between Video/Image and Content) */}
                {isEven ? (
                  <ServiceAssetColumn service={service} />
                ) : (
                  <ServiceContentColumn service={service} setActivePage={setActivePage} align="left" />
                )}

                {/* Right Column */}
                {isEven ? (
                  <ServiceContentColumn service={service} setActivePage={setActivePage} align="right" />
                ) : (
                  <ServiceAssetColumn service={service} />
                )}

              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA BOTTOM SECTION ── */}
      <section style={{ maxWidth: '1050px', margin: '0 auto 80px', padding: '0 24px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{
            background: 'linear-gradient(135deg, #FFE9F0 0%, #FFF0E5 100%)',
            borderRadius: '28px',
            padding: '52px 36px',
            textAlign: 'center',
            border: '1.5px solid rgba(222, 93, 131, 0.15)'
          }}
        >
          <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 3.8vw, 36px)', color: 'var(--text-dark)', margin: '0 0 12px', lineHeight: 1.2 }}>
            Ready to Capture Your Baby's Tiny Milestones?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '32px', maxWidth: '520px', marginInline: 'auto', lineHeight: 1.6 }}>
            Secure your booking early to guarantee availability. We work patiently at your baby's comfort pace to preserve genuine, heartwarming emotions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActivePage && setActivePage('book')}
              className="pulse-btn"
              style={{
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                borderRadius: '28px',
                padding: '14px 40px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                boxShadow: '0 6px 20px rgba(222, 93, 131, 0.35)'
              }}
            >
              Book a Photography Session
            </button>
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .service-hover-video:hover .service-overlay {
          opacity: 1 !important;
        }
        .service-hover-video:hover .service-bg-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

/* Service Content Helper Component */
function ServiceContentColumn({ service, setActivePage, align }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -35 : 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: 'left' }}
    >
      <span style={{
        fontSize: '11px',
        fontWeight: 700,
        color: service.tagColor,
        backgroundColor: service.bgColor,
        padding: '5px 14px',
        borderRadius: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'inline-block',
        marginBottom: '12px'
      }}>
        {service.subtitle}
      </span>
      <h3 className="heading-serif" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: 'var(--text-dark)', margin: '0 0 16px' }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '24px' }}>
        {service.desc}
      </p>

      {/* Bullets */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {service.bulletPoints.map((point, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-dark)', lineHeight: 1.4 }}>
            <span style={{ color: service.tagColor, fontWeight: 'bold', fontSize: '15px', lineHeight: 1 }}>✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Detail Redirect Link */}
      <button
        onClick={() => setActivePage && setActivePage(service.id)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'transparent',
          color: service.tagColor,
          border: `2px solid ${service.tagColor}`,
          borderRadius: '24px',
          padding: '10px 24px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'var(--sans)',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = service.tagColor;
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = service.tagColor;
        }}
      >
        View Service Details
      </button>
    </motion.div>
  );
}

/* Service Video/Image Showcase Component */
function ServiceAssetColumn({ service }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        aspectRatio: '4 / 3',
        backgroundColor: service.bgColor,
        cursor: 'pointer'
      }}
      className="service-hover-video"
      onClick={() => setIsPlaying(prev => !prev)}
    >
      {/* Background Image / Placeholder */}
      <img
        src={service.img}
        alt={service.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          opacity: isPlaying ? 0 : 1,
          zIndex: 1,
          position: 'relative'
        }}
        className="service-bg-img"
      />

      {/* Looping Preview Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isPlaying ? 1 : 0.05,
          zIndex: 2,
          transition: 'opacity 0.4s ease'
        }}
      >
        <source src={service.video} type="video/mp4" />
      </video>

      {/* Overlay play button & info */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 40%, rgba(31,20,25,0.7) 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isPlaying ? 0 : 1,
          transition: 'opacity 0.3s ease',
          zIndex: 3
        }}
        className="service-overlay"
      >
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          color: service.tagColor,
          transition: 'transform 0.25s'
        }}>
        </div>

        {/* Floating tag inside */}
        <span style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          color: 'white',
          fontSize: '12px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: service.tagColor }} />
          Click to Play Video preview
        </span>
      </div>

      {/* Close button while playing */}
      {isPlaying && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          borderRadius: '12px',
          padding: '6px 12px',
          fontSize: '11px',
          color: 'white',
          fontWeight: 600,
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          Playing preview
        </div>
      )}
    </motion.div>
  );
}
