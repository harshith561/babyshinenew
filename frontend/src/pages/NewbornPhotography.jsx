import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const faqs = [
  { q: 'When should I book my newborn photography session?', a: 'We recommend booking during your pregnancy, ideally during the second or third trimester. This allows us to reserve a session around your expected due date.' },
  { q: 'What is the best age for newborn photography?', a: 'The ideal age is between 5 and 15 days after birth. During this time, babies are generally sleepier and more comfortable during posed portraits.' },
  { q: 'How long does a newborn photography session take?', a: 'Most sessions last between 2 to 4 hours, allowing enough time for feeding, soothing, diaper changes, and breaks whenever needed.' },
  { q: 'Do you provide wraps, props, and accessories?', a: 'Yes. We provide a carefully curated collection of newborn wraps, blankets, baskets, headbands, outfits, and accessories for your session.' },
  { q: 'Can parents and siblings join the photoshoot?', a: 'Absolutely. Family portraits are an important part of many newborn sessions and help create meaningful memories you\'ll cherish forever.' },
  { q: 'What should we bring to the session?', a: 'We recommend bringing feeding essentials, extra diapers, wipes, and anything your baby may need for comfort. We\'ll guide you with a complete preparation checklist before your appointment.' },
  { q: 'Is newborn photography safe?', a: 'Yes. Your baby\'s safety is always our top priority. We follow safe posing practices and create a comfortable environment designed specifically for newborns.' },
  { q: 'Do you offer customized themes?', a: 'Yes. We can personalize your session with preferred colors, styling choices, and special themes while maintaining a timeless and elegant look.' },
  { q: 'How soon will we receive our photographs?', a: 'Delivery timelines vary depending on the package selected. Complete details will be provided during booking.' },
  { q: 'Why choose Baby Shine Studio for newborn photography in Vijayawada?', a: 'Families choose Baby Shine Studio for our personalized approach, baby-friendly environment, creative styling, professional expertise, and commitment to creating beautiful memories that last a lifetime.' }
];

const included = [
  { title: 'Feeding-Friendly Setup', desc: 'We schedule breaks around feeding cycles and provide a private nursing space for mums.' },
  { title: 'Temperature Control', desc: 'Studio maintained at 26–28°C to keep naked newborns perfectly comfortable throughout.' },
  { title: 'Premium Props & Wraps', desc: 'Imported organic wool wraps, wooden buckets, flower nests, and knit accessories.' },
  { title: 'Family Portrait', desc: 'Dedicated time to photograph you and your partner with your new arrival.' },
  { title: 'Creative Themes', desc: 'Bohemian, rustic, floral, minimal or dreamy — we match your exact vision.' },
  { title: 'Professional Retouching', desc: 'Natural, skin-friendly editing that preserves baby textures while polishing every shot.' }
];

export default function NewbornPhotography({ setActivePage }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 60%, #FFF5F6 100%)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center'
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
            <source src="/newborn_hero_bg.mp4" type="video/mp4" />
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

        {/* Cloud Left */}
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -16, 0], rotate: [-3, 3, -3] }}
          transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ position: 'absolute', left: '20px', bottom: '0px', width: 'clamp(90px, 14vw, 195px)', height: 'clamp(90px, 14vw, 195px)', pointerEvents: 'none', zIndex: 3 }}
        >
          <img src="/3d_baby_cloud.png" alt="Baby Cloud" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>
        {/* Teddy Right */}
        <motion.div className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -12, 0], rotate: [4, -4, 4] }}
          transition={{ opacity: { duration: 0.8, delay: 0.2 }, scale: { duration: 0.8, delay: 0.2 }, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }, rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
          style={{ position: 'absolute', right: '20px', bottom: '0px', width: 'clamp(90px, 13vw, 185px)', height: 'clamp(90px, 13vw, 185px)', pointerEvents: 'none', zIndex: 3 }}
        >
          <img src="/3d_teddy_bear.png" alt="Teddy Bear" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>
 
        <div style={{ position: 'relative', zIndex: 4, maxWidth: '720px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Newborn Photography in Vijayawada</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(26px, 5vw, 52px)', color: 'var(--text-dark)', margin: '10px 0 14px', lineHeight: 1.2 }}>
              Capturing the Beauty of Your Baby's First Days
            </h1>
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              The first few days of your baby's life are unlike any other. At Baby Shine Studio, we specialize in newborn photography that beautifully preserves these early days through timeless portraits filled with warmth, love, and emotion.
            </p>
          </motion.div>
        </div>
      </section>



      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* ── Image Left + Text Right ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center', marginBottom: '80px' }} className="md-grid-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src="/gallery/web/sks00320.jpg" alt="Newborn in Studio" style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Why It Matters</span>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--text-dark)', margin: '10px 0 18px' }}>
              Why Newborn Photography Matters
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '16px' }}>
              The newborn stage lasts only a few weeks, but the memories stay with you forever. As parents, it's easy to become caught up in sleepless nights, feeding schedules, and adjusting to life with your new arrival. Professional newborn photography gives you the opportunity to pause and celebrate this incredible chapter before it passes.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '28px' }}>
              These photographs become treasured keepsakes—reminders of how tiny your baby once was and how much joy they brought into your lives from the very beginning.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
              {[
                { label: 'Ideal Age: 5–15 Days' },
                { label: 'Soft Wrap Styling' },
                { label: 'Customised Props' },
                { label: 'Family Portrait Included' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-dark)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setActivePage('book')} className="pulse-btn" style={{
              backgroundColor: 'var(--primary-pink)', color: 'white', border: 'none',
              borderRadius: '24px', padding: '13px 30px', fontSize: '15px', fontWeight: 600,
              cursor: 'pointer', fontFamily: 'var(--sans)', boxShadow: '0 4px 14px rgba(222,93,131,0.3)'
            }}>
              Book Newborn Session
            </button>
          </motion.div>
        </div>

        {/* ── Safety, Timing & Style sections ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginBottom: '80px' }} className="md-grid-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '30px 24px', border: '1px solid rgba(222,93,131,0.08)', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}
          >
            <h3 className="heading-serif" style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '12px' }}>Safe & Comfortable Posing</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
              Your baby's safety and comfort are at the heart of everything we do. Our sessions are carefully planned to create a calm, relaxing environment where babies can remain comfortable. We work patience-first and allow plenty of time for feeding, soothing, cuddles, and breaks.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '30px 24px', border: '1px solid rgba(222,93,131,0.08)', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}
          >
            <h3 className="heading-serif" style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '12px' }}>Ideal Timing: 5 to 15 Days</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
              The ideal time for newborn photography is within the first 5 to 15 days after birth. During this stage, babies sleep more deeply and naturally curl into those adorable poses parents love. We recommend booking your session during pregnancy to ensure availability.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '30px 24px', border: '1px solid rgba(222,93,131,0.08)', boxShadow: 'var(--shadow-sm)', textAlign: 'left' }}
          >
            <h3 className="heading-serif" style={{ fontSize: '18px', color: 'var(--text-dark)', marginBottom: '12px' }}>Timeless, Heartfelt Style</h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
              At Baby Shine Studio, we believe newborn photography should feel natural, timeless, and heartfelt. Rather than focusing on fading trends, we create portraits that highlight your baby's delicate features, unique expressions, and the beautiful bond shared with your family.
            </p>
          </motion.div>
        </div>

        {/* ── Stats strip ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '18px', marginBottom: '80px' }} className="stats-4">
          {[
            { val: '1000+', label: 'Newborns Photographed', bg: '#FFEBF0' },
            { val: '5–14', label: 'Ideal Days Old', bg: '#FFF6E5' },
            { val: '100%', label: 'Safety Certified', bg: '#E6F9F2' },
            { val: '30+', label: 'Years Photography Legacy', bg: '#E6F0FA' }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.09 }}
              style={{ background: s.bg, borderRadius: '18px', padding: '24px 20px', textAlign: 'center', border: '1px solid rgba(222,93,131,0.08)' }}>
              <div className="heading-sans" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--primary-pink)', marginBottom: '4px' }}>{s.val}</div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── What to Expect During Your Session ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal} style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Your Session Journey</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>What to Expect During Your Session</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '80px' }} className="md-grid-2">
          {[
            { title: 'Personalized Planning', desc: 'Before your session, we\'ll discuss your preferences, preferred colors, themes, and any special ideas you\'d like incorporated into the photographs.' },
            { title: 'Comfortable Studio Environment', desc: 'Our studio is designed specifically for babies and families, creating a warm and welcoming space where everyone feels at ease.' },
            { title: 'Beautiful Styling', desc: 'We provide carefully selected wraps, blankets, headbands, baskets, and accessories that complement your baby\'s natural beauty while creating elegant and timeless portraits.' },
            { title: 'Family Portraits Included', desc: 'Parents and siblings are always welcome to be part of the session, creating meaningful photographs that celebrate the love and connection within your family.' }
          ].map((item, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              style={{ backgroundColor: '#fff', borderRadius: '18px', padding: '28px 24px', textAlign: 'left', border: '1px solid rgba(222,93,131,0.07)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 className="heading-sans" style={{ margin: '0 0 6px', fontSize: '15px', color: 'var(--text-dark)' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Why Parents Choose Baby Shine Studio ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal} style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Why Choose Us</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>Why Parents Choose Baby Shine Studio</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '80px' }} className="md-grid-3">
          {[
            { title: 'Dedicated Newborn Experience', desc: 'We understand the patience, care, and attention required to photograph newborns and create an experience that feels comfortable and stress-free.' },
            { title: 'Safe & Baby-Friendly Environment', desc: 'Your baby\'s comfort and well-being remain our highest priorities throughout every session.' },
            { title: 'Creative Yet Timeless Portraits', desc: 'Our photography style combines artistic creativity with classic elegance to create images that never go out of style.' },
            { title: 'Personalized Attention', desc: 'Every family receives a customized experience designed around their preferences and their baby\'s unique personality.' },
            { title: 'Trusted by Families Across Vijayawada', desc: 'Families from Benz Circle, Labbipet, Patamata, Gunadala, Poranki, Kanuru, Penamaluru, and surrounding areas trust us to preserve some of life\'s most precious moments.' }
          ].map((item, idx) => (
            <motion.div key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              style={{ backgroundColor: '#fff', borderRadius: '18px', padding: '24px 20px', textAlign: 'left', border: '1px solid rgba(222,93,131,0.07)', boxShadow: 'var(--shadow-sm)' }}>

              <h4 className="heading-sans" style={{ margin: '0 0 6px', fontSize: '15px', color: 'var(--text-dark)' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── 3-photo row ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '80px' }} className="photo-trio">
          {[
            { img: '/gallery/web/sks04872.jpg',  label: 'Organic Wrap Poses',   pos: 'center 40%' },
            { img: '/gallery/web/sks04483.jpg',  label: 'Dreamy Swaddle Setup', pos: 'center 30%' },
            { img: '/gallery/web/sks03836.jpg',  label: 'Starry Slumber Theme', pos: 'center 25%' }
          ].map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', height: '230px', boxShadow: 'var(--shadow-md)' }}>
              <img src={p.img} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(31,20,25,0.65) 100%)', display: 'flex', alignItems: 'flex-end', padding: '14px 16px' }}>
                <span className="heading-sans" style={{ color: 'white', fontSize: '13px' }}>{p.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Preparation Guide ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal}
          style={{ backgroundColor: 'var(--cream-white)', border: '1.5px solid var(--border-light)', borderRadius: '24px', padding: '40px 30px', marginBottom: '60px' }}>
          <h3 className="heading-serif" style={{ fontSize: 'clamp(18px, 3vw, 26px)', color: 'var(--text-dark)', marginBottom: '14px' }}>
            Preparing for Your Newborn Session
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>
            To ensure a smooth, peaceful, and gorgeous session, follow these simple guidelines:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { step: 'Feed the Baby Before Arrival', desc: 'Feed your baby 20–30 minutes before coming to the studio. A full tummy makes a baby sleepy and ready for poses.' },
              { step: 'Dress in Easy-to-Remove Clothes', desc: 'Dress your little one in a loose, button-up or zip-up sleepsuit. Avoid outfits that need to be pulled over the head.' },
              { step: 'Bring Extra Diapers & Feeds', desc: 'Newborn shoots take 2–4 hours due to breaks for feeding, burping, and diaper changes. Bring plenty of supplies.' },
              { step: 'Pacifiers are Helpful', desc: "Even if your baby doesn't regularly use a pacifier, bringing one can help soothe them momentarily between poses." }
            ].map((g, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', borderBottom: '1px solid rgba(222,93,131,0.08)', paddingBottom: '14px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--pastel-pink)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary-pink)', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <h4 className="heading-sans" style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--text-dark)' }}>{g.step}</h4>
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scrollReveal} style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Got Questions?</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>Frequently Asked Questions</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '60px' }}>
          {faqs.map((faq, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
              style={{ backgroundColor: '#fff', borderRadius: '14px', border: '1px solid rgba(222,93,131,0.1)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: '12px' }}>
                <span className="heading-sans" style={{ fontSize: '14px', color: 'var(--text-dark)', flex: 1 }}>{faq.q}</span>
                <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>

                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p style={{ margin: 0, padding: '0 18px 16px', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)' }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Full Width CTA Cover Section ── */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={scrollReveal}
        style={{ 
          position: 'relative',
          overflow: 'hidden',
          background: '#FFF5F6', 
          padding: '100px 24px', 
          textAlign: 'center', 
          borderTop: '1px solid rgba(222,93,131,0.12)',
          borderBottom: '1px solid rgba(222,93,131,0.12)',
          width: '100%'
        }}>
        {/* Animated Background Image */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            width: '100%',
            height: '100%',
            zIndex: 1, 
            backgroundImage: 'url("/gallery/web/sks02915.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />

        {/* Overlay to ensure text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 245, 246, 0.45) 0%, rgba(255, 240, 229, 0.5) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 3, maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 4.5vw, 40px)', color: 'var(--text-dark)', margin: '0 0 16px', fontWeight: 600, letterSpacing: '-0.5px' }}>
            Secure Your Newborn Session Today
          </h2>
          <p style={{ color: 'var(--text-dark)', fontSize: 'clamp(14px, 1.8vw, 17px)', marginBottom: '32px', maxWidth: '580px', marginInline: 'auto', lineHeight: 1.7, fontWeight: 500 }}>
            Slots fill up fast. Book during pregnancy to guarantee your session timing and let us preserve these fleeting early moments forever.
          </p>
          <motion.button 
            onClick={() => setActivePage('book')} 
            className="pulse-btn"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(222,93,131,0.5)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: 'var(--primary-pink)', 
              color: 'white', 
              border: 'none',
              borderRadius: '30px', 
              padding: '18px 48px', 
              fontSize: '16px', 
              fontWeight: 700,
              cursor: 'pointer', 
              fontFamily: 'var(--sans)', 
              boxShadow: '0 6px 20px rgba(222,93,131,0.35)',
              display: 'inline-block'
            }}
          >
            Book Now
          </motion.button>
        </div>
      </motion.section>

      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .md-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
          .photo-trio { grid-template-columns: repeat(3, 1fr) !important; }
          .stats-4 { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .banner-badges { flex-direction: column; gap: 8px; }
        }
      `}</style>
    </div>
  );
}
