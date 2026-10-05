import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const packagesFaqs = [
  { q: 'Do you offer customized photography packages?', a: 'Yes. We understand that every family has different preferences and requirements. Customized package options are available for newborn, milestone, birthday, and family photography sessions.' },
  { q: 'Can I combine multiple sessions into one package?', a: 'Absolutely. Many families choose milestone collections that include multiple sessions throughout their baby\'s first year.' },
  { q: 'Are props and accessories included?', a: 'Yes. We provide a variety of baby-friendly props, wraps, accessories, and themed setups depending on the type of session.' },
  { q: 'Can family members be included in the package?', a: 'Of course. Parents, siblings, and grandparents are welcome to participate in most photography sessions.' },
  { q: 'Do your packages include edited photographs?', a: 'Yes. All selected photographs are professionally edited to ensure high-quality results while maintaining a natural and timeless appearance.' },
  { q: 'Do you offer albums and printed products?', a: 'Yes. Premium albums, prints, and wall art options are available with selected packages or as add-ons.' },
  { q: 'How far in advance should I book?', a: 'We recommend booking as early as possible, especially for newborn photography and first birthday sessions, to ensure availability.' },
  { q: 'How can I learn more about pricing?', a: 'For the latest package details, availability, and pricing information, please contact our team. We\'ll be happy to recommend the best option based on your requirements.' }
];

const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
};

export default function Packages({ setActivePage }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      {/* ── HERO with Baby Coins Mascot ── */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 60%, #FFF5F6 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Baby Coins Mascot – Left (floating) */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{
            opacity: 1, x: 0, scale: 1,
            y: [0, -14, 0],
            rotate: [-3, 3, -3]
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            left: '20px',
            bottom: '0px',
            width: 'clamp(100px, 14vw, 200px)',
            height: 'clamp(100px, 14vw, 200px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <img src="./3d_baby_coins.png" alt="Baby Coins" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Baby Cloud – Right */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{
            opacity: 1, x: 0, scale: 1,
            y: [0, -18, 0],
            rotate: [4, -4, 4]
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            rotate: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
          }}
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '0px',
            width: 'clamp(100px, 13vw, 190px)',
            height: 'clamp(100px, 13vw, 190px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <img src="./3d_baby_cloud.png" alt="Baby Cloud" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Baby Photoshoot Packages in Vijayawada</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(26px, 5vw, 52px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '16px', lineHeight: 1.2 }}>
              Flexible Photography Packages Designed for Every Family
            </h1>
            <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 auto' }}>
              Every baby is unique, and every family's story is different. That's why we offer thoughtfully designed photography packages that make it easy to celebrate every milestone, from your baby's first days to their first birthday and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content wrapper ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* ── Intro description block ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            At Baby Shine Studio, our goal is to provide a comfortable, personalized photography experience while creating beautiful memories you'll treasure for years to come. Whether you're planning a newborn session, a milestone photoshoot, a cake smash celebration, or a family portrait session, we have package options to suit your needs.
          </p>
        </motion.div>

        {/* ── Grids of 4 Package Categories ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginBottom: '80px' }} className="md-grid-2">
          {[
            {
              title: 'Newborn Photography Packages',
              desc: "The first days of your baby's life are filled with moments you'll never want to forget. Our newborn photography packages are designed to preserve those precious early memories through beautifully styled portraits that focus on your baby's natural beauty and innocence. These sessions are carefully planned around your baby's comfort and include plenty of time for feeding, soothing, and breaks whenever needed.",

              colorBg: 'linear-gradient(135deg, #FFEBF0 0%, #FFF0E5 100%)',
              features: ['Newborn Portraits', 'Parent & Baby Photography', 'Sibling Portraits', 'Family Memories']
            },
            {
              title: '1 Month & Milestone Photography Packages',
              desc: "Babies grow and change so quickly during their first year. Our milestone photography packages help families document these beautiful stages through a series of professional sessions that capture growth, personality, and special achievements. These sessions allow you to create a meaningful collection of memories that tell your baby's story from month to month.",

              colorBg: 'linear-gradient(135deg, #FFF0E5 0%, #FFEBF0 100%)',
              features: ['1 Month Baby Photoshoots', '3 Month Milestones', '6 Month Sessions & Sitting Milestones', '9 Month Photoshoots & Growth collections']
            },
            {
              title: 'First Birthday & Cake Smash Packages',
              desc: "A first birthday is one of the most exciting milestones in your baby's journey. Our cake smash photography packages combine creative themes, fun setups, and joyful moments to create photographs that perfectly celebrate this special occasion. Every birthday celebration is designed to reflect your baby's personality while creating photographs you'll cherish forever.",

              colorBg: 'linear-gradient(135deg, #FFEBF0 0%, #FFEBEF 100%)',
              features: ['Customized Birthday Themes & Backdrops', 'Cake Smash Session & Pre-Smash Portrait', 'Family Portraits', 'Optional Splash Bath Session']
            },
            {
              title: 'Family Photography Packages',
              desc: "Some memories are even more meaningful when everyone is together. Our family portrait packages focus on capturing genuine connections between parents, siblings, grandparents, and children. These sessions create timeless photographs that celebrate love, relationships, and the moments that matter most.",

              colorBg: 'linear-gradient(135deg, #FFEBEF 0%, #FFF0E5 100%)',
              features: ['Parent & Sibling Portraits', 'Grandparent Connections', 'Candid Family Interactions', 'Timeless Legacy Displays']
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '24px',
                padding: '40px 30px',
                textAlign: 'left',
                border: '1px solid rgba(222, 93, 131, 0.08)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>

                <h3 className="heading-serif" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', margin: '0 0 12px', color: 'var(--text-dark)' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>{item.desc}</p>
                
                <hr style={{ border: 'none', borderTop: '1px solid rgba(222, 93, 131, 0.1)', marginBottom: '24px' }} />
                
                <h4 className="heading-sans" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Ideal for / Includes:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {item.features.map((feat, fidx) => (
                    <li key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--text-dark)' }}>
                      
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setActivePage('book')}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: 'var(--primary-pink)',
                  border: '2px solid var(--primary-pink)',
                  borderRadius: '30px',
                  padding: '14px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  transition: 'all 0.2s ease',
                  textAlign: 'center',
                  marginTop: 'auto'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-pink)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--primary-pink)'; }}
              >
                Inquire & Customize
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── What's Included in Our Photography Packages? ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>What's Included?</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>What's Included in Our Photography Packages?</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '80px' }} className="md-grid-3">
          {[
            { title: 'Professional Photography Session', desc: 'Expertly shot baby portraits with natural expressions, lighting, and pacing.' },
            { title: 'Creative Themes & Styled Setups', desc: 'Choose from a variety of unique, beautiful concepts designed for your baby.' },
            { title: 'Baby-Friendly Props & Accessories', desc: 'Access to sanitised, imported wraps, baskets, outfits, and accessories.' },
            { title: 'Family & Sibling Portraits', desc: 'Keep moments alive by involving parents and siblings in the photoshoot.' },
            { title: 'Professionally Edited Images', desc: 'Every photo is retouched skin-safely to look timeless and high-resolution.' },
            { title: 'Personalized Session Planning', desc: 'Consultations on styles, clothes, and colors before the photoshoot.' },
            { title: 'Multiple Outfit Changes', desc: 'Perfect variety of looks to showcase different moods and phases.' },
            { title: 'Premium Photo Albums & Prints', desc: 'High-quality prints, canvas, and wooden album designs (select packages).' },
            { title: 'Digital Image Delivery', desc: 'Secure online private link access to download high-resolution photos.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '24px 20px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                border: '1px solid rgba(222, 93, 131, 0.07)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >

              <div>
                <h4 className="heading-sans" style={{ margin: '0 0 4px', fontSize: '14px', color: 'var(--text-dark)' }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Why Families Choose Our Packages ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Why Us</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>Why Families Choose Our Packages</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '80px' }} className="md-grid-3">
          {[
            { title: 'Personalized Experience', desc: "Every session is customized to suit your family's style, preferences, and vision." },
            { title: 'Creative Concepts', desc: "From elegant newborn portraits to themed birthday celebrations, we help bring your ideas to life." },
            { title: 'Baby-Friendly Environment', desc: "Our studio is designed to ensure babies feel comfortable, safe, and relaxed throughout the session." },
            { title: 'Professional Quality', desc: "Every image is carefully edited and delivered with attention to detail, ensuring beautiful results." },
            { title: 'Flexible Options', desc: "Whether you're looking for a single session or a complete milestone collection, we offer packages tailored to you." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                padding: '30px 24px',
                border: '1px solid rgba(222, 93, 131, 0.07)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'left'
              }}
            >
              
              <h4 className="heading-sans" style={{ margin: '0 0 6px', fontSize: '15px', color: 'var(--text-dark)' }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Looking for a Customized Package? ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{
            background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 100%)',
            border: '1.5px solid var(--border-light)',
            borderRadius: '24px',
            padding: '40px 30px',
            textAlign: 'left',
            marginBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
            
            <h3 className="heading-serif" style={{ fontSize: 'clamp(18px, 3vw, 26px)', color: 'var(--text-dark)', margin: 0 }}>
              Looking for a Customized Package?
            </h3>
          </div>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
              Every family has different requirements, and we'd be happy to create a package that's tailored specifically for you. Whether you're interested in newborn photography, milestone sessions, cake smash photography, or a combination of multiple sessions, our team can help design an option that perfectly suits your expectations.
            </p>
            <button
              onClick={() => setActivePage('book')}
              style={{
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                padding: '12px 30px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                boxShadow: '0 4px 14px rgba(222, 93, 131, 0.25)'
              }}
            >
              Contact Us for Package Details & Availability
            </button>
          </div>
        </motion.div>

        {/* ── FAQ Section ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '28px' }}
        >
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Got Questions?</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', color: 'var(--text-dark)', marginTop: '8px' }}>Frequently Asked Questions</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '80px' }}>
          {packagesFaqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '14px',
                border: '1px solid rgba(222, 93, 131, 0.1)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '16px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '12px'
                }}
              >
                <span className="heading-sans" style={{ fontSize: '14px', color: 'var(--text-dark)', flex: 1 }}>{faq.q}</span>

              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ margin: 0, padding: '0 18px 16px', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ── */}
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
          <h2 className="heading-serif" style={{ fontSize: 'clamp(20px, 3.5vw, 32px)', color: 'var(--text-dark)', margin: '0 0 12px' }}>
            Let's Create Memories You'll Treasure Forever
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '28px', maxWidth: '600px', marginInline: 'auto', lineHeight: 1.6 }}>
            Whether you're welcoming your newborn, celebrating a milestone, or planning a first birthday photoshoot, Baby Shine Studio is here to help you preserve every special moment. Get in touch today to explore our photography packages and find the perfect option for your family.
          </p>
          <button
            onClick={() => setActivePage('book')}
            className="pulse-btn"
            style={{
              backgroundColor: 'var(--primary-pink)', color: 'white', border: 'none',
              borderRadius: '28px', padding: '14px 36px', fontSize: '16px', fontWeight: 700,
              cursor: 'pointer', fontFamily: 'var(--sans)', boxShadow: '0 6px 20px rgba(222, 93, 131, 0.35)'
            }}
          >
            Book & Enquire Now
          </button>
        </motion.div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .md-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
