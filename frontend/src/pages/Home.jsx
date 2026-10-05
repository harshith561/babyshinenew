import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

// Counter Hook to simulate Elementor Counter Widget
function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const elementRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));

    if (incrementTime < 15) incrementTime = 15;

    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, inView]);

  return <span ref={elementRef}>{count}</span>;
}

// Butterfly SVG Icon Component
function ButterflyIcon({ size = 20, color = "#DE5D83", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}>
      <path d="M12 18c-1-1.5-3-2.5-4.5-2.5S5 16.5 5 18s1.5 2.5 3 2.5 3-1 4-2.5" />
      <path d="M12 18c1-1.5 3-2.5 4.5-2.5s2.5 1 2.5 2.5-1.5 2.5-3 2.5-3-1-4-2.5" />
      <path d="M12 12c-1.5-2-4-3.5-6-3.5S3.5 10 3.5 12s2 3.5 4.5 3.5 3-1.5 4-3.5" />
      <path d="M12 12c1.5-2 4-3.5 6-3.5s2.5 1.5 2.5 3.5-2 3.5-4.5 3.5-3-1.5-4-3.5" />
      <path d="M12 21V9" />
      <path d="M12 9c.5-1 1-2.5 2-3M12 9c-.5-1-1-2.5-2-3" />
    </svg>
  );
}

// Google Official Multi-Color SVG Icon Component
function GoogleIcon({ size = 20, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}>
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"/>
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
    </svg>
  );
}

// FAQ Accordion item component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{
      borderBottom: '1px solid rgba(222, 93, 131, 0.15)',
      padding: '16px 0',
      textAlign: 'left'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--text-dark)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '8px 0',
          fontFamily: 'var(--sans)'
        }}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: 'var(--primary-pink)', fontSize: '20px', fontWeight: 'bold' }}
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'var(--text-muted)',
              paddingTop: '8px',
              paddingBottom: '8px',
              margin: 0
            }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home({ setActivePage }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Testimonials list
  const testimonials = [
    {
      name: 'Rakesh & Meenakshi',
      role: 'Parents of Baby Kia (12 Days Old)',
      quote: 'We were extremely anxious about handling our 12-day-old baby during the photoshoot. But the photographers at Baby Shine team handled her like feather-soft professionals. Every shot is a masterpiece!',
      rating: 5,
    },
    {
      name: 'Dr. Srinivas Rao',
      role: 'Father of Baby Vihaan (1 Month)',
      quote: 'Excellent studio setup in Vijayawada! They sanitized everything before our eyes, maintained the perfect room temperature, and had incredible creative themes. Best baby photoshoot experience.',
      rating: 5,
    },
    {
      name: 'Anjali Verma',
      role: 'Mother of Baby Aarav (3 Months)',
      quote: 'We chose the combo package, and we are so glad we did. Powered by Sai Krishna Photography, they really live up to their 30-year legacy. The professional editing is out of this world.',
      rating: 5,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getBgAnimationProps = (type) => {
    switch (type) {
      case 'waving': // Waving slide panned camera zoom
        return {
          animate: { scale: [1, 1.04, 1], x: [-6, 6, -6], y: [-3, 3, -3] },
          transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'smile':
        return {
          animate: { scale: [1, 1.03, 1] },
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'bounce':
        return {
          animate: { y: [-6, 6, -6] },
          transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
        };
      case 'sleep':
        return {
          animate: { x: [-6, 6, -6], scale: [1.02, 1.05, 1.02] },
          transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        };
      default:
        return {
          animate: { scale: 1 },
          transition: { duration: 0.5 }
        };
    }
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>

      {/* SECTION 1: HERO BANNER */}
      <section className="hero-container" style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 50%, #FFD194 100%)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>

        {/* Video Player Wrapper (Desktop: Full cover background right; Mobile: Framed showcase) */}
        <div className="hero-video-wrapper" style={{
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
              objectPosition: '80% top'
            }}
          >
            <source src="./not_good_but_in_this_hero_se.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Color Tint Overlay for Warm Theme Blending */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 209, 148, 0.2) 0%, rgba(222, 93, 131, 0.25) 50%, rgba(255, 209, 148, 0.2) 100%)',
            mixBlendMode: 'overlay',
            zIndex: 2,
            pointerEvents: 'none'
          }} />

          {/* Seamless Edge Blending Gradient Overlay on Desktop */}
          <div
            className="hero-blend-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              pointerEvents: 'none'
            }}
          />

          {/* Mobile Badge Floating on Video Frame */}
          <div className="mobile-video-tag" style={{
            display: 'none',
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(8px)',
            color: 'var(--primary-pink)',
            padding: '5px 12px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 700,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 4
          }}>
            🛡️ 100% Sanitized Safe
          </div>
        </div>

        {/* Content Container (Title, Subtitle, CTA buttons, Trust Badges) */}
        <div className="hero-text-wrapper" style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '45%',
          height: '100%',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '120px 24px 0 80px',
          boxSizing: 'border-box',
          textAlign: 'left'
        }}>

          {/* Top Pill Badge */}
          <div className="hero-badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(222, 93, 131, 0.25)',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--primary-pink)',
            marginBottom: '16px',
            boxShadow: '0 4px 14px rgba(222, 93, 131, 0.1)'
          }}>
            <span>✨ Vijayawada's Premier Baby Studio</span>
            <span style={{ color: 'rgba(222, 93, 131, 0.4)' }}>•</span>
            <span>30 Years Trust</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline" style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            transform: 'rotate(-4deg)',
            transformOrigin: 'left center'
          }}>
            <span className="font-cursive" style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              color: 'var(--text-dark)',
              textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
              fontWeight: 'normal',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Best Baby Photography Studio <ButterflyIcon size={22} color="var(--primary-pink)" style={{ opacity: 0.85 }} />
            </span>
            <span className="font-cursive" style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: 'var(--primary-pink)',
              textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
              marginLeft: '20px',
              marginTop: '-4px',
              fontWeight: 'normal',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              in Vijayawada <ButterflyIcon size={24} color="var(--primary-pink)" style={{ opacity: 0.85 }} />
            </span>
          </h1>

          {/* Tagline / Subtitle */}
          <p className="hero-subtitle" style={{
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            lineHeight: 1.6,
            color: '#554238',
            maxWidth: '460px',
            margin: '0 0 24px 0',
            fontWeight: 500,
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)'
          }}>
            Capturing the little moments you'll treasure forever — certified newborn posing, warm 28°C studio & custom luxury backdrops.
          </p>

          {/* CTA Action Buttons */}
          <div className="hero-cta-group" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '26px'
          }}>
            <button
              onClick={() => setActivePage('book')}
              className="pulse-btn"
              style={{
                background: 'linear-gradient(135deg, #DE5D83 0%, #C44569 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                padding: '14px 34px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(222, 93, 131, 0.35)',
                transition: 'transform 0.2s ease'
              }}
            >
              <span>📅 Book a Session</span>
            </button>
          </div>

        </div>

      </section>


      {/* SECTION 2: TRUST BANNER */}
      <section style={{
        background: 'linear-gradient(180deg, #FFF0E5 0%, #FFF5F6 100%)',
        padding: '30px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          maxWidth: '1280px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(12px)',
          borderRadius: '32px',
          padding: '24px 40px',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(222, 93, 131, 0.05)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }} className="lg-grid-4">

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            borderRight: '1.5px solid rgba(222, 93, 131, 0.15)',
            paddingRight: '20px'
          }}
            className="border-none-mobile"
          >
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Powered By</h4>
              <p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)' }}>Sai Krishna Photography</p>
            </div>
          </div>

          {/* Stat 1 */}
          <div style={{ textAlign: 'center' }}>
            <h2 className="heading-sans" style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-pink)', margin: '0 0 4px' }}>
              <Counter value="30" />+
            </h2>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>Years of Photography Legacy</p>
          </div>

          {/* Stat 2 */}
          <div style={{ textAlign: 'center', borderLeft: '1.5px solid rgba(222, 93, 131, 0.15)', borderRight: '1.5px solid rgba(222, 93, 131, 0.15)' }} className="border-none-mobile">
            <h2 className="heading-sans" style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-pink)', margin: '0 0 4px' }}>
              <Counter value="1000" />+
            </h2>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>Newborns & Babies Captured</p>
          </div>

          {/* Stat 3 */}
          <div style={{ textAlign: 'center' }}>
            <h2 className="heading-sans" style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-pink)', margin: '0 0 4px' }}>
              <Counter value="100" />%
            </h2>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>Safety & Hygiene Certified</p>
          </div>

        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US & MORE THAN A PHOTOSHOOT */}
      <section className="why-choose-section" style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #FFF5F6 0%, #FFEBEF 100%)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 5
      }}>
        {/* Floating 3D Teddy Bear (Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 50 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
            rotate: [-2, 2, -2]
          }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            left: '15px',
            top: '18%',
            width: 'clamp(160px, 13vw, 230px)',
            height: 'clamp(160px, 13vw, 230px)',
            zIndex: 10,
            pointerEvents: 'none',
            transformOrigin: 'left bottom'
          }}
          className="hide-mobile"
        >
          <img src="./3d_teddy_bear.png" alt="3D Teddy Bear" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Floating 3D Toy Bunny (Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 50 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
            rotate: [2, -2, 2]
          }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
            rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
          }}
          style={{
            position: 'absolute',
            right: '15px',
            top: '18%',
            width: 'clamp(160px, 13vw, 230px)',
            height: 'clamp(160px, 13vw, 230px)',
            zIndex: 10,
            pointerEvents: 'none',
            transformOrigin: 'right bottom'
          }}
          className="hide-mobile"
        >
          <img src="./3d_toy_bunny.png" alt="3D Toy Bunny" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* More Than a Photoshoot content block */}
        <div className="md-grid-2" style={{
          maxWidth: '1100px',
          margin: '0 auto 80px',
          gap: '48px',
          alignItems: 'center',
          textAlign: 'left',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left Column: Big Cursive / Serif Callout */}
          <div style={{ paddingRight: '20px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              More Than a Photoshoot
            </span>
            <h2 className="heading-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 46px)', marginTop: '12px', color: 'var(--text-dark)', lineHeight: '1.25' }}>
              A baby photoshoot is about <span className="font-cursive" style={{ color: 'var(--primary-pink)', fontSize: 'clamp(38px, 5.5vw, 54px)', display: 'block', marginTop: '4px' }}>more than beautiful pictures.</span>
            </h2>
            <p className="font-cursive" style={{ fontSize: '24px', color: 'var(--primary-pink)', marginTop: '24px', lineHeight: 1.4, fontWeight: 'normal' }}>
              We create keepsakes that become part of your family's legacy.
            </p>
          </div>

          {/* Right Column: Detailed narrative copy with elegant vertical layout */}
          <div style={{
            borderLeft: '2.5px solid rgba(222, 93, 131, 0.15)',
            paddingLeft: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              margin: 0
            }}>
              It's about preserving a chapter of your family's story that you'll never experience again in quite the same way. The newborn stage passes quickly. The first smile appears before you're ready for it. Tiny hands grow bigger, and those little details that make your heart melt today begin to change.
            </p>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-muted)',
              margin: 0
            }}>
              Professional photography allows you to pause those moments and revisit them years later—with the same emotions, memories, and joy.
            </p>
            <p style={{
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: 1.8,
              color: 'var(--text-dark)',
              margin: 0
            }}>
              At Baby Shine Studio, we don't just take photographs.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>


          <ScrollStack useWindowScroll={true} itemDistance={50}>
            {[
              {
                title: 'A Baby-Friendly Environment',
                desc: 'Our studio is designed to provide a calm, comfortable, and relaxed experience where babies can feel at ease and parents can enjoy every moment.',
                badgeStart: '#FFEBEB',
                badgeEnd: '#FFC7C7',
                iconColor: '#E53E3E',
                image3d: './3d_baby_friendly.png'
              },
              {
                title: 'Personalized Sessions',
                desc: 'Every family is different, which is why we tailor each session to reflect your style, preferences, and story.',
                badgeStart: '#F3E8FF',
                badgeEnd: '#E4C6FC',
                iconColor: '#805AD5',
                image3d: './3d_personalized_sessions.png'
              },
              {
                title: 'Creative Styling & Themes',
                desc: 'From classic portraits to themed milestone and birthday sessions, we create setups that feel unique and memorable.',
                badgeStart: '#FFF6E5',
                badgeEnd: '#FFE0A3',
                iconColor: '#D99100',
                image3d: './3d_creative_styling.png'
              },
              {
                title: 'Experienced Photography Team',
                desc: 'Backed by the trusted legacy of Sai Krishna Photography, our team combines professional expertise with a genuine love for capturing life\'s most meaningful moments.',
                badgeStart: '#FFEBF0',
                badgeEnd: '#FFC2D1',
                iconColor: '#DE5D83',
                image3d: './3d_photography_team.png'
              },
              {
                title: 'Beautifully Edited Images',
                desc: 'Every photograph is carefully selected and professionally enhanced to create timeless images you\'ll proudly display and cherish.',
                badgeStart: '#E6F9F2',
                badgeEnd: '#BEEFD8',
                iconColor: '#319795',
                image3d: './3d_edited_images.png'
              }
            ].map((item, idx) => (
              <ScrollStackItem key={idx}>
                <div className="scroll-stack-card-content">
                  <div className="scroll-stack-card-text">
                    <h3 className="heading-sans" style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 10px', color: 'var(--text-dark)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="scroll-stack-card-visual">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{
                        duration: 4 + idx * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <img src={item.image3d} alt={item.title} />
                    </motion.div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* SECTION 4: FEATURED GALLERY */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #FFFBF7 0%, #FFF5F6 100%)',
        position: 'relative',
        overflow: 'visible',
        zIndex: 4
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '50px',
            gap: '48px',
            textAlign: 'left',
            maxWidth: '1000px',
            margin: '0 auto 50px'
          }} className="flex-wrap-mobile">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ flex: 1, maxWidth: '700px' }}
            >
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Childhood Milestones 
              </span>
              <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginTop: '8px', color: 'var(--text-dark)', lineHeight: 1.2 }}>
                Celebrating Every Stage of Childhood
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '16px 0 0', fontSize: '17px', lineHeight: 1.6 }}>
                Every age brings something special, and every milestone deserves to be remembered.
              </p>
            </motion.div>

            {/* Floating 3D Baby Camera (Right of Text) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
                rotate: [-2, 2, -2]
              }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
              }}
              style={{
                width: '200px',
                height: '240px',
                pointerEvents: 'none',
                flexShrink: 0
              }}
              className="hide-mobile"
            >
              <img src="./3d_baby_camera.png" alt="3D Baby Photographer" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>
          </div>

          {/* Grid of Categories */}
          <div className="gallery-grid" style={{
            marginBottom: '40px'
          }}>
            {[
              {
                title: 'Newborn Photography',
                desc: 'Soft, timeless portraits preserving the delicate beauty and natural innocence of your baby\'s first weeks in our safe, warm sanitized studio.',
                img: '/gallery/web/sks04872.jpg',
                page: 'newborn'
              },
              {
                title: 'Milestone Photography',
                desc: 'Documenting tummy time, first smiles, sitting, and crawling — every incredible milestone captured with patience and artistic care.',
                img: '/gallery/web/sks04718.jpg',
                page: 'milestone'
              },
              {
                title: 'Cake Smash Sessions',
                desc: 'Creative themes, playful setups, and sweet messy fun celebrating baby\'s first birthday with unforgettable joy and excitement.',
                img: '/gallery/web/sks04063.jpg',
                page: 'cakesmash'
              },
              {
                title: 'Family Portraits',
                desc: 'Cherished moments celebrating the loving bond between parents, siblings, and baby to create timeless heirlooms for generations.',
                img: '/gallery/web/sks00320.jpg',
                page: 'gallery'
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                className="category-showcase-card"
                whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(222, 93, 131, 0.12)' }}
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: '440px',
                  border: '2px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 8px 24px rgba(23, 23, 23, 0.06)',
                  cursor: 'pointer',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}
                onClick={() => setActivePage(cat.page)}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(20, 15, 20, 0.05) 20%, rgba(45, 30, 36, 0.65) 60%, rgba(30, 18, 22, 0.96) 100%)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'left',
                  color: 'white',
                  zIndex: 2,
                  boxSizing: 'border-box'
                }}>
                  <h3 className="heading-serif" style={{ fontSize: '20px', margin: '0 0 6px', color: 'white', lineHeight: 1.25 }}>{cat.title}</h3>
                  <p style={{
                    fontSize: '12.5px',
                    color: 'rgba(255,255,255,0.92)',
                    margin: '0 0 10px',
                    lineHeight: 1.45,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>{cat.desc}</p>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#FFB8D2',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    View Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4B: WHY PROFESSIONAL BABY PHOTOGRAPHY MATTERS */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #FFF5F6 0%, #FFFDFB 100%)',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Why It Matters
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginTop: '8px', color: 'var(--text-dark)', marginBottom: '50px' }}>
            Why Professional Baby Photography Matters
          </h2>

          <div className="md-grid-2" style={{ gap: '48px', alignItems: 'center', textAlign: 'left' }}>
            {/* Left Column: Visual Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                borderRadius: '32px',
                padding: '48px 40px',
                border: '1.5px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 12px 36px rgba(222, 93, 131, 0.06)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
                textAlign: 'center',
                overflow: 'hidden'
              }}
            >
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
                  zIndex: 1
                }}
              >
                <source src="./Image_Regeneration_Baby_Hand.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(255, 245, 246, 0.65) 0%, rgba(255, 245, 246, 0.35) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }} />
              <span style={{
                position: 'absolute',
                top: '10px',
                left: '30px',
                fontSize: '120px',
                fontFamily: 'Georgia, serif',
                color: 'rgba(222, 93, 131, 0.15)',
                lineHeight: 1,
                pointerEvents: 'none',
                zIndex: 3
              }}>“</span>
              <h4 className="font-cursive" style={{
                fontSize: 'clamp(28px, 3.5vw, 38px)',
                color: 'var(--primary-pink)',
                margin: '0',
                lineHeight: 1.4,
                fontWeight: 'normal',
                zIndex: 3,
                position: 'relative'
              }}>
                These aren't just photographs. They're memories you can hold onto forever.
              </h4>
            </motion.div>

            {/* Right Column: Animated Staggered Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  title: 'Treasured Tomorrow',
                  desc: 'The photographs you take today will become some of your most treasured possessions tomorrow.',
                  bg: '#FFEBEB',
                  iconColor: '#E53E3E'
                },
                {
                  title: 'Fleeting Milestones',
                  desc: 'Years from now, you\'ll look back and remember the tiny fingers wrapped around yours, the sleepy cuddles, the first smile that melted your heart, and the excitement of watching your little one grow.',
                  bg: '#F3E8FF',
                  iconColor: '#805AD5'
                },
                {
                  title: 'Artistic Excellence',
                  desc: 'While everyday snapshots are wonderful, professional photography preserves these moments with artistic detail, beautiful lighting, and timeless quality that can be enjoyed for generations.',
                  bg: '#FFF6E5',
                  iconColor: '#D99100'
                }
              ].map((point, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: pIdx * 0.2 }}
                  whileHover={{ x: 6, boxShadow: '0 8px 24px rgba(222, 93, 131, 0.06)' }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '24px',
                    padding: '28px',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 4px 16px rgba(222, 93, 131, 0.02)',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h3 className="heading-sans" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)', margin: '0 0 6px' }}>
                      {point.title}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INSTAGRAM REELS */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            {/* Left: Instagram Name & Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #DE5D83, #f4a261)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <div className="heading-sans" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.1 }}>
                  @photographyby_sai_krishna
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Behind the Scenes &middot; Short Reels &middot; Studio Life</div>
              </div>
            </div>

            {/* Right: Follow Button */}
            <a
              href="https://www.instagram.com/photographyby_sai_krishna/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                borderRadius: '24px',
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'var(--sans)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(222,93,131,0.25)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-pink-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-pink)'; e.currentTarget.style.transform = 'none'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Follow on Instagram
            </a>
          </motion.div>

          {/* Reels Grid — 4 real videos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px'
          }} className="reels-grid">
            {[
              { src: '/reels/reel1.mp4', label: 'Reel 1' },
              { src: '/reels/reel2.mp4', label: 'Reel 2' },
              { src: '/reels/reel3.mp4', label: 'Reel 3' },
              { src: '/reels/reel4.mp4', label: 'Reel 4' },
            ].map((reel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
              >
                {/* Phone frame wrapper */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  aspectRatio: '9/16',
                  background: '#f0e8e4',
                  boxShadow: '0 4px 0 4px rgba(222,93,131,0.08), 0 16px 40px rgba(61,51,42,0.12)',
                  border: '3px solid rgba(255,255,255,0.9)',
                }}>
                  {/* Notch */}
                  <div style={{
                    position: 'absolute', top: '8px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '44px', height: '8px',
                    background: 'rgba(255,255,255,0.35)',
                    borderRadius: '6px', zIndex: 5
                  }} />

                  <video
                    src={reel.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Bottom overlay */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '20px 10px 10px',
                    background: 'linear-gradient(to top, rgba(222,93,131,0.45) 0%, transparent 100%)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
                  }}>
                    <span style={{
                      color: 'white', fontSize: '10px', fontWeight: 700,
                      letterSpacing: '0.5px', textShadow: '0 1px 4px rgba(0,0,0,0.4)'
                    }}>{reel.label}</span>
                    <a
                      href="https://www.instagram.com/photographyby_sai_krishna/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        color: 'white', fontSize: '9px', fontWeight: 700,
                        textDecoration: 'none',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 8px', borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.4)'
                      }}
                    >
                      Watch ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textAlign: 'center', marginTop: '36px' }}
          >
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: '0 0 14px' }}>
              ❤️ Enjoying our content? Follow us for daily updates from the studio!
            </p>
            <a
              href="https://www.instagram.com/photographyby_sai_krishna/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px', borderRadius: '40px',
                background: 'var(--primary-pink)',
                color: 'white', fontWeight: 700, fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(222,93,131,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(222,93,131,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(222,93,131,0.3)'; }}
            >
              Visit Our Profile
            </a>
          </motion.div>

        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS SLIDER */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #FFE9EC 0%, #FFF5F6 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Parent Stories</span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '8px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            Trusted by Families Across Vijayawada
          </h2>

          {/* Google Reviews Trust Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#ffffff',
            padding: '8px 22px',
            borderRadius: '999px',
            boxShadow: '0 4px 18px rgba(222, 93, 131, 0.1)',
            border: '1px solid rgba(222, 93, 131, 0.18)',
            marginBottom: '24px'
          }}>
            <GoogleIcon size={22} />
            <span style={{ fontWeight: 800, fontSize: '15px', color: '#1f2937' }}>4.9</span>
            <div style={{ display: 'flex', color: '#FBBC05', fontSize: '15px', letterSpacing: '1px' }}>
              ★★★★★
            </div>
            <span style={{ width: '1px', height: '14px', background: 'rgba(0,0,0,0.12)' }} />
            <span style={{ fontSize: '13px', color: '#4b5563', fontWeight: 600 }}>
              500+ Google Reviews
            </span>
          </div>

          <p style={{
            fontSize: '15px',
            lineHeight: '1.7',
            color: 'var(--text-muted)',
            marginBottom: '36px',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Over the years, Baby Shine Studio has had the privilege of working with families from across Vijayawada and surrounding communities, including Benz Circle, Labbipet, Patamata, Gunadala, Poranki, Kanuru, Tadigadapa, Penamaluru, and nearby areas.
            <br /><br />
            Many parents first visit us for a newborn session and return again to celebrate milestones, birthdays, and family moments as their children grow. There is no greater compliment than being trusted to tell a family's story through photographs.
          </p>

          {/* Review Card with Google Badge */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(16px)',
            borderRadius: '32px',
            padding: '40px 32px',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 16px 40px rgba(222, 93, 131, 0.08)',
            position: 'relative',
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
              >
                {/* Google Verified Review Top Badge on the Card */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  padding: '5px 14px',
                  borderRadius: '999px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(66, 133, 244, 0.18)',
                  marginBottom: '18px'
                }}>
                  <GoogleIcon size={18} />
                  <div style={{ display: 'flex', color: '#FBBC05', fontSize: '13px', letterSpacing: '1px' }}>
                    ★★★★★
                  </div>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a73e8' }}>
                    Google Review
                  </span>
                </div>

                <blockquote style={{
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--text-dark)',
                  margin: '0 0 20px',
                  fontWeight: 400,
                  fontFamily: 'var(--serif)',
                  maxWidth: '650px'
                }}>
                  "{testimonials[activeSlide].quote}"
                </blockquote>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #DE5D83, #FFB8D2)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(222,93,131,0.25)'
                  }}>
                    {testimonials[activeSlide].name.charAt(0)}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h4 className="heading-sans" style={{ fontSize: '15px', margin: 0, fontWeight: 700, color: 'var(--text-dark)' }}>
                        {testimonials[activeSlide].name}
                      </h4>
                      <GoogleIcon size={14} />
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                      {testimonials[activeSlide].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '26px' }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className="slider-dot"
                onClick={() => setActiveSlide(idx)}
                style={{
                  width: activeSlide === idx ? '24px' : '8px',
                  height: '8px',
                  minHeight: '8px',
                  borderRadius: '4px',
                  backgroundColor: activeSlide === idx ? 'var(--primary-pink)' : 'rgba(222, 93, 131, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6B: A STUDIO BUILT AROUND YOUR BABY */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #FFF5F6 0%, #FFE9EC 100%)',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Flexible & Safe
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginTop: '8px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            A Studio Built Around Your Baby
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            We understand that babies don't work on schedules—and that's perfectly okay.
          </p>

          <div className="md-grid-3" style={{ gap: '28px', textAlign: 'center' }}>
            {[
              {
                title: 'Flexible Feedings & Breaks',
                desc: 'Our sessions allow plenty of time for feeding, cuddles, breaks, and comforting whenever needed.',
                image: './3d_baby_bottle.png',
                delay: 0
              },
              {
                title: 'Patient & Gentle Pace',
                desc: 'We work patiently at your baby\'s pace. We never rush a shoot and ensure your baby dictates the rhythm.',
                image: './3d_baby_clock.png',
                delay: 0.15
              },
              {
                title: 'Stress-Free Comfort',
                desc: 'The result is a photography session that feels completely natural, enjoyable, and stress-free for the whole family.',
                image: './3d_happy_baby.png',
                delay: 0.3
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(222, 93, 131, 0.08)' }}
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '28px',
                  padding: '40px 24px',
                  border: '1.5px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 8px 24px rgba(222, 93, 131, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{ width: '120px', height: '120px', marginBottom: '24px' }}
                >
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'drop-shadow(0 8px 16px rgba(222, 93, 131, 0.08))' }} />
                </motion.div>
                <h3 className="heading-sans" style={{ fontSize: '19px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6C: FREQUENTLY ASKED QUESTIONS */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #FFF5F6 0%, #FFFBF7 100%)',
        position: 'relative',
        zIndex: 3
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Got Questions?
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginTop: '8px', color: 'var(--text-dark)', marginBottom: '40px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(16px)',
            borderRadius: '32px',
            padding: '40px 32px',
            border: '1.5px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(222, 93, 131, 0.04)',
          }}>
            {[
              {
                q: 'When is the best time to schedule a newborn session?',
                a: 'The ideal time is within the first two weeks after birth, when babies are naturally sleepier and more comfortable during posed sessions.'
              },
              {
                q: 'Do you provide props and outfits?',
                a: 'Yes. We offer a carefully selected collection of wraps, outfits, headbands, accessories, and props to complement your session.'
              },
              {
                q: 'Can parents and siblings be included in the photoshoot?',
                a: 'Absolutely. Family photographs often become some of the most cherished images from a session, and we encourage parents and siblings to participate.'
              },
              {
                q: 'What if my baby becomes fussy during the session?',
                a: 'That\'s completely normal. We work at your baby\'s pace and allow plenty of time for feeding, comforting, and breaks whenever needed.'
              },
              {
                q: 'How far in advance should we book?',
                a: 'We recommend booking during pregnancy for newborn sessions to ensure availability around your expected due date.'
              },
              {
                q: 'Do you offer cake smash photography?',
                a: 'Yes. Our first birthday and cake smash sessions can be customized with themes, decorations, and styling that reflect your child\'s personality.'
              },
              {
                q: 'How long does a session usually take?',
                a: 'Session duration varies depending on the type of shoot and your baby\'s needs. We always allow enough time to ensure a relaxed and enjoyable experience.'
              },
              {
                q: 'Do you offer albums and prints?',
                a: 'Yes. We provide premium albums, prints, wall art, and digital collections so you can enjoy your memories in the way that suits your family best.'
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section style={{
        padding: '120px 24px',
        background: 'linear-gradient(135deg, #FFF5F6 0%, #FFE9EC 50%, #FFF0E5 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating 3D Baby Cloud (Top Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: -30 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: [0, -14, 0],
            rotate: [2, -2, 2]
          }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            right: '10px',
            top: '15%',
            width: '170px',
            height: '170px',
            zIndex: 10,
            pointerEvents: 'none'
          }}
          className="hide-mobile"
        >
          <img src="./3d_baby_cloud.png" alt="3D Baby Cloud" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Floating 3D Teddy Bear (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 30 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: [0, -16, 0],
            rotate: [-4, 4, -4]
          }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
            rotate: { duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
          }}
          style={{
            position: 'absolute',
            left: '10px',
            bottom: '5%',
            width: '160px',
            height: '160px',
            zIndex: 10,
            pointerEvents: 'none'
          }}
          className="hide-mobile"
        >
          <img src="./3d_teddy_bear.png" alt="3D Teddy Bear" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Soft Background floating heart */}

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 46px)', color: 'var(--text-dark)', margin: '0 0 16px', lineHeight: 1.2 }}>
            Ready to Capture These Moments?
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '750px', marginInline: 'auto', lineHeight: 1.6 }}>
            Whether you're preparing to welcome your newborn, celebrating a milestone, or planning a first birthday session, we'd love to be part of your family's journey. Let's create photographs that you'll look back on years from now and remember exactly how these moments felt.
          </p>

          {/* Stacking Booking Callouts */}
          <ScrollStack useWindowScroll={true} className="booking-scroll-stack" itemDistance={45}>
            {[
              {
                title: 'Book Your Session',
                desc: 'Secure your baby\'s photo shoot session with our team and ensure these precious memories are captured forever.',
                btnText: 'Book Your Session Today',
                action: () => setActivePage('book'),
                image3d: './3d_baby_shoes.png'
              },
              {
                title: 'Have a Theme in Mind?',
                desc: 'From elegant newborn portraits to creative birthday celebrations, we\'ll help design a customized session that\'s perfect for your little one.',
                btnText: 'Talk to Our Team About Your Ideas',
                action: () => setActivePage('contact'),
                image3d: './3d_baby_hat.png'
              },
              {
                title: 'Limited Sessions Available',
                desc: 'To ensure every family receives a personalized experience and dedicated attention, we accept a limited number of bookings each month.',
                btnText: 'Reserve Your Preferred Date Early',
                action: () => setActivePage('book'),
                image3d: './3d_baby_gift.png'
              }
            ].map((item, idx) => (
              <ScrollStackItem key={idx}>
                <div className="scroll-stack-card-content">
                  <div className="scroll-stack-card-text">
                    <h3 className="heading-sans" style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 12px', color: 'var(--text-dark)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
                      {item.desc}
                    </p>
                    <button
                      onClick={item.action}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'var(--primary-pink)',
                        border: '2px solid var(--primary-pink)',
                        borderRadius: '24px',
                        padding: '10px 24px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: 'var(--sans)',
                        transition: 'all 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-pink)';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--primary-pink)';
                      }}
                    >
                      {item.btnText} 
                    </button>
                  </div>
                  <div className="scroll-stack-card-visual">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{
                        duration: 4 + idx * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <img src={item.image3d} alt={item.title} />
                    </motion.div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>

          {/* Final Brand Promise Callout Banner */}
          <div style={{
            marginTop: '-120px',
            background: 'rgba(255, 255, 255, 0.76)',
            backdropFilter: 'blur(20px)',
            borderRadius: '36px',
            padding: '50px 32px',
            border: '1.5px solid rgba(255, 255, 255, 0.85)',
            boxShadow: '0 15px 45px rgba(222, 93, 131, 0.05)',
            textAlign: 'center'
          }}>
            <h3 className="heading-serif" style={{ fontSize: 'clamp(26px, 4vw, 36px)', color: 'var(--text-dark)', marginBottom: '16px' }}>
              Let's Create Memories That Last a Lifetime
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 30px', lineHeight: 1.7 }}>
              Your baby's journey is filled with moments that deserve to be remembered. At Baby Shine Studio, we're honored to help preserve those moments through heartfelt photography that celebrates childhood, family, and the memories you'll cherish forever.
            </p>

            <button
              onClick={() => setActivePage('book')}
              className="pulse-btn"
              style={{
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                padding: '18px 40px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(222, 93, 131, 0.3)',
                fontFamily: 'var(--sans)',
                transition: 'background-color 0.2s',
                marginBottom: '40px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-pink-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-pink)'}
            >
              Book Your Session Today
            </button>

            {/* Redesigned Guarantees badges */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              {[
                { text: 'Temperature Controlled Studio', bg: '#FFF6E5', color: '#D99100' },
                { text: 'UV Sanitized Props & Wraps', bg: '#E6F9F2', color: '#319795' },
                { text: '30+ Years Trust Guarantee', bg: '#FFEBF0', color: '#DE5D83' }
              ].map((badge, bIdx) => (
                <div key={bIdx} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: badge.bg,
                  color: badge.color,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: `1px solid rgba(0,0,0,0.03)`
                }}>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-book-btn {
          margin-left: -40px !important;
        }
        @media (max-width: 991px) {
          .hero-book-btn {
            margin-left: 0 !important;
          }
        }
        .hide-mobile {
          display: block;
        }
        @media (max-width: 1023px) {
          .hide-mobile {
            display: none !important;
          }
        }
        .hero-blend-overlay {
          background: linear-gradient(90deg, rgba(255, 209, 148, 0.75) 0%, rgba(255, 218, 224, 0.6) 25%, rgba(255, 227, 236, 0.4) 45%, rgba(255, 233, 240, 0.15) 70%, rgba(255, 233, 240, 0.02) 100%) !important;
        }
        @media (max-width: 991px) {
          .hero-container {
            flex-direction: column !important;
            height: auto !important;
            min-height: auto !important;
            padding: 85px 16px 40px !important;
            background: linear-gradient(180deg, #FFF0E5 0%, #FFE9F0 45%, #FFF5F6 100%) !important;
            align-items: center !important;
            box-sizing: border-box !important;
          }
          .hero-blend-overlay {
            display: none !important;
          }
          .hero-text-wrapper {
            position: relative !important;
            width: 100% !important;
            max-width: 520px !important;
            height: auto !important;
            padding: 0 !important;
            align-items: center !important;
            text-align: center !important;
            order: 1 !important;
            z-index: 10 !important;
            box-sizing: border-box !important;
          }
          .hero-badge {
            margin-bottom: 12px !important;
            font-size: 11px !important;
            padding: 5px 12px !important;
          }
          .hero-headline {
            transform: none !important;
            align-items: center !important;
            text-align: center !important;
            margin-bottom: 10px !important;
          }
          .hero-headline span {
            margin-left: 0 !important;
            font-size: clamp(24px, 6.5vw, 36px) !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 6px !important;
          }
          .hero-subtitle {
            text-align: center !important;
            font-size: 14px !important;
            line-height: 1.55 !important;
            margin: 0 auto 16px !important;
            max-width: 360px !important;
          }
          .hero-video-wrapper {
            position: relative !important;
            width: 100% !important;
            max-width: 440px !important;
            height: auto !important;
            aspect-ratio: 16 / 11 !important;
            margin: 0 auto 18px !important;
            border-radius: 20px !important;
            overflow: hidden !important;
            box-shadow: 0 16px 36px rgba(222, 93, 131, 0.18) !important;
            border: 3px solid rgba(255, 255, 255, 0.95) !important;
            order: 2 !important;
            top: 0 !important;
            left: 0 !important;
            box-sizing: border-box !important;
          }
          .hero-video-wrapper video {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center 25% !important;
          }
          .mobile-video-tag {
            display: inline-flex !important;
          }
          .hero-cta-group {
            order: 3 !important;
            width: 100% !important;
            display: flex !important;
            flex-direction: row !important;
            gap: 10px !important;
            justify-content: center !important;
            margin-bottom: 16px !important;
          }
          .hero-cta-group button {
            flex: 1 1 140px !important;
            max-width: 180px !important;
            justify-content: center !important;
            padding: 12px 16px !important;
            font-size: 14px !important;
          }
          .hero-trust-strip {
            order: 4 !important;
            justify-content: center !important;
            gap: 8px !important;
          }
          .hero-trust-strip span {
            font-size: 12px !important;
          }
          .why-choose-section {
            padding: 50px 14px 30px !important;
            overflow: hidden !important;
          }
          .category-showcase-card {
            min-height: 380px !important;
          }
        }
        @media (max-width: 1023px) {
          .feature-item-desktop {
            border-right: none !important;
          }
        }
        @media (min-width: 1024px) {
          .lg-grid-4 { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 768px) {
          .md-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 1023px) {
          .border-none-mobile { border-right: none !important; padding-right: 0 !important; justify-content: center !important; }
        }
        @media (max-width: 640px) {
          .no-border-mobile { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
        @media (max-width: 480px) {
          .flex-wrap-mobile { flex-direction: column; gap: 10px !important; }
        }
        @media (max-width: 900px) {
          .reels-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .reels-grid { grid-template-columns: repeat(1, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

