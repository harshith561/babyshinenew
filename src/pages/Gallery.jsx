import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const galleryFaqs = [
  { q: 'What types of photography sessions are featured in the gallery?', a: 'Our gallery includes newborn photography, baby milestone sessions, 1 month baby photoshoots, cake smash photography, first birthday celebrations, and family portrait sessions.' },
  { q: 'Are these photographs from real client sessions?', a: 'Yes. Every image featured in our gallery comes from real photography sessions conducted at Baby Shine Studio and reflects our style, creativity, and commitment to quality.' },
  { q: 'Can I choose a similar theme for my baby\'s photoshoot?', a: 'Absolutely. If you see a theme, setup, or photography style you love, we\'ll be happy to create something similar while customizing it to suit your baby\'s personality and your family\'s preferences.' },
  { q: 'Do you provide props, outfits, and accessories?', a: 'Yes. We offer a carefully selected collection of baby-friendly props, wraps, outfits, accessories, and themed setups to make each session unique and memorable.' },
  { q: 'Can parents and siblings be included in the session?', a: 'Of course. Family photographs often become some of the most treasured images from a session, and we encourage parents and siblings to be part of the experience.' },
  { q: 'Do you offer cake smash photography in Vijayawada?', a: 'Yes. We provide customized cake smash photography sessions with creative themes, decorations, and styling designed to celebrate your baby\'s first birthday in a fun and memorable way.' },
  { q: 'How do I book a session with Baby Shine Studio?', a: 'Simply contact our team to discuss your preferred session, availability, and photography package. We\'ll guide you through every step and help create an experience that\'s perfect for your family.' }
];

const galleryItems = [
  { id: 1,  title: 'Cozy Swaddled Sleep',        category: 'newborn',  img: './baby_hero.png',                                        desc: 'Baby resting in a custom swaddle and woolen nest.' },
  { id: 2,  title: 'Smiling Bear Milestone',      category: 'onemonth', img: './onemonth_shoot.png',                                   desc: 'Smiling baby in a bear-ears hood during the alert phase.' },
  { id: 3,  title: 'Tiny Peeling Toes',           category: 'newborn',  img: './newborn_shoot.png',                                    desc: 'Macro capture of newborn peeling feet — pure detail.' },
  { id: 4,  title: 'Wooden Bowl Sitter',          category: 'sitter',   img: './sitter_shoot.png',                                     desc: 'Giggling 6-month-old holding a wooden ring toy.' },
  { id: 5,  title: 'Dreamy Fairy Teepee',         category: 'newborn',  img: './ChatGPT Image Jun 23, 2026, 11_14_44 AM.png',          desc: 'Premium sleep setup with fairy lights and stars.' },
  { id: 6,  title: 'Soft Linen Toddler',          category: 'sitter',   img: './sitter_shoot.png',                                     desc: 'Minimalist linen styling focused on baby posture.' },
  { id: 7,  title: 'Lavender Wrap',               category: 'newborn',  img: './newborn_shoot.png',                                    desc: 'Lavender wrap posing with an organic fabric background.' },
  { id: 8,  title: 'Tummy Time Joy',              category: 'onemonth', img: './onemonth_shoot.png',                                   desc: 'Alert expressions showing responsive smiles.' },
  { id: 9,  title: 'Hero First Week',             category: 'newborn',  img: './hero_slide_1.png',                                     desc: 'First week bliss captured in natural studio light.' },
  { id: 10, title: 'Cozy Romper Giggles',         category: 'onemonth', img: './hero_slide_2.png',                                     desc: 'Pixar-style cozy romper theme milestone session.' },
  { id: 11, title: 'Sitter Sweet Smiles',         category: 'sitter',   img: './hero_slide_3.png',                                     desc: 'Adorable sitting poses and expressive giggles.' },
  { id: 12, title: 'Dreamy Newborn Slumber',      category: 'newborn',  img: './hero_slide_4.png',                                     desc: 'Dreamy starry-night theme for sleeping newborns.' }
];

const categoryLabel = { all: 'All Shoots', newborn: 'Newborn', onemonth: '1 Month', sitter: 'Sitter' };

export default function Gallery({ setActivePage }) {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = () => setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  const handleNext = () => setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev + 1));

  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 60%, #FFF5F6 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Camera Mascot Left */}
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -14, 0], rotate: [-4, 4, -4] }}
          transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ position: 'absolute', left: '20px', bottom: '0px', width: 'clamp(90px, 13vw, 185px)', height: 'clamp(90px, 13vw, 185px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="./3d_baby_camera.png" alt="Baby Camera" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Teddy Right */}
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -18, 0], rotate: [5, -5, 5] }}
          transition={{ opacity: { duration: 0.8, delay: 0.2 }, scale: { duration: 0.8, delay: 0.2 }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }, rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 } }}
          style={{ position: 'absolute', right: '20px', bottom: '0px', width: 'clamp(90px, 12vw, 170px)', height: 'clamp(90px, 12vw, 170px)', pointerEvents: 'none', zIndex: 1 }}
        >
          <img src="./3d_teddy_bear.png" alt="Teddy Bear" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Baby Photography Gallery in Vijayawada</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(26px, 5vw, 50px)', color: 'var(--text-dark)', margin: '10px 0 14px', lineHeight: 1.2 }}>
              A Collection of Moments You'll Cherish Forever
            </h1>
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              Every photograph has a story to tell. Welcome to the Baby Shine Studio Gallery, where you'll find a beautiful collection of newborn portraits, milestone sessions, birthday celebrations, and family photographs.
            </p>
          </motion.div>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '50px 24px 80px' }}>

        {/* ── Filter Tabs ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['all', 'newborn', 'onemonth', 'sitter'].map(tab => {
            const isActive = filter === tab;
            return (
              <button key={tab} onClick={() => setFilter(tab)} style={{
                border: 'none',
                backgroundColor: isActive ? 'var(--primary-pink)' : 'rgba(222,93,131,0.07)',
                color: isActive ? 'white' : 'var(--text-dark)',
                padding: '9px 20px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 12px rgba(222,93,131,0.25)' : 'none'
              }}>
                {tab === 'all' ? 'All Shoots' : tab === 'newborn' ? 'Newborn (5–14 Days)' : tab === 'onemonth' ? '1 Month Milestones' : 'Sitter & Toddler'}
              </button>
            );
          })}
        </div>

        {/* ── Gallery Grid — small uniform cards ── */}
        <motion.div layout style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '60px'
        }} className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div layout key={item.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                onClick={() => setLightboxIndex(idx)}
                style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', cursor: 'pointer', background: '#fff', boxShadow: '0 4px 16px rgba(61,51,42,0.08)', aspectRatio: '1 / 1' }}
                whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(222,93,131,0.15)' }}
              >
                <img src={item.img} alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  className="gallery-img"
                />
                {/* Hover overlay */}
                <div className="gallery-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(31,20,25,0.78) 100%)',
                  opacity: 0, transition: 'opacity 0.3s ease',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '14px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>View</span>
                  </div>
                  <h3 className="heading-serif" style={{ fontSize: '14px', margin: 0, color: 'white', lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.72)', margin: '3px 0 0', lineHeight: 1.4 }}>{item.desc}</p>
                </div>

                {/* Category badge */}
                <span style={{
                  position: 'absolute', top: '10px', left: '10px',
                  backgroundColor: 'rgba(255,255,255,0.88)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '10px', padding: '3px 9px',
                  fontSize: '10px', fontWeight: 700, color: 'var(--primary-pink)',
                  textTransform: 'uppercase', letterSpacing: '0.5px'
                }}>{categoryLabel[item.category]}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Celebrating Every Stage of Your Baby's Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '60px', textAlign: 'left' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Growth Stages</span>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', color: 'var(--text-dark)', marginTop: '8px' }}>Celebrating Every Stage of Your Baby's Journey</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="md-grid-3">
            {[
              { title: 'Newborn Photography', desc: 'The newborn stage is one of the most precious and short-lived chapters of your baby\'s life. These portraits celebrate the tiny details, peaceful expressions, and overwhelming love that fill those early days. Our newborn photography sessions focus on creating soft, timeless images that families can cherish for generations.' },
              { title: 'Baby Milestone Photography', desc: 'Every milestone deserves to be celebrated. From first smiles and tummy time to sitting, crawling, and standing, milestone photography captures the incredible journey of growth during your baby\'s first year. These photographs become a visual story that allows parents to remember each beautiful stage along the way.' },
              { title: '1 Month Baby Photoshoots', desc: 'The first month is a milestone in itself. At this stage, babies begin to show more expressions, become more alert, and reveal the first glimpses of their unique personality. Our 1 month baby photoshoots focus on capturing these precious moments while creating beautiful memories for the entire family.' },
              { title: 'Cake Smash & First Birthday', desc: 'A first birthday is more than a celebration—it\'s a milestone filled with joy, excitement, and unforgettable memories. Our cake smash photography sessions are designed to be fun, playful, and full of personality. From themed setups to candid reactions, these sessions beautifully capture the magic of turning one.' },
              { title: 'Family Portraits', desc: 'Some of the most meaningful photographs are the ones that bring everyone together. Family portraits celebrate the bond between parents, siblings, grandparents, and children, creating memories that become even more valuable with time. These are the photographs that often become treasured keepsakes displayed proudly in homes.' }
            ].map((stage, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '18px', padding: '24px', border: '1px solid rgba(222, 93, 131, 0.08)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 className="heading-serif" style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '8px' }}>{stage.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{stage.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Natural & Timeless Style */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginBottom: '60px' }} className="md-grid-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#fff',
              border: '1px solid rgba(222, 93, 131, 0.08)',
              borderRadius: '24px',
              padding: '36px 30px',
              textAlign: 'left',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 className="heading-serif" style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '14px' }}>Photography That Feels Natural and Timeless</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '12px' }}>
              At Baby Shine Studio, we believe the best photographs are the ones that feel genuine. Rather than focusing on overly posed moments, we aim to capture authentic expressions, natural interactions, and the beautiful connections that make every family unique.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
              Our photography style is timeless, elegant, and focused on storytelling. We want every image to feel just as meaningful ten years from now as it does today. Because great photography isn't just about how a moment looked—it's about how it felt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#fff',
              border: '1px solid rgba(222, 93, 131, 0.08)',
              borderRadius: '24px',
              padding: '36px 30px',
              textAlign: 'left',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3 className="heading-serif" style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '14px' }}>Why Families Trust Baby Shine Studio</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '12px' }}>
              Families choose Baby Shine Studio because they want more than a photoshoot. They want an experience that feels comfortable, personalized, and memorable. They want photographs that capture real emotions and genuine moments.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
              With the trusted legacy of <strong>Sai Krishna Photography</strong> behind us, we are proud to have photographed families from across Vijayawada, Guntur and surrounding communities, helping them preserve milestones that can never be recreated but will always be remembered.
            </p>
          </motion.div>
        </div>

        {/* Serving Areas & Story Imagine */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginBottom: '60px' }} className="md-grid-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(222, 93, 131, 0.03)', border: '1px solid rgba(222, 93, 131, 0.1)', borderRadius: '24px', padding: '30px', textAlign: 'left' }}
          >
            <h3 className="heading-serif" style={{ fontSize: '20px', color: 'var(--text-dark)', marginBottom: '12px' }}>Proudly Serving Families Across Vijayawada</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '10px' }}>
              Over the years, we have welcomed families from Benz Circle, Labbipet, Patamata, Gunadala, Poranki, Kanuru, Penamaluru, Tadigadapa, and many other parts of Vijayawada.
            </p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
              Many parents first visit us for newborn photography and continue returning for milestone sessions, birthday celebrations, cake smash photography, and family portraits as their children grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ backgroundColor: 'var(--cream-white)', border: '1.5px solid var(--border-light)', borderRadius: '24px', padding: '30px', textAlign: 'left' }}
          >
            <h3 className="heading-serif" style={{ fontSize: '20px', color: 'var(--text-dark)', marginBottom: '12px' }}>Imagine Your Baby's Story Here</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '10px' }}>
              Every photograph you see in this gallery started with a family wanting to preserve a moment they never wanted to forget. Now it's your turn.
            </p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
              Whether you're preparing for a newborn session, celebrating your baby's first month, documenting milestones, or planning a first birthday photoshoot, we'd love to help create memories you'll cherish forever. Let's create something beautiful together.
            </p>
          </motion.div>
        </div>

        {/* FAQs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '28px' }}
        >
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Got Questions?</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>Frequently Asked Questions</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '60px', textAlign: 'left' }}>
          {galleryFaqs.map((faq, idx) => {
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
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>

                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{ margin: 0, padding: '0 18px 16px', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #FFE9F0 0%, #FFF0E5 100%)',
            borderRadius: '28px', padding: '48px 32px', textAlign: 'center',
            border: '1.5px solid rgba(222,93,131,0.15)'
          }}
        >
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 32px)', color: 'var(--text-dark)', margin: '0 0 10px' }}>
            Love What You See? Let's Create Yours!
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '26px', maxWidth: '460px', marginInline: 'auto' }}>
            Every baby is unique. Let us craft a personalised gallery as beautiful as your little one.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setActivePage('book')} className="pulse-btn" style={{
              backgroundColor: 'var(--primary-pink)', color: 'white', border: 'none',
              borderRadius: '26px', padding: '13px 30px', fontSize: '15px', fontWeight: 700,
              cursor: 'pointer', fontFamily: 'var(--sans)', boxShadow: '0 6px 20px rgba(222,93,131,0.35)'
            }}>Book Your Session</button>
            <button onClick={() => setActivePage('packages')} style={{
              backgroundColor: 'transparent', color: 'var(--primary-pink)',
              border: '2px solid var(--primary-pink)',
              borderRadius: '26px', padding: '13px 30px', fontSize: '15px', fontWeight: 700,
              cursor: 'pointer', fontFamily: 'var(--sans)'
            }}>View Packages</button>
          </div>
        </motion.div>

        {/* ── Lightbox ── */}
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
      </div>

      <style>{`
        /* Default: 2 cols on mobile */
        .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        /* 3 cols on tablet */
        @media (min-width: 640px)  { .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        /* 4 cols on desktop */
        @media (min-width: 1024px) { .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; } }

        .gallery-img:hover { transform: scale(1.07); }
        .gallery-img:hover ~ .gallery-overlay,
        .gallery-overlay:hover { opacity: 1 !important; }
        @media (min-width: 768px) { .md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </div>
  );
}
