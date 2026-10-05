import React from 'react';
import { motion } from 'framer-motion';

/* ── Real Drive photos (compressed to /gallery/web/) ─────────────── */
const serviceList = [
  {
    id: 'newborn',
    title: 'Newborn Photography',
    subtitle: 'Best: 5–14 Days Old',
    tag: 'NEWBORN',
    tagColor: '#DE5D83',
    bgColor: '#FFEBF0',
    desc: 'Womb-like curled poses, cozy swaddles, and warm wool nests that celebrate your baby\'s first days. Every session is baby-led, safe, and unhurried in our heated studio.',
    photos: [
      '/gallery/web/sks04872.jpg',
      '/gallery/web/sks04483.jpg',
      '/gallery/web/sks03836.jpg',
      '/gallery/web/sks03486.jpg',
      '/gallery/web/sks02915.jpg',
      '/gallery/web/sks00320.jpg',
    ],
    bullets: [
      'Temperature-controlled studio (26–28°C)',
      'Certified safe newborn posing techniques',
      'Imported organic wraps, wooden props & nests',
      'Private nursing space for mother and baby',
    ],
  },
  {
    id: 'milestone',
    title: 'Baby Milestone Shoots',
    subtitle: 'Best: 1–11 Months Old',
    tag: 'MILESTONE',
    tagColor: '#D35400',
    bgColor: '#FFF6E5',
    desc: 'Celebrate every precious developmental milestone—from 1-month alert expressions and tummy-time giggles to sitter smiles. Colorful, expressive and full of personality.',
    photos: [
      '/gallery/web/sks04718.jpg',
      '/gallery/web/sks04580.jpg',
      '/gallery/web/sks04127.jpg',
      '/gallery/web/sks03801.jpg',
      '/gallery/web/sks03284.jpg',
      '/gallery/web/sks02179.jpg',
    ],
    bullets: [
      'Age-appropriate props — rings, benches, baskets',
      'Responsive expressions & real baby emotions',
      'UV-sanitised floor mats and safety cushions',
      'Custom themed clothing sets included',
    ],
  },
  {
    id: 'cakesmash',
    title: 'Sitter & Cake Smash',
    subtitle: 'Best: 6M – 1st Birthday',
    tag: 'SITTER & CAKE',
    tagColor: '#2980B9',
    bgColor: '#E6F0FA',
    desc: 'From confident first sits to messy 1st-birthday cake smashes — we celebrate every big baby milestone with vibrant backdrops, sweet props, and loads of laughter.',
    photos: [
      '/gallery/web/sks04063.jpg',
      '/gallery/web/sks04031.jpg',
      '/gallery/web/sks03966.jpg',
      '/gallery/web/sks03334.jpg',
      '/gallery/web/sks02792.jpg',
      '/gallery/web/sks04996.jpg',
    ],
    bullets: [
      'Custom styled backdrops (Unicorn, Jungle, Floral)',
      'Premium custom cake provided with session',
      'Ends with an adorable warm bubble-bath shoot',
      'Fun, stress-free experience for the whole family',
    ],
  },
];

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Services({ setActivePage }) {
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 60%, #FFF5F6 100%)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: -65, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -15, 0] }}
          transition={{ opacity: { duration: 0.8 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ position: 'absolute', left: '24px', bottom: '0px', width: 'clamp(80px, 11vw, 160px)', height: 'clamp(80px, 11vw, 160px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="/3d_baby_camera.png" alt="Camera" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: 65, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -18, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 } }}
          style={{ position: 'absolute', right: '24px', bottom: '0px', width: 'clamp(80px, 10vw, 150px)', height: 'clamp(80px, 10vw, 150px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="/3d_baby_cloud.png" alt="Cloud" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto', padding: '60px 24px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '3px' }}>
              Our Photography Services
            </span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(28px, 5.5vw, 52px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '16px', lineHeight: 1.2 }}>
              Preserving Every Tiny Milestone
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 28px' }}>
              Babies grow in the blink of an eye. We help you hold on to these short-lived stages through creative, safe, and timeless portraits.
            </p>
            {/* Quick nav pills */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {serviceList.map(s => (
                <button key={s.id}
                  onClick={() => { const el = document.getElementById(`svc-${s.id}`); el?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  style={{
                    backgroundColor: 'white', color: s.tagColor, border: `2px solid ${s.tagColor}`,
                    borderRadius: '24px', padding: '8px 20px', fontSize: '13px', fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = s.tagColor; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = s.tagColor; }}
                >
                  {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {serviceList.map((service, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section key={service.id} id={`svc-${service.id}`} style={{
            padding: '80px 24px',
            background: isEven
              ? 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 100%)'
              : 'linear-gradient(180deg, #FFF5F6 0%, #FFFDFB 100%)',
            borderTop: '1px solid rgba(222,93,131,0.07)'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

              {/* Section header */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
                style={{ textAlign: 'center', marginBottom: '48px' }}
              >
                <span style={{
                  fontSize: '11px', fontWeight: 700, color: service.tagColor,
                  backgroundColor: service.bgColor, padding: '5px 16px',
                  borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '1.5px',
                  display: 'inline-block', marginBottom: '12px'
                }}>
                  {service.tag} · {service.subtitle}
                </span>
                <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 4vw, 38px)', color: 'var(--text-dark)', margin: '0 0 14px' }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
                  {service.desc}
                </p>
              </motion.div>

              {/* ── REAL PHOTO GRID ── */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(2, 260px)',
                gap: '12px',
                marginBottom: '48px'
              }} className="svc-photo-grid">
                {service.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    whileHover={{ scale: 1.025, zIndex: 2 }}
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 4px 20px rgba(61,51,42,0.1)',
                      cursor: 'zoom-in',
                      // First photo spans 2 rows for visual interest
                      ...(i === 0 ? { gridRow: 'span 2', borderRadius: '20px' } : {})
                    }}
                  >
                    <img
                      src={src}
                      alt={`${service.title} ${i + 1}`}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {/* Subtle bottom gradient */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 100%)',
                      pointerEvents: 'none'
                    }} />
                  </motion.div>
                ))}
              </div>

              {/* ── BULLETS + CTA ROW ── */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center',
                  background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)',
                  borderRadius: '20px', padding: '36px 40px',
                  border: `1.5px solid ${service.bgColor}`,
                  boxShadow: '0 4px 24px rgba(61,51,42,0.05)'
                }} className="svc-cta-row"
              >
                {/* Bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {service.bullets.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-dark)', lineHeight: 1.5 }}>
                      <span style={{
                        width: '22px', height: '22px', borderRadius: '50%',
                        backgroundColor: service.bgColor, color: service.tagColor,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '13px', fontWeight: 700, flexShrink: 0, marginTop: '1px'
                      }}>✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                    Book early to secure your preferred date. Sessions fill up fast!
                  </p>
                  <button
                    onClick={() => setActivePage && setActivePage('contact')}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      backgroundColor: service.tagColor, color: 'white', border: 'none',
                      borderRadius: '28px', padding: '13px 32px', fontSize: '15px',
                      fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--sans)',
                      boxShadow: `0 6px 20px ${service.tagColor}55`,
                      transition: 'all 0.2s ease', width: '100%', justifyContent: 'center', maxWidth: '280px'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 28px ${service.tagColor}66`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 6px 20px ${service.tagColor}55`; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    Book {service.title.split(' ')[0]} Session
                  </button>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '12px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setActivePage && setActivePage(service.id)}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        backgroundColor: service.tagColor, color: 'white',
                        border: `2px solid ${service.tagColor}`,
                        borderRadius: '28px', padding: '10px 22px', fontSize: '13px',
                        fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--sans)',
                        transition: 'all 0.2s ease', opacity: 0.95
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '0.95'; e.currentTarget.style.transform = 'none'; }}
                    >
                      Explore {service.title.split(' ')[0]} Details →
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>
        );
      })}

      {/* ── REAL DRIVE SESSION FILMS SHOWCASE ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 24px' }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Live Session Films
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 4vw, 38px)', color: 'var(--text-dark)', marginTop: '8px', marginBottom: '14px' }}>
            Watch Real Client Shoots
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            Step inside our studio and see how we gently pose, comfort, and film each precious baby milestone in Vijayawada.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          
          {/* Video 1: Birthday Preshoot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(61,51,42,0.08)',
              border: '1px solid rgba(222,93,131,0.12)'
            }}
          >
            <div style={{ position: 'relative', backgroundColor: '#000', maxHeight: '380px', overflow: 'hidden' }}>
              <video
                controls
                playsInline
                poster="/gallery/web/sks04063.jpg"
                style={{ width: '100%', height: '100%', display: 'block', maxHeight: '380px', objectFit: 'cover' }}
              >
                <source src="/gallery/main/VIDEOS/birthday_preshoot.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#FFF6E5', color: '#D35400', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                First Birthday Film
              </div>
              <h3 className="heading-serif" style={{ fontSize: '20px', color: 'var(--text-dark)', margin: '0 0 8px' }}>
                1st Birthday Preshoot & Celebration
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px' }}>
                A joyful glimpse of our custom cake smash set, colorful balloons, and fun baby laughter in Vijayawada.
              </p>
              <button
                onClick={() => setActivePage && setActivePage('cakesmash')}
                style={{
                  backgroundColor: 'transparent', color: 'var(--primary-pink)',
                  border: 'none', padding: 0, fontSize: '14px', fontWeight: 700,
                  cursor: 'pointer', fontFamily: 'var(--sans)'
                }}
              >
                Learn About Cake Smash Shoots →
              </button>
            </div>
          </motion.div>

          {/* Video 2: Newborn Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(61,51,42,0.08)',
              border: '1px solid rgba(222,93,131,0.12)'
            }}
          >
            <div style={{ position: 'relative', backgroundColor: '#000', maxHeight: '380px', overflow: 'hidden' }}>
              <video
                controls
                playsInline
                poster="/gallery/web/sks00320.jpg"
                style={{ width: '100%', height: '100%', display: 'block', maxHeight: '380px', objectFit: 'cover' }}
              >
                <source src="/gallery/main/VIDEOS/ayaan_suprith.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#FFEBF0', color: '#DE5D83', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                Newborn Highlights
              </div>
              <h3 className="heading-serif" style={{ fontSize: '20px', color: 'var(--text-dark)', margin: '0 0 8px' }}>
                Studio Newborn Session Teaser
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px' }}>
                Gentle swaddles, warm temperature control, and certified newborn posing techniques in action.
              </p>
              <button
                onClick={() => setActivePage && setActivePage('newborn')}
                style={{
                  backgroundColor: 'transparent', color: 'var(--primary-pink)',
                  border: 'none', padding: 0, fontSize: '14px', fontWeight: 700,
                  cursor: 'pointer', fontFamily: 'var(--sans)'
                }}
              >
                Learn About Newborn Shoots →
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ maxWidth: '1050px', margin: '0 auto 80px', padding: '0 24px' }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
          style={{
            background: 'linear-gradient(135deg, #FFE9F0 0%, #FFF0E5 100%)',
            borderRadius: '28px', padding: '56px 36px', textAlign: 'center',
            border: '1.5px solid rgba(222, 93, 131, 0.15)',
            boxShadow: '0 8px 40px rgba(222,93,131,0.08)'
          }}
        >
          <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 3.8vw, 38px)', color: 'var(--text-dark)', margin: '0 0 12px', lineHeight: 1.2 }}>
            Ready to Capture Your Baby's Tiny Milestones?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginBottom: '32px', maxWidth: '520px', marginInline: 'auto', lineHeight: 1.7 }}>
            Secure your booking early — sessions fill up fast! We work patiently at your baby's pace to preserve genuine, heartwarming memories.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActivePage && setActivePage('contact')}
              className="pulse-btn"
              style={{
                backgroundColor: 'var(--primary-pink)', color: 'white', border: 'none',
                borderRadius: '28px', padding: '14px 40px', fontSize: '16px',
                fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--sans)',
                boxShadow: '0 6px 20px rgba(222, 93, 131, 0.35)', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
            >
              📅 Book a Session Now
            </button>
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .svc-photo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
          }
          .svc-photo-grid > div:first-child {
            grid-row: span 1 !important;
          }
          .svc-cta-row {
            grid-template-columns: 1fr !important;
            padding: 24px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .svc-photo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
