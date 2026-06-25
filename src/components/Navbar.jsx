import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  {
    id: 'services',
    label: 'Services',
    dropdown: [
      { id: 'newborn', label: 'Newborn Photography' },
      { id: 'milestone', label: 'Baby Milestone Shoots' },
      { id: 'cakesmash', label: 'Cake Smash Shoots' },
    ]
  },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact Us' },
];

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  // Lock body scroll when drawer open on mobile
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isTransparent = activePage === 'home' && !isScrolled;

  const navigate = (id) => {
    setActivePage(id);
    setIsOpen(false);
  };

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        background: isTransparent ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isTransparent ? '1px solid rgba(222,93,131,0.06)' : '1px solid rgba(222,93,131,0.12)',
        boxShadow: isTransparent ? 'none' : 'var(--shadow-md)',
        transition: 'all 0.3s ease',
      }}>

        {/* ── Main Bar ── */}
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>

          {/* Brand Logo */}
          <div onClick={() => navigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flexShrink: 0 }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
              <span className="heading-serif" style={{ fontSize: 'clamp(16px, 3vw, 22px)', color: 'var(--text-dark)', letterSpacing: '-0.5px' }}>
                Baby Shine
              </span>
              <span className="heading-sans" style={{ fontSize: '9px', color: 'var(--primary-pink)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                STUDIO
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="lg-flex-nav">
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '20px', alignItems: 'center' }}>
              {menuItems.map((item) => {
                if (item.dropdown) {
                  const isDropdownActive = activePage === item.id || item.dropdown.some(sub => sub.id === activePage);
                  return (
                    <li key={item.id} style={{ position: 'relative' }} className="nav-dropdown">
                      <button
                        onClick={() => navigate(item.id)}
                        style={{
                          border: 'none', background: 'none',
                          padding: '8px 2px',
                          fontSize: '13px', fontWeight: 500,
                          color: isDropdownActive ? 'var(--primary-pink)' : 'var(--text-dark)',
                          cursor: 'pointer', fontFamily: 'var(--sans)',
                          whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-pink)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = isDropdownActive ? 'var(--primary-pink)' : 'var(--text-dark)'; }}
                      >
                        {item.label}
                      </button>
                      {isDropdownActive && (
                        <motion.div layoutId="activeNavLine" style={{
                          position: 'absolute', bottom: 0, left: 0, right: 0,
                          height: '2px', backgroundColor: 'var(--primary-pink)', borderRadius: '2px'
                        }} />
                      )}
                      <div className="nav-dropdown-menu" style={{
                        position: 'absolute', top: '100%', left: 0,
                        background: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '12px',
                        padding: '8px',
                        minWidth: '220px',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                        border: '1px solid rgba(222,93,131,0.1)',
                        opacity: 0, visibility: 'hidden',
                        transform: 'translateY(8px)',
                        transition: 'all 0.2s ease',
                        zIndex: 60
                      }}>
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => navigate(sub.id)}
                            style={{
                              width: '100%', textAlign: 'left', border: 'none', background: 'none',
                              padding: '10px 14px', borderRadius: '8px',
                              fontSize: '13px', fontWeight: 500,
                              color: activePage === sub.id ? 'var(--primary-pink)' : 'var(--text-dark)',
                              cursor: 'pointer', fontFamily: 'var(--sans)',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(222,93,131,0.06)'; e.currentTarget.style.color = 'var(--primary-pink)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = activePage === sub.id ? 'var(--primary-pink)' : 'var(--text-dark)'; }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </li>
                  );
                }
                const isActive = activePage === item.id;
                return (
                  <li key={item.id} style={{ position: 'relative' }}>
                    <button
                      onClick={() => navigate(item.id)}
                      style={{
                        border: 'none', background: 'none',
                        padding: '8px 2px',
                        fontSize: '13px', fontWeight: 500,
                        color: isActive
                          ? 'var(--primary-pink)'
                          : 'var(--text-dark)',
                        cursor: 'pointer', transition: 'color 0.2s', fontFamily: 'var(--sans)',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-pink)'; }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isActive
                          ? 'var(--primary-pink)'
                          : 'var(--text-dark)';
                      }}
                    >
                      {item.label}
                    </button>
                    {isActive && (
                      <motion.div layoutId="activeNavLine" style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        height: '2px', backgroundColor: 'var(--primary-pink)', borderRadius: '2px'
                      }} />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'none' }} className="lg-flex-cta">
            <button
              onClick={() => navigate('book')}
              className="pulse-btn"
              style={{
                backgroundColor: 'var(--primary-pink)',
                color: 'white',
                border: 'none',
                borderRadius: '22px', padding: '9px 20px', fontSize: '13px', fontWeight: 600,
                cursor: 'pointer', fontFamily: 'var(--sans)',
                display: 'flex', alignItems: 'center', gap: '6px',
                boxShadow: '0 4px 14px rgba(222,93,131,0.3)',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Book Session</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(v => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            style={{
              border: 'none',
              background: isTransparent ? 'rgba(61,51,42,0.08)' : 'rgba(222,93,131,0.08)',
              padding: '8px', borderRadius: '50%',
              cursor: 'pointer',
              color: 'var(--text-dark)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              flexShrink: 0
            }}
            className="lg-hidden"
          >
            
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={drawerRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(222,93,131,0.1)',
                width: '100%',
              }}
              className="lg-hidden"
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: '12px 16px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {menuItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => navigate(item.id)}
                          style={{
                            width: '100%', textAlign: 'left', border: 'none',
                            background: activePage === item.id ? 'rgba(222,93,131,0.08)' : 'transparent',
                            padding: '8px 14px 4px', borderRadius: '8px',
                            fontSize: '13px', fontWeight: 700,
                            color: activePage === item.id ? 'var(--primary-pink)' : 'var(--text-muted)',
                            textTransform: 'uppercase', letterSpacing: '1px',
                            cursor: 'pointer', fontFamily: 'var(--sans)',
                            transition: 'color 0.2s',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                          }}
                        >
                          <span>{item.label}</span>
                          <span style={{ fontSize: '10px', fontWeight: 500, textTransform: 'none', opacity: 0.7, color: 'var(--primary-pink)' }}>View All &rarr;</span>
                        </button>
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => navigate(sub.id)}
                            style={{
                              width: '100%', textAlign: 'left', border: 'none',
                              background: activePage === sub.id ? 'rgba(222,93,131,0.08)' : 'transparent',
                              padding: '10px 14px 10px 28px', borderRadius: '10px',
                              fontSize: '15px', fontWeight: 500,
                              color: activePage === sub.id ? 'var(--primary-pink)' : 'var(--text-dark)',
                              cursor: 'pointer', fontFamily: 'var(--sans)',
                              transition: 'background-color 0.2s',
                              borderLeft: activePage === sub.id ? '3px solid var(--primary-pink)' : '3px solid transparent'
                            }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </li>
                    );
                  }
                  const isActive = activePage === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => navigate(item.id)}
                        style={{
                          width: '100%', textAlign: 'left', border: 'none',
                          background: isActive ? 'rgba(222,93,131,0.08)' : 'transparent',
                          padding: '11px 14px', borderRadius: '10px',
                          fontSize: '15px', fontWeight: 500,
                          color: isActive ? 'var(--primary-pink)' : 'var(--text-dark)',
                          cursor: 'pointer', fontFamily: 'var(--sans)',
                          transition: 'background-color 0.2s',
                          borderLeft: isActive ? '3px solid var(--primary-pink)' : '3px solid transparent'
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
                <li style={{ marginTop: '8px' }}>
                  <button
                    onClick={() => navigate('book')}
                    style={{
                      width: '100%', backgroundColor: 'var(--primary-pink)', color: 'white',
                      border: 'none', borderRadius: '10px', padding: '13px',
                      fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                      fontFamily: 'var(--sans)', textAlign: 'center'
                    }}
                  >
                    Book Your Session
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CSS injected once */}
      <style>{`
        @media (min-width: 1024px) {
          .lg-flex-nav { display: flex !important; }
          .lg-flex-cta { display: block !important; }
          .lg-hidden   { display: none !important; }
          .nav-dropdown:hover .nav-dropdown-menu {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(4px) !important;
          }
        }
      `}</style>
    </>
  );
}
