import React from 'react';
import { motion } from 'framer-motion';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] } })
};

const springUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14, delay: i * 0.1 } })
};

const float = {
  animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
};

export default function MileStone({ setActivePage }) {
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 100%)', overflowX: 'hidden', position: 'relative' }}>
      <section className="page-hero-section" style={{
        padding: '80px 24px', textAlign: 'center',
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 60%, #FFF5F6 100%)',
        position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {/* Looping Background Video */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          >
            <source src="/milestone_hero_bg.mp4" type="video/mp4" />
          </video>
          {/* Overlay Tint for Text Contrast */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 240, 229, 0.45) 0%, rgba(255, 233, 240, 0.5) 60%, rgba(255, 255, 255, 0.3) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
        </div>

        {/* Floating 3D Gold Star Mascot – Left */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -15, 0], rotate: [-4, 4, -4] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            left: '20px',
            bottom: '10px',
            width: 'clamp(90px, 12vw, 160px)',
            height: 'clamp(90px, 12vw, 160px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="/3d_gold_star.png" alt="Gold Star" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Floating 3D Teddy Bear Mascot – Right */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -12, 0], rotate: [3, -3, 3] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }
          }}
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '10px',
            width: 'clamp(90px, 12vw, 160px)',
            height: 'clamp(90px, 12vw, 160px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="/3d_teddy_bear.png" alt="Teddy Bear" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 4 }}>
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
            <motion.span variants={fadeUp} style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-block' }}>Milestone Sessions</motion.span>
            <motion.h1 variants={fadeUp} className="heading-serif" style={{ fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '16px', lineHeight: 1.2 }}>
              Baby Milestone Shoots
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
              Celebrate every milestone — sitting, crawling, standing, and first steps.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>
        <motion.div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center', marginBottom: '60px' }} className="md-grid-2"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div variants={springUp} style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
            <motion.img src="/onemonth_shoot.png" alt="Baby milestone" style={{ width: '100%', height: 'auto', display: 'block' }}
              whileHover={{ scale: 1.04 }} transition={{ duration: 0.5 }} />
          </motion.div>
          <motion.div variants={springUp}>
            <motion.h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--text-dark)', marginBottom: '16px' }}>Capture Every Precious Stage</motion.h2>
            <motion.p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '16px' }}>
              From the first smile to the first step, every milestone is a moment worth preserving forever. Our milestone sessions are designed to capture your baby's growing personality in a relaxed, natural environment.
            </motion.p>
            <motion.p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '24px' }}>
              We use age-appropriate props and setups that keep your baby comfortable while highlighting their unique expressions and developmental achievements.
            </motion.p>
            <motion.div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
              <motion.div variants={fadeUp}><span style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: 500 }}>Sitting & Crawling Poses</span></motion.div>
              <motion.div variants={fadeUp}><span style={{ fontSize: '14px', color: 'var(--text-dark)', fontWeight: 500 }}>Standing & First Steps</span></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '50px' }} className="md-grid-3"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          {[
            { title: 'Professional Setup', desc: 'Custom backdrops and props tailored to your baby\'s age and milestone.' },
            { title: 'Comfort First', desc: 'We follow your baby\'s cues with plenty of breaks for feeding and cuddles.' },
            { title: 'Flexible Timing', desc: 'Sessions scheduled during your baby\'s happiest and most alert times.' }
          ].map((feat, idx) => (
            <motion.div key={idx} variants={springUp} custom={idx}
              whileHover={{ y: -6, boxShadow: '0 14px 30px rgba(222,93,131,0.12)', borderColor: 'rgba(222,93,131,0.2)' }}
              style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '28px 24px', textAlign: 'center', border: '1px solid rgba(222,93,131,0.08)', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', transition: 'border-color 0.3s' }}
            >

              <h3 className="heading-sans" style={{ fontSize: '16px', margin: '0 0 8px', color: 'var(--text-dark)' }}>{feat.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
          <motion.button onClick={() => setActivePage('book')} style={{
            backgroundColor: 'var(--primary-pink)', color: 'white', border: 'none',
            borderRadius: '28px', padding: '16px 40px', fontSize: '16px', fontWeight: 700,
            cursor: 'pointer', fontFamily: 'var(--sans)', boxShadow: '0 8px 24px rgba(222,93,131,0.35)',
            display: 'inline-flex', alignItems: 'center', gap: '8px'
          }}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 32px rgba(222,93,131,0.45)' }}
            whileTap={{ scale: 0.97 }}>
            Book This Session
          </motion.button>
        </motion.div>
      </div>

      <style>{`@media (min-width: 768px) { .md-grid-2 { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; } .md-grid-3 { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
    </div>
  );
}
