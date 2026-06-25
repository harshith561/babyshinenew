import React from 'react';

import { motion } from 'framer-motion';

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const testimonials = [
  { name: 'Sravani & Kalyan',  location: 'Vijayawada', stars: 5, title: 'Highly Recommended for Newborn Posing!',  text: 'We were nervous as our baby was just 9 days old, but the Baby Shine team was incredibly professional. The room temperature was carefully managed and the handlers were certified posing experts. Outstanding pictures!', date: 'June 2026',     img: './baby_hero.png'      },
  { name: 'Prasad Reddy',      location: 'Guntur',      stars: 5, title: '30-Year Trust Indeed!',                   text: 'Being powered by Sai Krishna Photography, we had high expectations. They exceeded all of them. The theme setups were gorgeous and creative, and they took all the time needed for feed breaks and diaper changes.', date: 'May 2026',      img: './newborn_shoot.png'  },
  { name: 'Tejaswi M.',        location: 'Vijayawada', stars: 5, title: 'Fantastic 1-Month Milestone Shoot',        text: 'My baby Aaradhya was alert throughout, and they captured her beautiful smiles and expressions flawlessly. Very comfortable environment with feeding zones and sanitization.',                                    date: 'April 2026',    img: './onemonth_shoot.png' },
  { name: 'Sneha Latha',       location: 'Vijayawada', stars: 5, title: 'Premium Quality Worth Every Rupee',        text: "The handcrafted album we received is gorgeous. High-end editing that keeps baby skins natural yet polished. Baby Shine is definitely Vijayawada's best newborn photography studio.",                             date: 'March 2026',    img: './sitter_shoot.png'   },
  { name: 'Dr. Vivek Verma',   location: 'Vijayawada', stars: 5, title: 'Exceptional Safety Protocols',            text: 'As a doctor, I was extremely selective about sanitization. They UV sanitized all the fabrics, wore masks, and ran HEPA air filters. Perfect and safe for newborn shoots.',                                          date: 'February 2026', img: './hero_slide_1.png'   },
  { name: 'Harika & Ram',      location: 'Vijayawada', stars: 5, title: 'Stunning Creative Themes!',               text: 'From the cute sleeping rabbit theme to the wooden nest, the pictures look like they belong in a luxury magazine. Thank you Baby Shine Studio!',                                                                     date: 'January 2026',  img: './hero_slide_4.png'   },
  { name: 'Meghana & Arun',    location: 'Vijayawada', stars: 5, title: 'Absolutely Magical Experience',           text: 'The studio atmosphere made our baby so comfortable. The photographer was so patient and gentle. We will cherish these photos forever. Highly recommend!',                                                        date: 'Dec 2025',      img: './hero_slide_2.png'   },
  { name: 'Ravi & Sreedevi',   location: 'Guntur',      stars: 5, title: 'Best Decision We Made!',                  text: 'Initially hesitant about the pricing, but the Royal Heritage package was worth every rupee. 40 images, a gorgeous leather album, and memories that will last a lifetime.',                                       date: 'Nov 2025',      img: './hero_slide_3.png'   }
];

export default function Testimonials({ setActivePage }) {
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 60%, #FFF5F6 100%)',
        textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        {/* Teddy – Left */}
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -10, 0], rotate: [-4, 4, -4] }}
          transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 8, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ position: 'absolute', left: '20px', bottom: '0', width: 'clamp(90px, 13vw, 185px)', height: 'clamp(90px, 13vw, 185px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="./3d_teddy_bear.png" alt="Teddy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>
        {/* Bunny – Right */}
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -13, 0], rotate: [3, -3, 3] }}
          transition={{ opacity: { duration: 0.8, delay: 0.2 }, scale: { duration: 0.8, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }, rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
          style={{ position: 'absolute', right: '20px', bottom: '0', width: 'clamp(90px, 12vw, 175px)', height: 'clamp(90px, 12vw, 175px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="./3d_toy_bunny.png" alt="Bunny" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Parent Reviews</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(26px, 5vw, 50px)', color: 'var(--text-dark)', margin: '10px 0 14px', lineHeight: 1.2 }}>
              What Parents Say
            </h1>
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              Read heart-warming experiences from parents who trusted Baby Shine Studio to preserve their baby's earliest, most precious days.
            </p>
          </motion.div>
        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* ── Rating Dashboard ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }} className="stats-3-mob">
          {[
            { val: '4.9', sub: 'Google Star Rating', stars: true },
            { val: '120+', sub: '5-Star Reviews', label: 'Verified Vijayawada Parents' },
            { val: '100%', sub: 'Satisfaction', label: 'Safety & Posing Quality' }
          ].map((s, i) => (
            <div key={i} style={{
              background: i === 1 ? 'linear-gradient(135deg,#FFE9F0,#FFF0E5)' : '#fff',
              borderRadius: '20px', padding: '28px 16px', textAlign: 'center',
              border: i === 1 ? '1.5px solid rgba(222,93,131,0.2)' : '1px solid rgba(222,93,131,0.08)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div className="heading-sans" style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--text-dark)', margin: '0 0 4px' }}>{s.val}</div>

              {s.label && <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-pink)', margin: '0 0 2px' }}>{s.label}</p>}
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Featured Big Quote with image ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0', borderRadius: '28px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '60px' }} className="featured-quote-grid">
          {/* Image half */}
          <div style={{ position: 'relative', minHeight: '220px' }}>
            <img src="./baby_hero.png" alt="Happy family" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '220px' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(222,93,131,0.45) 0%, rgba(255,240,229,0.35) 100%)' }} />
          </div>
          {/* Quote half */}
          <div style={{ background: 'linear-gradient(135deg,#FFE9F0 0%,#FFF0E5 100%)', padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ color: 'var(--primary-pink)', fontSize: '48px', fontFamily: 'serif', lineHeight: 0.8, marginBottom: '16px', opacity: 0.4 }}>"</div>

            <blockquote style={{ fontSize: 'clamp(15px, 2vw, 19px)', fontStyle: 'italic', color: 'var(--text-dark)', fontFamily: 'var(--serif)', lineHeight: 1.7, margin: '0 0 20px' }}>
              "We chose the Baby Shine Combo package and we are so glad we did. Powered by Sai Krishna Photography, they truly live up to their 30-year legacy. Every single frame is magazine-worthy!"
            </blockquote>
            <div>
              <h4 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px', color: 'var(--text-dark)' }}>Anjali & Rakesh Verma</h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>Parents of Baby Aarav · Vijayawada · March 2026</p>
            </div>
          </div>
        </motion.div>

        {/* ── Reviews Grid with per-card image thumbnail ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal} style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>All Reviews</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>From Our Happy Families</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '60px' }} className="md-grid-2">
          {testimonials.map((t, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -5, boxShadow: '0 14px 30px rgba(222,93,131,0.1)' }}
              style={{ backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(61,51,42,0.05)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}
            >
              {/* Thumbnail strip */}
              <div style={{ width: '100%', height: '140px', overflow: 'hidden', flexShrink: 0 }}>
                <img src={t.img} alt={t.name} style={{ width: '100%', height: '140px', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', transition: 'transform 0.4s ease' }} className="review-img" />
              </div>
              {/* Content */}
              <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div>
                    <h4 className="heading-sans" style={{ fontSize: '14px', margin: '0 0 2px', color: 'var(--text-dark)' }}>{t.name}</h4>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{t.location} · {t.date}</span>
                  </div>

                </div>
                <h5 className="heading-serif" style={{ fontSize: '14px', margin: '0 0 8px', color: 'var(--primary-pink)' }}>"{t.title}"</h5>
                <p style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0, flex: 1 }}>{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
          style={{ background: 'linear-gradient(135deg,#FFE9F0 0%,#FFF0E5 100%)', borderRadius: '28px', padding: '48px 32px', textAlign: 'center', border: '1.5px solid rgba(222,93,131,0.15)' }}>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 32px)', color: 'var(--text-dark)', margin: '0 0 10px' }}>
            Join 1000+ Happy Families in Vijayawada
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '26px', maxWidth: '480px', marginInline: 'auto' }}>
            Your baby's precious early days are fleeting. Let us capture them beautifully for you.
          </p>
          <button onClick={() => setActivePage && setActivePage('book')} className="pulse-btn" style={{
            backgroundColor: 'var(--primary-pink)', color: 'white', border: 'none',
            borderRadius: '28px', padding: '14px 36px', fontSize: '16px', fontWeight: 700,
            cursor: 'pointer', fontFamily: 'var(--sans)', boxShadow: '0 6px 20px rgba(222,93,131,0.35)'
          }}>
            Book Your Session
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .featured-quote-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-3-mob { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .stats-3-mob { grid-template-columns: 1fr !important; }
        }
        .review-img:hover { transform: scale(1.05); }
      `}</style>
    </div>
  );
}
