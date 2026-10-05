import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Contact({ setActivePage }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    babyAge: '',
    category: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    // ── Client-side Validation ──
    const trimmedName = formData.name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setFormError('Please enter your full name (minimum 2 letters).');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit phone/WhatsApp number.');
      return;
    }

    if (!formData.category) {
      setFormError('Please select a shoot category.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setFormError('Please enter a brief message (minimum 5 characters).');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setFormSubmitted(true);
        setFormData({ name: '', phone: '', babyAge: '', category: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 8000);
      } else {
        setFormError(result.error || 'Server error. Please try again or call us directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setFormError('Backend server is temporarily unreachable. Please ensure the backend is running on port 5000 or call us directly.');
    } finally {
      setIsLoading(false);
    }
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
            src="/contact_hero_bg.png"
            alt="Baby Studio consultation room backdrop"
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
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -12, 0], rotate: [-3, 3, -3] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'absolute',
            left: '20px',
            bottom: '10px',
            width: 'clamp(90px, 12vw, 160px)',
            height: 'clamp(90px, 12vw, 160px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="/3d_baby_camera.png" alt="Baby Camera" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        {/* Floating Mascot – Right */}
        <motion.div
          className="page-mascot"
          initial={{ opacity: 0, x: 60, scale: 0.7 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -15, 0], rotate: [4, -4, 4] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
          }}
          style={{
            position: 'absolute',
            right: '20px',
            bottom: '10px',
            width: 'clamp(90px, 12vw, 165px)',
            height: 'clamp(90px, 12vw, 165px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        >
          <img src="/3d_teddy_bear.png" alt="Teddy Bear" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ position: 'relative', zIndex: 4, maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Get In Touch</span>
            <h1 className="heading-serif" style={{ fontSize: 'clamp(28px, 5vw, 52px)', color: 'var(--text-dark)', marginTop: '10px', marginBottom: '16px', lineHeight: 1.2 }}>
              Contact Baby Shine
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-dark)', fontWeight: 500, lineHeight: 1.6, margin: '0 auto' }}>
              Have questions about packages or want to book your baby's photo session? Let's connect and create magic!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px 80px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }} className="md-grid-2">

          {/* Left Column: Premium Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: 'white',
              borderRadius: '28px',
              padding: '36px 30px',
              border: '1px solid rgba(222, 93, 131, 0.08)',
              boxShadow: '0 8px 30px rgba(61, 51, 42, 0.04)',
              textAlign: 'left'
            }}
          >
            <h2 className="heading-serif" style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '10px' }}>
              Book Your Session
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '28px', lineHeight: 1.5 }}>
              Fill out the form below, and our team will get back to you within 24 hours to plan your customized shoot.
            </p>

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name field */}
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder=" "
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label>Your Name</label>
                  </div>

                  {/* Phone field */}
                  <div className="input-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder=" "
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label>Phone Number</label>
                  </div>

                  {/* Baby's expected age / due date */}
                  <div className="input-group">
                    <input
                      type="text"
                      name="babyAge"
                      placeholder=" "
                      value={formData.babyAge}
                      onChange={handleChange}
                    />
                    <label>Baby's Age or Expected Due Date</label>
                  </div>

                  {/* Category of Shoot */}
                  <div className="input-group select-group">
                    <select
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleChange}
                      style={{ color: formData.category ? 'var(--text-dark)' : 'var(--text-muted)' }}
                    >
                      <option value="" disabled hidden>Select Shoot Category</option>
                      <option value="newborn">Newborn Photography (5-14 Days)</option>
                      <option value="milestone">Baby Milestone Shoot (3-12 Months)</option>
                      <option value="cakesmash">Cake Smash Session (First Birthday)</option>
                      <option value="other">Other / Custom Combination</option>
                    </select>
                    <label style={{ top: 0, fontSize: '12px', color: 'var(--primary-pink)', fontWeight: 600 }}>Shoot Category</label>
                  </div>

                  {/* Message */}
                  <div className="input-group">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder=" "
                      required
                      value={formData.message}
                      onChange={handleChange}
                      style={{ resize: 'none' }}
                    />
                    <label>Share details (Theme ideas, colors, special requests)</label>
                  </div>

                  {formError && (
                    <div style={{
                      background: '#fff5f7',
                      border: '1px solid rgba(222,93,131,0.3)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      color: '#c0294e',
                      fontSize: '13px',
                      marginBottom: '12px'
                    }}>
                      ⚠️ {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="pulse-btn"
                    style={{
                      width: '100%',
                      backgroundColor: isLoading ? '#e8a0b4' : 'var(--primary-pink)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '28px',
                      padding: '16px',
                      fontSize: '16px',
                      fontWeight: 700,
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      fontFamily: 'var(--sans)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(222, 93, 131, 0.3)',
                      marginTop: '8px',
                      transition: 'background 0.2s'
                    }}
                  >
                    <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px'
                  }}
                >

                  <h3 className="heading-sans" style={{ fontSize: '20px', color: 'var(--text-dark)', margin: 0 }}>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, maxWidth: '320px', margin: 0 }}>
                    Thank you for reaching out! The Baby Shine team will contact you shortly to plan your baby's dream photoshoot.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Coordinates & Map */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}
          >
            {/* Info Card */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '28px',
              padding: '36px 30px',
              border: '1px solid rgba(222, 93, 131, 0.08)',
              boxShadow: '0 8px 30px rgba(61, 51, 42, 0.04)'
            }}>
              <h3 className="heading-serif" style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '24px' }}>
                Studio Contact Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    label: 'Our Location',
                    detail: 'A.Colony Center, Brilliants Convent Street, Ibrahimpatnam, Vijayawada, Gudurupadu, Andhra Pradesh — 521456'
                  },
                  { label: 'Call / WhatsApp', detail: '+91 8399937999' },
                  { label: 'Email Address', detail: 'hello@saikrishnaphotography.com' },
                  { label: 'Working Hours', detail: 'Monday - Sunday: 08:00 AM - 10:00 PM ' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>

                    <div>
                      <h4 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</h4>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.4 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive map placeholder */}
            <div style={{
              flexGrow: 1,
              minHeight: '260px',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '2px solid white',
              position: 'relative'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.6054704476524!2d80.5246658!3d16.596355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35edef41b7e4b1%3A0x585b2db53fadc4b3!2sBaby%20Shine%20Studio%20%7C%20Maternity%20%26%20Baby%20Photography!5e0!3m2!1sen!2sin!4v1791199477552!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </motion.div>

        </div>

      </div>

      <style>{`
        .input-group {
          position: relative;
          margin-bottom: 20px;
          width: 100%;
        }
        .input-group input,
        .input-group textarea,
        .input-group select {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid rgba(222, 93, 131, 0.2);
          border-radius: 12px;
          background-color: white;
          outline: none;
          font-family: var(--sans);
          font-size: 14px;
          color: var(--text-dark);
          transition: all 0.25s ease;
        }
        .input-group input:focus,
        .input-group textarea:focus,
        .input-group select:focus {
          border-color: var(--primary-pink);
          box-shadow: 0 0 10px rgba(222, 93, 131, 0.15);
        }
        .input-group label {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 13.5px;
          color: var(--text-muted);
          pointer-events: none;
          transition: all 0.25s ease;
          background-color: white;
          padding: 0 4px;
        }
        .input-group textarea ~ label {
          top: 24px;
          transform: none;
        }
        .input-group input:focus ~ label,
        .input-group input:not(:placeholder-shown) ~ label,
        .input-group textarea:focus ~ label,
        .input-group textarea:not(:placeholder-shown) ~ label {
          top: 0;
          font-size: 11px;
          color: var(--primary-pink);
          font-weight: 600;
        }
        .select-group select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
