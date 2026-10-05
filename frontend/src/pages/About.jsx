import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const aboutFaqs = [
  {
    q: 'What makes Baby Shine Studio different from other photography studios?',
    a: 'Baby Shine Studio is dedicated to newborn, baby, milestone, and family photography. Our personalized approach, creative styling, and baby-friendly environment help create a comfortable experience while delivering timeless photographs families treasure forever.'
  },
  {
    q: 'Do you specialize in newborn and baby photography?',
    a: 'Yes. We specialize in newborn photography, baby milestone sessions, cake smash photography, first birthday celebrations, and family portraits. Every session is carefully planned to ensure both comfort and safety.'
  },
  {
    q: 'Is your studio safe for newborns and babies?',
    a: 'Absolutely. Your baby\'s well-being is our highest priority. We maintain a clean, hygienic, and comfortable studio environment and follow safe photography practices throughout every session.'
  },
  {
    q: 'When should I book a newborn photography session?',
    a: 'We recommend booking during pregnancy whenever possible. This allows us to reserve your session around your due date and ensure availability during the ideal newborn photography window.'
  },
  {
    q: 'Can parents and siblings be included in the photoshoot?',
    a: 'Of course. Family portraits often become some of the most meaningful images from a session. Parents, siblings, and grandparents are always welcome to participate.'
  },
  {
    q: 'Do you provide props, themes, and outfits?',
    a: 'Yes. We offer a thoughtfully curated collection of wraps, accessories, props, and themed setups designed specifically for newborns, babies, and milestone sessions.'
  },
  {
    q: 'What photography sessions do you offer?',
    a: 'We offer:\n- Newborn Photography\n- Baby Milestone Photography\n- 1 Month Baby Photoshoots\n- Cake Smash Photography\n- First Birthday Photoshoots\n- Family Portrait Sessions\n- Parent & Baby Photography\n- Sibling Photography'
  },
  {
    q: 'How do you make babies comfortable during a session?',
    a: 'We work entirely at your baby\'s pace. Sessions include plenty of time for feeding, cuddles, diaper changes, and breaks whenever needed, creating a relaxed and enjoyable experience for the whole family.'
  },
  {
    q: 'Do families return for future sessions?',
    a: 'Yes. Many families first visit us for newborn photography and continue returning for milestone sessions, birthdays, and family portraits as their children grow. Being part of these ongoing journeys is one of the most rewarding aspects of what we do.'
  }
];

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const teamMembers = [
  {
    name: 'Sri Krishna Babu',
    role: 'Founder & Lead Photographer',
    exp: '30+ Years',
    desc: 'Founder of Sai Krishna Photography. Specialist in natural light newborn posing and creative studio lighting.',
    color: '#FFEBF0'
  },
  {
    name: 'Lakshmi Devi',
    role: 'Newborn Posing Specialist',
    exp: '8 Years',
    desc: 'Certified newborn safety handler trained in safe posing techniques. Mum of two, passionate about preserving baby moments.',
    color: '#FFF6E5'
  },
  {
    name: 'Arjun Rao',
    role: 'Post-Processing & Retouching',
    exp: '12 Years',
    desc: 'Expert digital artist specializing in skin-friendly baby photo retouching that preserves natural baby textures.',
    color: '#E6F0FA'
  }
];

const galleryItems = [
  { id: 1,  title: 'Studio Portrait Session',   category: 'newborn',  img: '/gallery/web/sks00320.jpg', desc: 'Professional newborn studio portrait with warm lighting.' },
  { id: 2,  title: 'Baby Close-Up Detail',      category: 'newborn',  img: '/gallery/web/sks00323.jpg', desc: "Delicate close-up of a newborn's tiny features." },
  { id: 3,  title: 'Lifestyle Baby Shot',       category: 'onemonth', img: '/gallery/web/sks00391.jpg', desc: 'Natural lifestyle moment captured beautifully.' },
  { id: 4,  title: 'Smiling Milestone Baby',   category: 'onemonth', img: '/gallery/web/sks02179.jpg', desc: 'Baby smiling during a 1-month milestone session.' },
  { id: 5,  title: 'Sitter Pose Session',      category: 'sitter',   img: '/gallery/web/sks02792.jpg', desc: "Confident sitter pose showcasing the baby's personality." },
  { id: 6,  title: 'Classic Newborn Wrap',     category: 'newborn',  img: '/gallery/web/sks02915.jpg', desc: 'Classic swaddle wrap on a textured white background.' },
  { id: 7,  title: 'Adorable Baby Portrait',   category: 'newborn',  img: '/gallery/web/sks03263.jpg', desc: 'Precious newborn portrait in natural studio light.' },
  { id: 8,  title: 'Milestone Happy Giggles',  category: 'onemonth', img: '/gallery/web/sks03284.jpg', desc: 'Baby giggling during a fun milestone shoot.' },
  { id: 9,  title: 'Cozy Studio Session',      category: 'sitter',   img: '/gallery/web/sks03334.jpg', desc: 'Cozy sitter session with warm studio backdrops.' },
  { id: 10, title: 'First Week Memories',      category: 'newborn',  img: '/gallery/web/sks03486.jpg', desc: 'Capturing the first precious week of a newborn.' },
  { id: 11, title: 'Alert Baby Expressions',   category: 'onemonth', img: '/gallery/web/sks03801.jpg', desc: 'Wide-eyed alert expressions during milestone session.' },
  { id: 12, title: 'Studio Baby Candid',       category: 'sitter',   img: '/gallery/web/sks03807.jpg', desc: 'Candid moment captured naturally in the studio.' },
];

const categoryLabel = { all: 'All Shoots', newborn: 'Newborn', onemonth: '1 Month', sitter: 'Sitter' };

const sectionTwoLooks = [
  { img: '/gallery/web/sks03836.jpg', label: 'Cozy Newborn Swaddle',    desc: 'Precious details of a sleeping baby in a soft studio setup.' },
  { img: '/gallery/web/sks03934.jpg', label: 'Studio Milestone Smile',  desc: 'Expressive milestone baby portrait at Sai Krishna Studio.' },
  { img: '/gallery/web/sks04127.jpg', label: 'Newborn Warm Wrap',       desc: 'Gentle organic wraps designed to keep newborns safe and content.' },
  { img: '/gallery/web/sks04580.jpg', label: 'Playful Sitter Joy',      desc: 'Capturing giggles, first teeth, and active posture milestones.' }
];

function PortfolioGrid({ setActivePage }) {
  const [filter, setFilter] = useState('all');
  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const handlePrev = () => setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  const handleNext = () => setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {['all', 'newborn', 'onemonth', 'sitter'].map(tab => {
          const isActive = filter === tab;
          return (
            <button key={tab} onClick={() => setFilter(tab)} style={{
              border: 'none',
              backgroundColor: isActive ? 'var(--primary-pink)' : 'rgba(222,93,131,0.07)',
              color: isActive ? 'white' : 'var(--text-dark)',
              padding: '9px 20px', borderRadius: '20px', fontSize: '13px', fontWeight: 600,
              cursor: 'pointer', fontFamily: 'var(--sans)', transition: 'all 0.2s ease',
              boxShadow: isActive ? '0 4px 12px rgba(222,93,131,0.25)' : 'none'
            }}>
              {tab === 'all' ? 'All Shoots' : tab === 'newborn' ? 'Newborn (5–14 Days)' : tab === 'onemonth' ? '1 Month Milestones' : 'Sitter & Toddler'}
            </button>
          );
        })}
      </div>

      <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '32px' }} className="gallery-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div layout key={item.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              onClick={() => setLightboxIndex(idx)}
              style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative', cursor: 'pointer', background: '#fff', boxShadow: '0 4px 16px rgba(61,51,42,0.08)', aspectRatio: '1 / 1' }}
              whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(222,93,131,0.15)' }}
            >
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(31,20,25,0.78) 100%)',
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '12px'
              }} className="gallery-overlay">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>View</span>
                </div>
                <h3 className="heading-serif" style={{ fontSize: '13px', margin: 0, color: 'white', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.72)', margin: '2px 0 0', lineHeight: 1.3 }}>{item.desc}</p>
              </div>
              <span style={{
                position: 'absolute', top: '8px', left: '8px',
                backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '2px 8px', fontSize: '9px', fontWeight: 700,
                color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '0.5px'
              }}>{categoryLabel[item.category]}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.93)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
            onClick={() => setLightboxIndex(null)}
          >

            <motion.div key={lightboxIndex} initial={{ scale: 0.94 }} animate={{ scale: 1 }} exit={{ scale: 0.94 }} transition={{ duration: 0.2 }}
              style={{ maxWidth: '88%', maxHeight: '82%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={filteredItems[lightboxIndex].img} alt={filteredItems[lightboxIndex].title}
                style={{ maxWidth: '100%', maxHeight: '68vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}
              />
              <div style={{ color: 'white', textAlign: 'center', marginTop: '18px' }}>
                <h3 className="heading-serif" style={{ fontSize: '18px', margin: '0 0 4px', color: 'white' }}>{filteredItems[lightboxIndex].title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.68)', margin: 0 }}>{filteredItems[lightboxIndex].desc}</p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function About({ setActivePage }) {
  const [expandedSafety, setExpandedSafety] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [fullWidthFilter, setFullWidthFilter] = useState('all');
  const [fullWidthLightboxIndex, setFullWidthLightboxIndex] = useState(null);
  const [secTwoIdx, setSecTwoIdx] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSecTwoIdx(prev => (prev + 1) % sectionTwoLooks.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      {/* ── HERO HEADER with Full-Screen Video Background ── */}
      <section className="about-hero" style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        {/* Video Player Wrapper */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          >
            <source src="/gallery/main/VIDEOS/ayaan_suprith.mp4" type="video/mp4" />
            <source src="./about_hero_bg.mp4" type="video/mp4" />
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

        {/* Floating Teddy Bear Mascot – Left */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -14, 0], rotate: [-3, 3, -3] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            left: '20px',
            bottom: '10px',
            width: 'clamp(100px, 12vw, 180px)',
            height: 'clamp(100px, 12vw, 180px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="./3d_teddy_bear.png" alt="Teddy Bear" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Floating Heart – Right */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -18, 0], rotate: [4, -4, 4] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
          }}
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '10px',
            width: 'clamp(100px, 12vw, 170px)',
            height: 'clamp(100px, 12vw, 170px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="./3d_toy_bunny.png" alt="Baby Toy Bunny" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 3, maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>About Baby Shine Studio</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(28px, 5vw, 52px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '16px', lineHeight: 1.2 }}>
              Where Precious Memories Become Timeless Keepsakes
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 auto' }}>
              Every child brings a unique story into the world—a story filled with tiny milestones, joyful discoveries, and unforgettable moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: '1050px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Narrative Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '80px'
        }} className="md-grid-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              aspectRatio: '4 / 3',
              width: '100%',
              backgroundColor: '#FFF5F6'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={secTwoIdx}
                initial={{ opacity: 0, scale: 1.04, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
              >
                <img
                  src={sectionTwoLooks[secTwoIdx].img}
                  alt={sectionTwoLooks[secTwoIdx].label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                
                {/* Gradient text overlay for the current look */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(31, 20, 25, 0.82) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  textAlign: 'left'
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                    Featured Look
                  </span>
                  <h4 className="heading-sans" style={{ color: 'white', margin: 0, fontSize: '18px', fontWeight: 600 }}>
                    {sectionTwoLooks[secTwoIdx].label}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: '4px 0 0', fontSize: '12px', lineHeight: 1.4 }}>
                    {sectionTwoLooks[secTwoIdx].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick-switch indicator dots */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              gap: '6px',
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(6px)',
              padding: '6px 12px',
              borderRadius: '20px',
              zIndex: 3
            }}>
              {sectionTwoLooks.map((look, lIdx) => {
                const isSelected = secTwoIdx === lIdx;
                return (
                  <button
                    key={lIdx}
                    onClick={() => setSecTwoIdx(lIdx)}
                    style={{
                      border: 'none',
                      padding: 0,
                      width: isSelected ? '18px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: isSelected ? 'var(--primary-pink)' : 'rgba(255,255,255,0.6)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    title={look.label}
                  />
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            <h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Capturing Timeless Memories
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '16px' }}>
              At Baby Shine Studio, our passion is capturing those tiny milestones and turning them into memories that families can cherish for generations. As a trusted baby photography studio in Vijayawada, we specialize in creating beautiful portraits that celebrate every stage of childhood, from those precious newborn days to milestone celebrations and first birthdays.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '24px' }}>
              We believe the most meaningful photographs are the ones that make you smile years later and instantly take you back to a special moment in time.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <h4 className="heading-sans" style={{ margin: '0 0 4px', fontSize: '16px', color: 'var(--text-dark)' }}>Certified Experts</h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Posing and handling training.</p>
              </div>
              <div style={{ borderLeft: '1px solid rgba(61, 51, 42, 0.15)', paddingLeft: '20px' }}>
                <h4 className="heading-sans" style={{ margin: '0 0 4px', fontSize: '16px', color: 'var(--text-dark)' }}>30-Year Heritage</h4>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Powered by Sai Krishna Photography.</p>
              </div>
            </div>

            <button
              onClick={() => setActivePage && setActivePage('book')}
              style={{
                marginTop: '28px',
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                borderRadius: '24px',
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                boxShadow: '0 4px 14px rgba(222, 93, 131, 0.3)'
              }}
            >
              Book a Session
            </button>
          </motion.div>
        </div>

        {/* Story Section Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginBottom: '80px' }} className="md-grid-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollReveal}
            style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              padding: '40px 30px',
              border: '1px solid rgba(222, 93, 131, 0.08)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Legacy & Love</span>
            <h3 className="heading-serif" style={{ fontSize: '24px', color: 'var(--text-dark)', marginTop: '8px', marginBottom: '16px' }}>Our Story</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '14px' }}>
              Baby Shine Studio was created with one simple vision: to provide families with a warm, welcoming space where life's most precious moments can be beautifully preserved.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
              Powered by the trusted legacy of <strong>Sai Krishna Photography</strong>, our studio combines over three decades of professional photography experience with a genuine love for capturing childhood memories. Today, families trust us to capture everything from newborn portraits and milestone sessions to cake smash celebrations and family portraits.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollReveal}
            style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              padding: '40px 30px',
              border: '1px solid rgba(222, 93, 131, 0.08)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Preserving Emotions</span>
            <h3 className="heading-serif" style={{ fontSize: '24px', color: 'var(--text-dark)', marginTop: '8px', marginBottom: '16px' }}>More Than Just Photography</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '14px' }}>
              Photography is about more than creating beautiful images. It's about preserving emotions, relationships, and memories that become more valuable with every passing year.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
              The newborn stage lasts only a few weeks. The tiny hands you hold today won't stay tiny forever. At Baby Shine Studio, we help you hold on to those moments through photographs that reflect the love, joy, and connection that make your family unique.
            </p>
          </motion.div>
        </div>

        {/* Studio Design Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{
            backgroundColor: 'rgba(222, 93, 131, 0.03)',
            border: '1px solid rgba(222, 93, 131, 0.1)',
            borderRadius: '24px',
            padding: '40px',
            textAlign: 'left',
            marginBottom: '80px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>

            <h3 className="heading-serif" style={{ fontSize: '24px', color: 'var(--text-dark)', margin: 0 }}>A Studio Designed Around Your Baby</h3>
          </div>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
            We understand that every baby is different, which is why we create a relaxed and comfortable experience tailored to your little one. Our studio has been thoughtfully designed to provide a calm, safe, and baby-friendly environment where parents can feel at ease while we create beautiful memories. We work patiently at your baby's pace, allowing time for feeding, cuddles, breaks, and everything needed to ensure a stress-free experience.
          </p>
        </motion.div>

        {/* ── REAL DRIVE CLIENT FILM SPOTLIGHT ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{
            marginBottom: '80px',
            textAlign: 'center'
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Behind The Lens
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 4vw, 38px)', color: 'var(--text-dark)', marginTop: '8px', marginBottom: '14px' }}>
            Watch Our Studio in Action
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Experience the patience, gentle care, and artistic magic behind every Sai Krishna Photography session in Vijayawada.
          </p>

          <div style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(61, 51, 42, 0.15)',
            border: '4px solid #fff',
            backgroundColor: '#1E1915'
          }}>
            <video
              controls
              playsInline
              poster="/gallery/web/sks00320.jpg"
              style={{ width: '100%', height: 'auto', maxHeight: '520px', display: 'block', objectFit: 'cover' }}
            >
              <source src="/gallery/main/VIDEOS/ayaan_suprith.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </motion.div>

        {/* Interactive Legacy Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ marginBottom: '80px', position: 'relative' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Journey</span>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', color: 'var(--text-dark)', marginTop: '8px' }}>30 Years of Photographic Legacy</h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            {/* Line */}
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--pastel-pink)', zIndex: 1 }} className="timeline-line-desktop" />

            {[
              { year: '1996', title: 'Sai Krishna Photography Founded', desc: 'Started as a small studio in Vijayawada capturing local weddings and family portraits with traditional film cameras.' },
              { year: '2008', title: 'Digital Era Transition', desc: 'Adopted digital SLR cameras and high-end editing software, establishing a reputation for professional quality and creative vision.' },
              { year: '2018', title: 'Specializing in Newborns', desc: 'Realized the need for a dedicated, safe baby photography studio. Developed custom baby props and safe posing methodologies.' },
              { year: '2026', title: 'Baby Shine Studio Launch', desc: 'Launched the premium state-of-the-art Baby Shine Studio, Vijayawada\'s most advanced, sanitised baby portrait experience.' }
            ].map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  alignItems: 'center',
                  position: 'relative',
                  marginBottom: '40px',
                  width: '100%',
                }} className="timeline-item">

                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '3px solid var(--primary-pink)',
                    zIndex: 2,
                    boxShadow: '0 0 10px rgba(222, 93, 131, 0.4)'
                  }} className="timeline-dot-desktop" />

                  <motion.div
                    whileHover={{ y: -5, boxShadow: '0 10px 24px rgba(222, 93, 131, 0.1)' }}
                    style={{
                      width: '45%',
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      padding: '24px',
                      border: '1px solid rgba(222, 93, 131, 0.08)',
                      boxShadow: 'var(--shadow-sm)',
                      textAlign: isEven ? 'right' : 'left',
                      position: 'relative',
                      zIndex: 3
                    }}
                    className="timeline-card"
                  >
                    <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-pink)' }}>{milestone.year}</span>
                    <h4 className="heading-sans" style={{ fontSize: '16px', margin: '4px 0 10px', color: 'var(--text-dark)' }}>{milestone.title}</h4>
                    <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{milestone.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            marginBottom: '80px'
          }}
          className="stats-grid-4"
        >
          {[
            { value: '30+', label: 'Years of Photography Legacy', color: '#FFEBF0' },
            { value: '1000+', label: 'Newborns & Babies Captured', color: '#FFF6E5' },
            { value: '100%', label: 'Safety & Hygiene Certified', color: '#E6F9F2' },
            { value: '4.9★', label: 'Google Star Rating', color: '#E6F0FA' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: stat.color,
                borderRadius: '20px',
                padding: '28px 20px',
                textAlign: 'center',
                border: '1px solid rgba(222, 93, 131, 0.1)'
              }}
            >
              <div className="heading-sans" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--primary-pink)', marginBottom: '6px' }}>{stat.value}</div>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* What Makes Us Special Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Our Distinct Approach</span>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', color: 'var(--text-dark)', marginTop: '8px' }}>What Makes Baby Shine Studio Special?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="md-grid-3">
            {[
              { title: 'Personalized Experience', desc: 'Every family has a unique story, and every session should reflect that. We take the time to understand your preferences, style, and vision to create photographs that feel personal and meaningful.' },
              { title: 'Creative Styling & Themes', desc: 'From elegant newborn portraits to playful first birthday celebrations, our creative setups are carefully designed to enhance every photograph while keeping your baby at the heart of the story.' },
              { title: 'Professional Expertise', desc: 'Backed by decades of photography experience, our team understands how to work with babies and young children in a way that feels natural, comfortable, and enjoyable.' },
              { title: 'Timeless Photography', desc: 'Trends come and go, but meaningful photographs never lose their value. We focus on creating images that remain beautiful and cherished for generations.' },
              { title: 'Family-Focused Approach', desc: 'Some of the most treasured photographs are the ones that celebrate family connections. That\'s why we encourage parents, siblings, and grandparents to be part of the experience whenever possible.' }
            ].map((special, sidx) => (
              <motion.div
                key={sidx}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  border: '1px solid rgba(222, 93, 131, 0.08)',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'left'
                }}
              >

                <h4 className="heading-sans" style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--text-dark)' }}>{special.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{special.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us & Mission Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginBottom: '80px' }} className="md-grid-2">

          {/* Why Families Choose Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollReveal}
            style={{
              backgroundColor: 'var(--cream-white)',
              border: '1.5px solid var(--border-light)',
              borderRadius: '24px',
              padding: '36px 30px',
              textAlign: 'left'
            }}
          >
            <h3 className="heading-serif" style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '20px' }}>Why Families Choose Us</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Warm & Baby-Friendly Studio Environment',
                'Safe and Comfortable Photography Sessions',
                'Personalized Themes & Creative Concepts',
                'Professional Photography Backed by 30+ Years of Experience',
                'High-Quality Editing & Premium Deliverables',
                'Relaxed and Family-Centered Experience',
                'Trusted by Families Across Vijayawada',
                'Timeless Photography You\'ll Treasure Forever'
              ].map((reason, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--text-dark)' }}>
                  <span style={{ color: 'var(--primary-pink)', fontWeight: 'bold' }}>✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Mission & Serving Vijayawada */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

            {/* Our Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scrollReveal}
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgba(222, 93, 131, 0.08)',
                borderRadius: '24px',
                padding: '30px',
                textAlign: 'left',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 className="heading-serif" style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '12px' }}>Our Mission</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '12px' }}>
                Our mission is simple—to create heartfelt photographs that celebrate childhood, strengthen family memories, and preserve life\'s most meaningful moments.
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
                Every session is guided by care, creativity, patience, and a commitment to delivering an experience that families will remember just as fondly as the photographs themselves. Because the moments that matter most deserve to be remembered forever.
              </p>
            </motion.div>

            {/* Serving Families Across Vijayawada */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scrollReveal}
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgba(222, 93, 131, 0.08)',
                borderRadius: '24px',
                padding: '30px',
                textAlign: 'left',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h3 className="heading-serif" style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '12px' }}>Serving Families Across Vijayawada</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '10px' }}>
                Over the years, we have welcomed families from across Vijayawada and nearby communities, including Benz Circle, Labbipet, Patamata, Gunadala, Poranki, Kanuru, Penamaluru, Tadigadapa, and surrounding areas.
              </p>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
                Many parents first visit us for newborn photography and continue returning as their children grow. From milestone sessions and first birthdays to family portraits, we are honored to be a part of so many special memories.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Meet the Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>The People Behind the Magic</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', color: 'var(--text-dark)', marginTop: '8px' }}>Meet Our Studio Team</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '80px' }} className="md-grid-3">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6, boxShadow: '0 14px 30px rgba(222, 93, 131, 0.1)' }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '24px',
                padding: '32px 24px',
                textAlign: 'center',
                border: '1px solid rgba(222, 93, 131, 0.08)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >

              <h3 className="heading-sans" style={{ fontSize: '17px', margin: '0 0 4px', color: 'var(--text-dark)' }}>{member.name}</h3>
              <p style={{ fontSize: '12px', color: 'var(--primary-pink)', fontWeight: 600, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{member.role}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0 0 12px' }}>{member.exp} Experience</p>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{member.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── PORTFOLIO GALLERY (FULL WIDTH) ── */}
      <div style={{ width: '100%', background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 100%)', padding: '80px 0', borderTop: '1px solid rgba(222, 93, 131, 0.08)', borderBottom: '1px solid rgba(222, 93, 131, 0.08)' }}>
        
        {/* Header Info */}
        <div style={{ maxWidth: '800px', margin: '0 auto 40px', padding: '0 24px', textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollReveal}
          >
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Portfolio</span>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', color: 'var(--text-dark)', marginTop: '8px', marginBottom: '16px' }}>
              Baby Gallery
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Browse our portfolio of sleeping newborns, smiling infants, and active sitters in custom creative themes.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px', padding: '0 24px' }}>
          {['all', 'newborn', 'onemonth', 'sitter'].map(tab => {
            const isActive = fullWidthFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFullWidthFilter(tab)}
                style={{
                  border: 'none',
                  backgroundColor: isActive ? 'var(--primary-pink)' : 'rgba(255, 255, 255, 0.8)',
                  color: isActive ? 'white' : 'var(--text-dark)',
                  padding: '10px 24px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  boxShadow: isActive ? '0 6px 16px rgba(222,93,131,0.25)' : '0 2px 8px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(222,93,131,0.06)'
                }}
              >
                {tab === 'all' ? 'All Shoots' : tab === 'newborn' ? 'Newborn (5–14 Days)' : tab === 'onemonth' ? '1 Month Milestones' : 'Sitter & Toddler'}
              </button>
            );
          })}
        </div>

        {/* Staggered Grid of items */}
        <div style={{ width: '100%', padding: '0 40px', boxSizing: 'border-box' }} className="fw-grid-container">
          <motion.div
            layout
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
              width: '100%'
            }}
          >
            <AnimatePresence mode="popLayout">
              {galleryItems
                .filter(item => fullWidthFilter === 'all' || item.category === fullWidthFilter)
                .map((item, idx) => (
                  <motion.div
                    layout
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.94 },
                      show: { opacity: 1, y: 0, scale: 1 }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                    transition={{ duration: 0.45 }}
                    onClick={() => setFullWidthLightboxIndex(idx)}
                    whileHover={{ y: -6, scale: 1.02 }}
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      background: '#fff',
                      boxShadow: '0 8px 24px rgba(61,51,42,0.08)',
                      aspectRatio: '1 / 1',
                      transition: 'box-shadow 0.3s ease'
                    }}
                    className="fw-gallery-card"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                      className="fw-gallery-img"
                    />
                    
                    {/* Overlay details */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 30%, rgba(31,20,25,0.85) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '20px',
                        zIndex: 2
                      }}
                      className="fw-overlay"
                    >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>View Image</span>
                    </div>
                      <h3 className="heading-serif" style={{ fontSize: '16px', margin: 0, color: 'white', lineHeight: 1.3 }}>{item.title}</h3>
                      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', margin: '4px 0 0', lineHeight: 1.4 }}>{item.desc}</p>
                    </div>

                    {/* Badge */}
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(6px)',
                      borderRadius: '12px',
                      padding: '4px 12px',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: 'var(--primary-pink)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      zIndex: 1
                    }}>
                      {categoryLabel[item.category]}
                    </span>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: '1050px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* ── FAQ ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '28px', marginTop: '60px' }}
        >
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Got Questions?</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>Frequently Asked Questions</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '80px', textAlign: 'left' }}>
          {aboutFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                style={{ backgroundColor: '#fff', borderRadius: '14px', border: '1px solid rgba(222,93,131,0.1)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: '12px' }}
                >
                  <span className="heading-sans" style={{ fontSize: '14px', color: 'var(--text-dark)', flex: 1, fontWeight: 600 }}>{faq.q}</span>

                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{ margin: 0, padding: '0 18px 16px', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)', whiteSpace: 'pre-line' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{
            background: 'linear-gradient(135deg, #FFE9F0 0%, #FFF0E5 100%)',
            borderRadius: '28px',
            padding: '48px 32px',
            textAlign: 'center',
            border: '1.5px solid rgba(222, 93, 131, 0.15)'
          }}
        >
          <h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', color: 'var(--text-dark)', margin: '0 0 12px' }}>
            Ready to Book Your Baby's First Photoshoot?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '28px', maxWidth: '500px', marginInline: 'auto' }}>
            Sessions are best booked during pregnancy to secure your preferred date.
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
                padding: '14px 36px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                boxShadow: '0 6px 20px rgba(222, 93, 131, 0.35)'
              }}
            >
              Book Your Session Now
            </button>
          </div>
        </motion.div>

      </div>

      {/* ── FULL-WIDTH VIDEO SECTION BEFORE FOOTER ── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        minHeight: '400px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 1
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          >
            <source src="./Image_Regeneration_Baby_Hand.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 240, 229, 0.3) 0%, rgba(255, 233, 240, 0.35) 60%, rgba(255, 255, 255, 0.2) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
        </div>
        <div style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          maxWidth: '700px',
          padding: '0 24px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Cherish Every Moment</span>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 4vw, 42px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '16px', lineHeight: 1.2 }}>
              Let Us Capture Your Baby's Beautiful Journey
            </h2>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 auto 28px' }}>
              Every tiny smile, every sleepy cuddle, every milestone — preserved forever through our lens.
            </p>
            <button
              onClick={() => setActivePage && setActivePage('book')}
              className="pulse-btn"
              style={{
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                borderRadius: '28px',
                padding: '14px 36px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                boxShadow: '0 6px 20px rgba(222, 93, 131, 0.35)'
              }}
            >
              Book Your Session Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox for Full-Width Gallery */}
      <AnimatePresence>
        {fullWidthLightboxIndex !== null && (() => {
          const filtered = galleryItems.filter(item => fullWidthFilter === 'all' || item.category === fullWidthFilter);
          const currentItem = filtered[fullWidthLightboxIndex];
          if (!currentItem) return null;

          const handlePrevFW = () => setFullWidthLightboxIndex(prev => (prev === 0 ? filtered.length - 1 : prev - 1));
          const handleNextFW = () => setFullWidthLightboxIndex(prev => (prev === filtered.length - 1 ? 0 : prev + 1));

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.95)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px'
              }}
              onClick={() => setFullWidthLightboxIndex(null)}
            >


              {/* Image & Text Container */}
              <motion.div
                key={fullWidthLightboxIndex}
                initial={{ scale: 0.93, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.93, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ maxWidth: '85%', maxHeight: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentItem.img}
                  alt={currentItem.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
                <div style={{ color: 'white', textAlign: 'center', marginTop: '24px', maxWidth: '600px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--primary-pink)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    backgroundColor: 'rgba(222,93,131,0.15)',
                    padding: '3px 10px',
                    borderRadius: '8px',
                    display: 'inline-block',
                    marginBottom: '8px'
                  }}>
                    {categoryLabel[currentItem.category]}
                  </span>
                  <h3 className="heading-serif" style={{ fontSize: '22px', margin: '0 0 6px', color: 'white' }}>{currentItem.title}</h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>{currentItem.desc}</p>
                </div>
              </motion.div>


            </motion.div>
          );
        })()}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .md-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
          .stats-grid-4 { grid-template-columns: repeat(4, 1fr) !important; }
          .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1024px) { .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        .gallery-overlay:hover { opacity: 1 !important; }
        .fw-gallery-card:hover .fw-overlay { opacity: 1 !important; }
        .fw-gallery-card:hover .fw-gallery-img { transform: scale(1.06); }
        @media (max-width: 768px) {
          .timeline-line-desktop { left: 20px !important; transform: none !important; }
          .timeline-dot-desktop { left: 20px !important; transform: translate(-50%, -50%) !important; }
          .timeline-item { justify-content: flex-start !important; padding-left: 40px !important; }
          .timeline-card { width: 100% !important; text-align: left !important; }
          .fw-grid-container { padding: 0 20px !important; }
        }
        @media (max-width: 640px) {
          .about-hero { height: 70vh !important; min-height: 500px !important; }
          .about-hero h1 { font-size: clamp(22px, 7vw, 32px) !important; }
        }
      `}</style>
    </div>
  );
}
