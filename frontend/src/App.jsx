import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import FloatingParticles from './components/FloatingParticles';


// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import NewbornPhotography from './pages/NewbornPhotography';
import Gallery from './pages/Gallery';
import Packages from './pages/Packages';
import Testimonials from './pages/Testimonials';
import BookSession from './pages/BookSession';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MileStone from './pages/MileStone';
import CakeSmash from './pages/CakeSmash';
import Services from './pages/Services';
import Sitemap from './pages/Sitemap';

const VALID_PAGES = ['home', 'about', 'services', 'newborn', 'gallery', 'packages', 'testimonials', 'book', 'blog', 'contact', 'milestone', 'cakesmash', 'sitemap'];

function getPageFromPath(pathname) {
  // Strip leading slash and match to valid page ids
  const slug = pathname.replace(/^\//, '').toLowerCase();
  if (!slug || slug === 'home') return 'home';
  if (VALID_PAGES.includes(slug)) return slug;
  return 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));

  const navigateTo = (page) => {
    if (page === activePage) return;
    setActivePage(page);
    const url = page === 'home' ? '/' : '/' + page;
    window.history.pushState({ page }, '', url);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (e) => {
      const page = e.state?.page || getPageFromPath(window.location.pathname);
      setActivePage(page);
    };
    window.addEventListener('popstate', handlePopState);
    // Set initial history state without replacing current url
    const initialPage = getPageFromPath(window.location.pathname);
    const initialUrl = initialPage === 'home' ? '/' : '/' + initialPage;
    window.history.replaceState({ page: initialPage }, '', initialUrl);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Inject Schema Markup & SEO tags
  useEffect(() => {
    // 1. Inject local business schema markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Baby Shine Studio",
      "image": "https://babyshine.studio/baby_hero.png",
      "description": "Premium Newborn & Baby Photography Studio in Vijayawada. Powered by Sai Krishna Photography.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A.Colony Center, Brilliants Convent Street, Ibrahimpatnam",
        "addressLocality": "Vijayawada",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "521456",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "16.5963842",
        "longitude": "80.52459739999999"
      },
      "telephone": "+919999999999",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:30",
          "closes": "18:30"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/saikrishnaphotography",
        "https://www.instagram.com/saikrishnaphotography"
      ]
    };

    const scriptId = 'babyshine-jsonld-schema';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schema);

    // 2. Set dynamic meta titles and descriptions for SEO keywords in Vijayawada
    const titleMap = {
      home: "Baby Shine Studio | Best Baby & Newborn Photographer Vijayawada",
      about: "About Baby Shine Studio | Where Precious Memories Become Timeless Keepsakes",
      services: "Baby Photography Services in Vijayawada | Baby Shine Studio",
      newborn: "Newborn Photography in Vijayawada | Safe & Timeless Baby Portraits",
      milestone: "Baby Milestone Photography in Vijayawada | Baby Shine Studio",
      cakesmash: "Cake Smash Photoshoot in Vijayawada | Baby Shine Studio",
      gallery: "Baby Photography Gallery in Vijayawada | Baby Shine Studio",
      packages: "Baby Photoshoot Packages in Vijayawada | Newborn to First Birthday",
      testimonials: "Parent Reviews | Trusted Newborn Photography Studio Vijayawada",
      book: "Book Your Session | Baby Photography Studio Vijayawada"
    };
    document.title = titleMap[activePage] || "Baby Shine Studio Vijayawada";

    const descMap = {
      home: "Baby Shine Studio - Best Newborn & Baby Photography Studio in Vijayawada. Specialized in safe baby photoshoot, 1 month baby shoot packages, and creative themes.",
      about: "Baby Shine Studio was created to provide families with a warm, welcoming space where life's most precious moments can be beautifully preserved. Powered by Sai Krishna Photography.",
      services: "Explore our premium baby photography services in Vijayawada. From safe newborn photography to milestone shoots, cake smash sessions, kids photography, and cinematic videos.",
      newborn: "Celebrate your baby's first days with professional newborn photography in Vijayawada. Safe, comfortable sessions designed to capture every tiny detail and precious memory beautifully.",
      milestone: "Capture your baby's growth milestones from sitting to crawling in our comfortable, sanitised Vijayawada studio.",
      cakesmash: "Celebrate your child's first birthday with a fun, messy cake smash photoshoot in Vijayawada. Custom themes and packages.",
      gallery: "Explore our baby photography gallery featuring newborn portraits, milestone sessions, cake smash celebrations, first birthdays, and family photography captured with love and creativity.",
      packages: "Explore flexible baby photoshoot packages in Vijayawada for newborns, milestone sessions, cake smash photography, birthdays, and family portraits tailored to your family's needs.",
      testimonials: "Read reviews from parents who trusted Baby Shine Studio for newborn, milestone, and family photography in Vijayawada.",
      book: "Schedule a session with Baby Shine Studio, Vijayawada's trusted newborn and milestone photographer."
    };
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = descMap[activePage] || "Premium Newborn & Baby Photography Studio in Vijayawada. Powered by Sai Krishna Photography.";

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Page switcher mapping
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={navigateTo} />;
      case 'about':
        return <About setActivePage={navigateTo} />;
      case 'services':
        return <Services setActivePage={navigateTo} />;
      case 'newborn':
        return <NewbornPhotography setActivePage={navigateTo} />;
      case 'gallery':
        return <Gallery setActivePage={navigateTo} />;
      case 'packages':
        return <Packages setActivePage={navigateTo} />;
      case 'testimonials':
        return <Testimonials setActivePage={navigateTo} />;
      case 'blog':
        return <Blog setActivePage={navigateTo} />;
      case 'contact':
        return <Contact setActivePage={navigateTo} />;
      case 'milestone':
        return <MileStone setActivePage={navigateTo} />;
      case 'cakesmash':
        return <CakeSmash setActivePage={navigateTo} />;
      case 'book':
        return <BookSession setActivePage={navigateTo} />;
      case 'sitemap':
        return <Sitemap setActivePage={navigateTo} />;
      default:
        return <Home setActivePage={navigateTo} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Floating Elements */}
      <FloatingParticles />

      {/* Navigation Header — hidden on gallery page */}
      {activePage !== 'gallery' && <Navbar activePage={activePage} setActivePage={navigateTo} />}

      {/* Main Content Area with elegant fade transition */}
      <main style={{ flex: '1 0 auto', position: 'relative', zIndex: 1, paddingTop: activePage === 'home' ? '0' : '64px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <footer style={{
        backgroundColor: '#1E1915',
        color: '#E6DFD9',
        padding: 'clamp(40px, 6vw, 60px) clamp(16px, 4vw, 40px) 28px',
        borderTop: '2px solid var(--primary-pink)',
        position: 'relative',
        zIndex: 2,
        overflowX: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginBottom: '40px',
          textAlign: 'left'
        }} className="footer-grid">
          
          {/* Col 1: Branding & Trust */}
          <div>
            <h3 className="heading-serif" style={{ color: '#fff', fontSize: '24px', margin: '0 0 12px' }}>Baby Shine Studio</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#C8BEB5', marginBottom: '20px' }}>
              Specialized newborn and baby photography studio in Vijayawada capturing tiny smiles and precious beginnings with absolute safety and luxury backdrops.
            </p>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(222, 93, 131, 0.2)',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '12px',
              color: '#FFD5E5'
            }}>
              Powered by <strong>Sai Krishna Photography</strong> — 30 Years of Trusted Photography Excellence in Andhra Pradesh.
            </div>
          </div>

          {/* Col 2: Services / Pages */}
          <div>
            <h4 className="heading-sans" style={{ color: '#fff', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 20px' }}>Our Studio</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Baby Shine' },
                { id: 'services', label: 'All Services' },
                { id: 'newborn', label: 'Newborn Photography' },
                { id: 'packages', label: 'Packages & Pricing' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'sitemap', label: 'Website Sitemap' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navigateTo(link.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: 0,
                      color: '#C8BEB5',
                      fontSize: '14px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--sans)',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-pink)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#C8BEB5'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Local SEO / Contact */}
          <div>
            <h4 className="heading-sans" style={{ color: '#fff', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 20px' }}>Reach Us</h4>
            <address style={{ fontStyle: 'normal', fontSize: '14px', lineHeight: 1.6, color: '#C8BEB5', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ margin: 0 }}>
                <strong>Location:</strong> A.Colony Center, Brilliants Convent Street, Ibrahimpatnam, Vijayawada, Gudurupadu, Andhra Pradesh — 521456
              </p>
              <p style={{ margin: 0 }}>
                <strong>Phone:</strong> +91 99999 99999 / +91 88888 88888
              </p>
              <p style={{ margin: 0 }}>
                <strong>Email:</strong> hello@babyshine.com
              </p>
              <p style={{ margin: 0, color: 'var(--primary-pink)', fontWeight: 600 }}>
                Serving Vijayawada, Guntur & surrounding regions.
              </p>
            </address>
          </div>

        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', margin: '0 0 24px' }} />

        {/* Footer Bottom copyright */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          color: '#8E8276'
        }} className="flex-wrap-mobile-footer">
          <p style={{ margin: 0 }}>
            © 2026 Baby Shine Studio. All Rights Reserved.
          </p>
          <p style={{ margin: 0 }}>
            Designed & Developed for Premium Baby Photography Vijayawada.
          </p>
        </div>
      </footer>


    </div>
  );
}

