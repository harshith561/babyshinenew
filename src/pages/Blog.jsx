import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Golden Window: Best Days for a Newborn Photoshoot',
    excerpt: 'Discover why the first 5–14 days are critical for curls, wraps, and sleeping newborn poses.',
    category: 'prep',
    readTime: '4 min read',
    date: 'Jun 18, 2026',
    img: '/newborn_shoot.png',
    content: [
      "The first few days of your baby's life are a magical whirlwind, filled with tiny sighs, soft stretches, and fleeting moments. In the world of newborn photography, there is a specific timeframe known as 'The Golden Window'—typically between 5 and 14 days after birth. During this short period, baby portraits capture the classic sleepy, curly poses that parents cherish forever.",
      "But why is this period so crucial? First, newborns are exceptionally flexible and naturally retain their womb-like curl. Poses like the cozy 'taco wrap' or the rustic bowl curl are easiest and safest when babies are still very young and highly flexible. Second, young infants sleep deeply. A deep sleep is key to safely posing a baby without waking or startling them.",
      "After the two-week mark, babies tend to stretch out more, become more sensitive to touch, and develop lighter sleep cycles. They may also start experiencing baby acne or mild colic, which can make them slightly more fussy during a session. While we can absolutely capture beautiful portraits of older babies, the classic sleepy art is best achieved in this 5–14 day window.",
      "To ensure you don't miss this window, we highly recommend booking your newborn photography session during your second or third trimester. We reserve a spot around your expected due date and adjust the actual photoshoot date once your little one makes their official debut!"
    ]
  },
  {
    id: 2,
    title: 'How to Prepare Your Baby for a Stress-Free Studio Session',
    excerpt: 'Feeding timelines, clothing tips, and simple tricks to keep your baby calm and happy during the shoot.',
    category: 'prep',
    readTime: '6 min read',
    date: 'Jun 12, 2026',
    img: '/baby_hero.png',
    content: [
      "Preparing for a newborn photoshoot can feel overwhelming, especially for new parents. Our goal at Baby Shine Studio is to make your experience as relaxed and stress-free as possible. A calm parent makes for a calm baby, and we have a few tested secrets to ensure a smooth, happy session.",
      "First, let's talk about the feeding timeline. We recommend keeping your baby awake for 1–2 hours prior to the session and feeding them immediately before you leave or right as you arrive at the studio. A full belly is the best recipe for a long, deep sleep. We also schedule generous breaks so you can nurse or feed your baby comfortably whenever they wake up.",
      "Second, dress your baby in loose, easy-to-remove clothing. A simple snap-up or zip-up sleepsuit is ideal because it allows us to undress them without pulling anything over their head, which often wakes them up. Keep your own outfits light and comfortable too—the studio is kept at a warm 26–28°C to ensure your newborn stays cozy when wrapped or posed.",
      "Lastly, don't worry about crying or diaper accidents. We are completely prepared for the mess! We sanitise every wrap and prop after each use. Just sit back, enjoy a hot coffee in our comfortable lounge, and let us capture the magic."
    ]
  },
  {
    id: 3,
    title: '1 Month vs. 3 Months: Understanding Baby Milestones',
    excerpt: 'Should you choose a 1-month alert session or wait for sitter smiles? We break down the developmental differences.',
    category: 'milestones',
    readTime: '5 min read',
    date: 'Jun 05, 2026',
    img: '/onemonth_shoot.png',
    content: [
      "Every month of a baby's first year brings incredible developmental milestones. Parents often ask us: 'Should we book a photoshoot at 1 month, or wait until 3 months?' The truth is, both stages offer completely different and equally beautiful opportunities for portraits.",
      "At 1 month, your baby is transitioning out of the newborn stage. They are more awake, alert, and their eyes are beginning to focus on your face. Portraits at this stage capture gorgeous open-eyed expressions, tiny stretches, and sweet, fleeting smiles. However, they are no longer in the deep, curly sleep of a newborn, and they cannot sit or hold their head up yet.",
      "By 3 months, your baby's personality is truly starting to shine. They can hold their head up during tummy time, smile reactively to your voice, coo, and interact with the camera. The neck strength they have gained allows for beautiful 'tummy time' poses in soft, textured setups. They also have adorable chubby cheeks and rolls that look wonderful in photos.",
      "If you want sleepy, artistic, wrapped portraits, choose the newborn/1-month stage. If you prefer interactive, smiley, expressive photos with lots of personality, the 3-month milestone is the perfect time to visit our studio."
    ]
  },
  {
    id: 4,
    title: 'Selecting the Perfect Prop Theme for Your Baby Shoot',
    excerpt: 'From cozy wooden nests to magical fairy teepees, here is how to select colors and styles for your home.',
    category: 'styling',
    readTime: '3 min read',
    date: 'May 28, 2026',
    img: '/hero_slide_3.png',
    content: [
      "Choosing the right props and theme for your baby's photoshoot is one of the most exciting parts of the creative process. At Baby Shine Studio, we work closely with you to design a set that matches your style while keeping the focus entirely on your baby's natural beauty.",
      "We recommend starting with a color palette that complements your home decor. If you plan to hang the portraits in a nursery with soft beige tones, neutral and earth-toned props—like rustic wooden baskets, organic cream knits, and dried foliage—will look stunning. For a pop of color, soft pastels like dusty rose, sage green, and baby blue add a beautiful touch without overpowering the baby.",
      "Next, consider the style of props. We offer a curated collection of imported wooden bowls, vintage beds, delicate floral nests, and cozy moon cradles. A bohemian theme with handwoven macramé and soft rugs is perfect for a modern, warm look, while a simple, minimalist setup focuses purely on macro details like tiny toes and eyelashes.",
      "Remember, less is often more. The props should enhance the portrait, not distract from your baby. We'll guide you through our collection to mix and match textures, layers, and wraps for a cohesive, professional look."
    ]
  },
  {
    id: 5,
    title: 'Safety First: Posing Guidelines in Newborn Photography',
    excerpt: 'What to look for in a certified baby photographer. Safety measures, sanitisation, and why baby safety is paramount.',
    category: 'safety',
    readTime: '7 min read',
    date: 'May 19, 2026',
    img: '/hero_slide_4.png',
    content: [
      "In newborn photography, safety is not just a guideline—it is our absolute priority. Capturing beautiful poses should never come at the expense of your baby's comfort or safety. As a professional, baby-friendly studio, we follow strict safety protocols during every single session.",
      "First, many of the advanced poses you see online, like the 'froggy pose' where the baby rests their head on their hands, are actually created using composite images. This means a parent or assistant's hand is holding the baby's head at all times, and the hand is later edited out in post-processing. We never leave a baby unsupported in any upright or delicate pose.",
      "Second, we maintain strict temperature control. Since newborns cannot regulate their body temperature, the studio is heated to 26–28°C. This keeps them warm and cozy even when they are sleeping unclothed or in thin wraps. We also use gentle, professional lighting that is completely safe for sensitive newborn eyes.",
      "Finally, hygiene is paramount. We sanitise the entire studio, props, and wash all blankets and wraps with baby-safe, hypoallergenic detergent before every session. We wash our hands constantly and wear soft clothing to avoid irritating your baby's skin. When choosing a photographer, always ensure they are fully trained in safe newborn handling."
    ]
  },
  {
    id: 6,
    title: 'Preserving Memories: High-End Digital Editing & Retouching',
    excerpt: 'How we enhance natural details without modifying baby features, keeping skin textures soft and pure.',
    category: 'styling',
    readTime: '5 min read',
    date: 'May 10, 2026',
    img: '/hero_slide_2.png',
    content: [
      "The magic of professional photography doesn't end when the camera clicks. In fact, some of the most critical work happens during the digital editing and retouching phase, where we polish your images into high-end works of art.",
      "Our retouching philosophy is centered around preserving natural beauty. Newborns often have temporary skin conditions like baby acne, dry flaking skin, mild jaundice, or scratches. Our job is to gently correct these temporary blemishes while keeping the baby's authentic features, soft skin textures, and tiny fine hairs completely intact.",
      "We apply custom color grading to create soft, glowing tones that match our signature warm and airy aesthetic. We adjust shadows and highlights to bring out the delicate details of the wraps, blankets, and props. This meticulous process ensures that the focus remains entirely on your baby, creating a clean, timeless finish.",
      "We deliver high-resolution digital files that are optimized for both print and screen. Whether you're creating a premium lay-flat photo album or sharing milestones with family online, our professional editing ensures your memories are preserved in the highest quality possible."
    ]
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'prep', label: 'Shoot Prep' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'styling', label: 'Styling & Themes' },
  { id: 'safety', label: 'Studio Safety' }
];

export default function Blog({ setActivePage }) {
  const [filter, setFilter] = useState('all');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activePost, setActivePost] = useState(null);

  const filteredPosts = filter === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === filter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', overflowX: 'hidden' }}>

      {/* ── HERO HEADER with Mascot ── */}
      <section className="page-hero-section" style={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px'
      }}>
        {/* Premium Background Image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
          <img
            src="/blog_hero_bg.png"
            alt="Newborn Props Backdrop"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Elegant Overlay Tint for Contrast & Readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 240, 229, 0.75) 0%, rgba(255, 233, 240, 0.8) 60%, rgba(255, 255, 255, 0.7) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
        </div>

        {/* Floating Mascot – Left */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: -60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -14, 0], rotate: [-3, 3, -3] }}
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
            width: 'clamp(90px, 12vw, 170px)',
            height: 'clamp(90px, 12vw, 170px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="/3d_toy_bunny.png" alt="Toy Bunny" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Floating Mascot – Right */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -16, 0], rotate: [4, -4, 4] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
          }}
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '10px',
            width: 'clamp(90px, 12vw, 175px)',
            height: 'clamp(90px, 12vw, 175px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="/3d_baby_cloud.png" alt="Baby Cloud" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 4, maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Insights & Tips</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(28px, 5vw, 52px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '16px', lineHeight: 1.2 }}>
              The Baby Shine Blog
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-dark)', fontWeight: 500, lineHeight: 1.6, margin: '0 auto' }}>
              Your ultimate guide to newborn photography prep, baby milestones, safety guidelines, and stories about parenting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>

        <AnimatePresence mode="wait">
          {activePost ? (
            <motion.div
              key="blog-detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'left', margin: '0 auto', maxWidth: '800px' }}
            >
              {/* Back Button */}
              <button
                onClick={() => {
                  setActivePost(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  border: 'none',
                  background: 'rgba(222, 93, 131, 0.08)',
                  color: 'var(--primary-pink)',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'var(--sans)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '40px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-pink)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateX(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(222, 93, 131, 0.08)';
                  e.currentTarget.style.color = 'var(--primary-pink)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <span>← Back to Articles</span>
              </button>

              {/* Category & Meta */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <span style={{
                  backgroundColor: 'var(--primary-pink)',
                  color: 'white',
                  padding: '4px 14px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {CATEGORIES.find(c => c.id === activePost.category)?.label || 'Article'}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{activePost.date}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{activePost.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="heading-serif" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-dark)', marginBottom: '24px', lineHeight: 1.25 }}>
                {activePost.title}
              </h1>

              {/* Hero Image */}
              <div style={{
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                marginBottom: '40px',
                aspectRatio: '16/9'
              }}>
                <img src={activePost.img} alt={activePost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Article Content */}
              <div style={{ fontSize: '17px', lineHeight: 1.85, color: '#4A3F35', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {activePost.content && activePost.content.map((p, index) => {
                  if (index === 1) {
                    return (
                      <div
                        key={index}
                        style={{
                          background: 'linear-gradient(135deg, #FFF5F6 0%, #FFE9F0 100%)',
                          borderLeft: '4px solid var(--primary-pink)',
                          borderRadius: '16px',
                          padding: '24px 28px',
                          margin: '20px 0',
                          fontStyle: 'italic',
                          color: 'var(--text-dark)',
                          fontWeight: 500,
                          fontSize: '18px',
                          lineHeight: 1.7
                        }}
                      >
                        "{p}"
                      </div>
                    );
                  }
                  return <p key={index}>{p}</p>;
                })}
              </div>

              {/* Share/Footer inside Article */}
              <div style={{
                borderTop: '1px solid rgba(222,93,131,0.12)',
                marginTop: '60px',
                paddingTop: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '60px'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 4px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-dark)' }}>Written by</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-muted)', fontWeight: 600 }}>Baby Shine Editorial Team</p>
                </div>
                <button
                  onClick={() => {
                    setActivePost(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    border: 'none',
                    background: 'var(--primary-pink)',
                    color: 'white',
                    padding: '12px 28px',
                    borderRadius: '24px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'var(--sans)',
                    boxShadow: '0 4px 14px rgba(222,93,131,0.25)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  All Articles
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="blog-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Category Tabs */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
                {CATEGORIES.map(cat => {
                  const isActive = filter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setFilter(cat.id)}
                      style={{
                        border: 'none',
                        backgroundColor: isActive ? 'var(--primary-pink)' : 'rgba(222,93,131,0.07)',
                        color: isActive ? 'white' : 'var(--text-dark)',
                        padding: '10px 22px',
                        borderRadius: '24px',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: 'var(--sans)',
                        transition: 'all 0.2s ease',
                        boxShadow: isActive ? '0 4px 12px rgba(222,93,131,0.25)' : 'none'
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Posts Grid */}
              <motion.div
                layout
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '30px',
                  marginBottom: '80px'
                }}
                className="md-grid-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, idx) => (
                    <motion.article
                      layout
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      onMouseEnter={() => setHoveredCard(post.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => {
                        setActivePost(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '1px solid rgba(222, 93, 131, 0.08)',
                        boxShadow: hoveredCard === post.id
                          ? '0 12px 30px rgba(222, 93, 131, 0.15)'
                          : '0 6px 20px rgba(61, 51, 42, 0.04)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        transition: 'box-shadow 0.3s ease'
                      }}
                    >
                      {/* Image Container with zoom */}
                      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                        <img
                          src={post.img}
                          alt={post.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: hoveredCard === post.id ? 'scale(1.06)' : 'scale(1)',
                            transition: 'transform 0.5s ease'
                          }}
                        />
                        <span style={{
                          position: 'absolute',
                          top: '16px',
                          left: '16px',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(4px)',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: 'var(--primary-pink)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          {CATEGORIES.find(c => c.id === post.category)?.label || 'Article'}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        {/* Meta items */}
                        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {post.date}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="heading-sans" style={{
                          fontSize: '18px',
                          margin: '0 0 10px',
                          color: 'var(--text-dark)',
                          lineHeight: 1.35,
                          fontWeight: 700,
                          transition: 'color 0.2s'
                        }}>
                          {post.title}
                        </h3>

                        <p style={{
                          fontSize: '14px',
                          lineHeight: 1.6,
                          color: 'var(--text-muted)',
                          margin: '0 0 20px',
                          flexGrow: 1
                        }}>
                          {post.excerpt}
                        </p>

                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: 'var(--primary-pink)',
                          marginTop: 'auto'
                        }}>
                          <span>Read Article</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ── FULL SIZE NEWSLETTER SIGNUP STRIP ── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        padding: '100px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(222, 93, 131, 0.12)',
        borderBottom: '1px solid rgba(222, 93, 131, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Laughing Baby Background Image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
          <img
            src="/newsletter_bg.png"
            alt="Laughing Baby smiling background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
          {/* High Contrast Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255, 235, 240, 0.88) 0%, rgba(255, 245, 238, 0.9) 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 3, maxWidth: '700px', margin: '0 auto', width: '100%' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
          >
            <h2 className="heading-serif" style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--text-dark)', margin: '0 0 12px' }}>
              Subscribe to Our Newsletter
            </h2>
            <p style={{ color: 'var(--text-dark)', fontWeight: 500, fontSize: 'clamp(14px, 1.8vw, 16px)', marginBottom: '32px', lineHeight: 1.6 }}>
              Get parenting guides, shoot styling ideas, safety advice, and exclusive early booking discounts straight to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="subscribe-form"
                  onSubmit={handleSubscribe}
                  style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: '1 1 280px',
                      maxWidth: '360px',
                      padding: '16px 24px',
                      borderRadius: '30px',
                      border: '1.5px solid var(--primary-pink)',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      fontFamily: 'var(--sans)',
                      fontSize: '15px',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(61, 51, 42, 0.05)',
                      transition: 'all 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary-pink-hover)';
                      e.target.style.boxShadow = '0 0 15px rgba(222, 93, 131, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--primary-pink)';
                      e.target.style.boxShadow = '0 4px 12px rgba(61, 51, 42, 0.05)';
                    }}
                  />
                  <button
                    type="submit"
                    className="pulse-btn"
                    style={{
                      backgroundColor: 'var(--primary-pink)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '16px 36px',
                      fontSize: '15px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--sans)',
                      boxShadow: '0 4px 14px rgba(222, 93, 131, 0.35)'
                    }}
                  >
                    Subscribe
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid rgba(49, 151, 149, 0.2)',
                    borderRadius: '20px',
                    padding: '16px 28px',
                    color: '#234e52',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '15px',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                  }}
                >
                  <span>Success! You have been subscribed to our newsletter.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .md-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
