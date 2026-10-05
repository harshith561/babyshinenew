import React from 'react';
import { motion } from 'framer-motion';

const siteSections = [
  {
    title: 'Core Pages',
    desc: 'Main studio introduction, overview, and contact points',
    links: [
      { id: 'home', title: 'Home Page', desc: 'Welcome hero, highlights, customer trust & testimonials' },
      { id: 'about', title: 'About Baby Shine', desc: 'Our 30-year legacy, certified safe protocols & team' },
      { id: 'contact', title: 'Contact Us', desc: 'Studio address, Google Maps embed & enquiry form' },
      { id: 'book', title: 'Book Session', desc: 'Online reservation form for newborn & milestone shoots' }
    ]
  },
  {
    title: 'Photography Services',
    desc: 'Explore specialized sessions tailored for each baby milestone',
    links: [
      { id: 'services', title: 'All Services Overview', desc: 'Complete breakdown of all photo categories & packages' },
      { id: 'newborn', title: 'Newborn Photography', desc: '5–14 days old sleepy curls & organic wrap setups' },
      { id: 'milestone', title: 'Baby Milestone Shoots', desc: '1–11 months tummy time, sitting up & alert giggles' },
      { id: 'cakesmash', title: 'Cake Smash & 1st Birthday', desc: 'Joyful cake smash sessions & bubble bath celebrations' }
    ]
  },
  {
    title: 'Portfolio & Client Experience',
    desc: 'Browse our real client work, testimonials, and articles',
    links: [
      { id: 'packages', title: 'Packages & Pricing', desc: 'Silver, Gold & Royal Heritage packages with deliverables' },
      { id: 'testimonials', title: 'Parent Reviews', desc: 'Verified 5-star Google & Facebook reviews from parents' },
      { id: 'blog', title: 'Baby Care & Styling Blog', desc: 'Prep guides, timing advice & milestone milestones' }
    ]
  }
];

export default function Sitemap({ setActivePage }) {
  return (
    <div style={{ background: 'linear-gradient(180deg, #FFFDFB 0%, #FFF5F6 60%, #fff 100%)', minHeight: '100vh', padding: '60px 24px 100px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Navigation Tree
          </span>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', color: 'var(--text-dark)', marginTop: '8px', marginBottom: '14px' }}>
            Website Sitemap
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Quickly navigate to any page, photography service, portfolio album, or booking resource on Baby Shine Studio.
          </p>
        </div>

        {/* Sections Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', marginBottom: '60px' }}>
          {siteSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '24px',
                padding: '36px 30px',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(222, 93, 131, 0.1)'
              }}
            >
              <h2 className="heading-serif" style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                {section.title}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
                {section.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {section.links.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePage && setActivePage(item.id)}
                    style={{
                      textAlign: 'left',
                      background: 'rgba(255, 245, 248, 0.6)',
                      border: '1px solid rgba(222, 93, 131, 0.12)',
                      borderRadius: '14px',
                      padding: '14px 18px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--pastel-pink)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                      e.currentTarget.style.borderColor = 'var(--primary-pink)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 245, 248, 0.6)';
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.borderColor = 'rgba(222, 93, 131, 0.12)';
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {item.desc}
                      </div>
                    </div>
                    <span style={{ color: 'var(--primary-pink)', fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>
                      →
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* XML Link / Machine-Readable */}
        <div style={{ textAlign: 'center', background: '#fff', borderRadius: '20px', padding: '24px', border: '1px dashed rgba(222,93,131,0.3)', maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ margin: '0 0 10px', fontSize: '14px', color: 'var(--text-dark)', fontWeight: 600 }}>
            Looking for search engine XML sitemap?
          </p>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary-pink)', fontWeight: 700, fontSize: '13px', textDecoration: 'underline' }}
          >
            View /sitemap.xml (Google & Bing index)
          </a>
        </div>

      </div>
    </div>
  );
}
