import React, { useState, useEffect } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 0,
      image: './hero_slide_1.png',
      titlePart1: 'Little',
      titlePart2: 'Moments',
      titlePart3: 'Timeless Memories',
      tagline: "Vijayawada's Trusted Newborn Photography Studio",
      animationType: 'waving' // Precise waving hand motion
    },
    {
      id: 1,
      image: './hero_slide_2.png',
      titlePart1: 'Tiny',
      titlePart2: 'Giggles',
      titlePart3: 'Endless Happiness',
      tagline: 'Pixar-Style Cozy Romper Theme Sessions',
      animationType: 'smile' // Smiling pulse scale motion
    },
    {
      id: 2,
      image: './hero_slide_3.png',
      titlePart1: 'Sweet',
      titlePart2: 'Beginnings',
      titlePart3: 'Adorable Poses',
      tagline: 'Specialized Sitter & Milestone Sessions',
      animationType: 'bounce' // Bouncing float motion + floating stars
    },
    {
      id: 3,
      image: './hero_slide_4.png',
      titlePart1: 'Dreamy',
      titlePart2: 'Slumber',
      titlePart3: 'Starry Nights',
      tagline: '100% Safe, Sanitized & Temperature Controlled',
      animationType: 'sleep' // Slow drifting sleep motion + starry fade
    }
  ];

  // Auto-slide logic for Hero Banner (6.5 seconds per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

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

      {/* SECTION 1: HERO BANNER (Option 2 - Swapped Layout with Left Video, Right Text) */}
      <section style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 50%, #FFD194 100%)',
        display: 'flex',
        flexDirection: 'row'
      }} className="hero-container">

        {/* Video Player Wrapper (Full Width Cover) */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: '20px',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1
        }} className="hero-video-wrapper">
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

          {/* Color Tint Overlay for Mockup Warm Theme Blending */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 209, 148, 0.2) 0%, rgba(222, 93, 131, 0.25) 50%, rgba(255, 209, 148, 0.2) 100%)',
            mixBlendMode: 'overlay',
            zIndex: 2,
            pointerEvents: 'none'
          }} />

          {/* Seamless Edge Blending Gradient Overlay - Fades from transparent on right to warm pink/gold on left */}
          <div
            className="hero-blend-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Left Side: Text & CTA Overlay Content Container */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '40%',
          height: '100%',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '120px 20px 0 80px',
          boxSizing: 'border-box',
          textAlign: 'left'
        }} className="hero-text-wrapper">

          {/* Cursive Handwriting Large Lettering Title */}
          <h1 style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1.2',
            marginBottom: '32px',
            margin: 0,
            transform: 'rotate(-10.9deg)',
            transformOrigin: 'left center'
          }}>
            <span className="font-cursive" style={{
              fontSize: 'clamp(35px, 5vw, 55px)',
              color: 'var(--text-dark)',
              textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
              fontWeight: 'normal',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              Best Baby Photography Studio <ButterflyIcon size={24} color="var(--primary-pink)" style={{ opacity: 0.85 }} />
            </span>
            <span className="font-cursive" style={{
              fontSize: 'clamp(40px, 5.5vw, 65px)',
              color: 'var(--primary-pink)',
              textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
              marginLeft: '30px',
              marginTop: '-5px',
              fontWeight: 'normal',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              in Vijayawada <ButterflyIcon size={26} color="var(--primary-pink)" style={{ opacity: 0.85 }} />
            </span>
            <span className="font-cursive" style={{
              fontSize: 'clamp(20px, 3.2vw, 36px)',
              color: 'var(--text-dark)',
              textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
              marginLeft: '0px',
              marginTop: '8px',
              fontWeight: 'normal',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              Capturing the Little Moments You'll Treasure Forever <ButterflyIcon size={20} color="var(--primary-pink)" style={{ opacity: 0.85 }} />
            </span>
          </h1>        </div>


        {/* Carousel Indicators (Dots) centered at the bottom */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 20
        }}>
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: currentSlide === idx ? '26px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: currentSlide === idx ? 'var(--primary-pink)' : 'rgba(61, 51, 42, 0.3)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
                boxShadow: currentSlide === idx ? '0 2px 5px rgba(222, 93, 131, 0.3)' : 'none'
              }}
            />
          ))}
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
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #FFF5F6 0%, #FFEBEF 100%)',
        position: 'relative',
        overflow: 'visible',
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
                desc: 'The first few weeks are filled with wonder. Our newborn sessions are designed to preserve the beauty of these early days through soft, timeless portraits that focus on your baby\'s natural innocence. Every session is planned with patience and care, ensuring a safe and comfortable experience for both baby and parents.',
                img: './newborn_shoot.png',
                page: 'newborn'
              },
              {
                title: 'Milestone Photography',
                desc: 'Babies grow and change so quickly during their first year. From tummy time and first smiles to sitting, crawling, and standing, milestone sessions help document this incredible journey one beautiful stage at a time.',
                img: './sitter_shoot.png',
                page: 'milestone'
              },
              {
                title: 'First Birthday & Cake Smash Sessions',
                desc: 'A first birthday is a celebration of love, growth, and unforgettable memories. Our cake smash sessions combine creative styling, playful setups, and lots of fun to create photographs full of personality and joy. Whether you prefer a simple, elegant theme or something colorful and whimsical, we\'ll bring your vision to life.',
                img: './onemonth_shoot.png',
                page: 'cakesmash'
              },
              {
                title: 'Family Portraits',
                desc: 'Some of the most meaningful photographs are the ones that include everyone. Our family portrait sessions celebrate the love, connection, and bond shared between parents, siblings, grandparents, and little ones, creating images that will be treasured for generations.',
                img: './baby_hero.png',
                page: 'gallery'
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(222, 93, 131, 0.12)' }}
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: '460px',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 8px 24px rgba(23, 23, 23, 0.05)',
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
                  background: 'linear-gradient(180deg, rgba(255, 233, 240, 0) 15%, rgba(74, 53, 58, 0.6) 50%, rgba(46, 31, 35, 0.95) 100%)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'left',
                  color: 'white',
                  zIndex: 2
                }}>
                  <h3 className="heading-serif" style={{ fontSize: '20px', margin: '0 0 8px', color: 'white' }}>{cat.title}</h3>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.9)', margin: '0 0 12px', lineHeight: 1.4 }}>{cat.desc}</p>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--pastel-pink)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    View Details 
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setActivePage('gallery')}
            style={{
              backgroundColor: 'transparent',
              color: 'var(--primary-pink)',
              border: '2px solid var(--primary-pink)',
              borderRadius: '24px',
              padding: '12px 28px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'var(--sans)',
              transition: 'all 0.2s ease'
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
            Browse Full Gallery
          </button>
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="heading-sans" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)' }}>
                @babyshine_studio
              </span>
            </div>

            {/* Right: Follow Button */}
            <a
              href="https://www.instagram.com/babyshine_studio?stkn=MTZkZTk5eWpjcm1uYw%3D%3D&utm_source=qr"
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
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-pink-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-pink)'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Follow on Instagram
            </a>
          </motion.div>

          {/* Reels Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            <div style={{
              aspectRatio: '9/16',
              backgroundColor: '#f0e8e4',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'var(--text-muted)',
              fontSize: '14px',
              border: '2px dashed rgba(222, 93, 131, 0.2)',
              minHeight: '400px'
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-pink)" strokeWidth="1.5" style={{ marginBottom: '12px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M10 9l5 3-5 3V9z" />
              </svg>
              <span>Drop reel videos here</span>
              <span style={{ fontSize: '11px', marginTop: '4px' }}>public/reel/ folder</span>
            </div>
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
          <h2 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginTop: '8px', color: 'var(--text-dark)', marginBottom: '24px' }}>
            Trusted by Families Across Vijayawada
          </h2>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.7',
            color: 'var(--text-muted)',
            marginBottom: '40px',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Over the years, Baby Shine Studio has had the privilege of working with families from across Vijayawada and surrounding communities, including Benz Circle, Labbipet, Patamata, Gunadala, Poranki, Kanuru, Tadigadapa, Penamaluru, and nearby areas.
            <br /><br />
            Many parents first visit us for a newborn session and return again to celebrate milestones, birthdays, and family moments as their children grow. There is no greater compliment than being trusted to tell a family's story through photographs.
          </p>

          <div style={{
            background: 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(12px)',
            borderRadius: '32px',
            padding: '48px 40px',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 8px 32px rgba(222, 93, 131, 0.05)',
            position: 'relative',
            minHeight: '220px',
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
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >


                <blockquote style={{
                  fontSize: '20px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--text-dark)',
                  margin: '0 0 24px',
                  fontWeight: 400,
                  fontFamily: 'var(--serif)'
                }}>
                  "{testimonials[activeSlide].quote}"
                </blockquote>

                <h4 className="heading-sans" style={{ fontSize: '16px', margin: '0 0 4px', color: 'var(--text-dark)' }}>
                  {testimonials[activeSlide].name}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                  {testimonials[activeSlide].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                style={{
                  width: activeSlide === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: activeSlide === idx ? 'var(--primary-pink)' : 'rgba(222, 93, 131, 0.2)',
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
          .hero-blend-overlay {
            background: linear-gradient(180deg, rgba(255, 233, 240, 0.05) 0%, rgba(255, 233, 240, 0.1) 40%, rgba(255, 227, 236, 0.6) 70%, #FFE9F0 100%) !important;
          }
          .hero-container {
            flex-direction: column !important;
            height: auto !important;
            min-height: 100vh !important;
            padding-bottom: 90px !important;
          }
          .hero-video-wrapper {
            position: relative !important;
            width: 100% !important;
            height: 60vh !important;
            margin-top: 60px !important;
          }
          .hero-video-wrapper video {
            object-position: center top !important;
          }
          .hero-text-wrapper {
            position: relative !important;
            width: 100% !important;
            padding: 120px 24px 30px !important;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-text-wrapper h1 {
            align-items: center !important;
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
      `}</style>
    </div>
  );
}
