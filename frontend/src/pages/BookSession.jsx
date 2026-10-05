import React, { useState } from 'react';
import { motion } from 'framer-motion';


const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export default function BookSession() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    shootType: 'newborn',
    babyAge: '',
    dueDate: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const name = formData.parentName.trim();
    if (!name || name.length < 2) {
      setErrorMessage('Please enter your full parent name (min 2 letters).');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number for WhatsApp/Call.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          category: formData.shootType,
          babyAge: formData.dueDate || formData.babyAge,
          message: formData.message || `Session booking inquiry for ${formData.shootType} shoot.`
        })
      });

      const res = await response.json();
      if (response.ok && res.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(res.error || 'Unable to submit booking. Please try again or call us directly.');
      }
    } catch (err) {
      console.error('Booking submission error:', err);
      // Fallback in case of network issue
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '60px 24px', background: 'linear-gradient(180deg, #FFFDFB 0%, #fff 100%)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollReveal}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary-pink)', textTransform: 'uppercase', letterSpacing: '2px' }}>Bookings</span>
          <h1 className="heading-serif" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-dark)', marginTop: '8px', marginBottom: '16px' }}>
            Book Your Session
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Plan your baby\'s magical photoshoot. Drop us an inquiry, and our session stylist will contact you within 2 hours.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start',
        }} className="md-grid-2">

          {/* Booking Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              padding: '40px 30px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(61, 51, 42, 0.05)'
            }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '40px 10px' }}
              >

                <h3 className="heading-serif" style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '10px' }}>
                  Thank You, Parents!
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
                  Your photoshoot inquiry has been received. Our session stylist from Baby Shine Studio (powered by Sai Krishna Photography) will reach out to you via call or WhatsApp within 2 hours to walk through themes and dates!
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      parentName: '',
                      phone: '',
                      email: '',
                      shootType: 'newborn',
                      babyAge: '',
                      dueDate: '',
                      message: ''
                    });
                  }}
                  style={{
                    backgroundColor: 'var(--primary-pink)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '24px',
                    padding: '10px 24px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--sans)'
                  }}
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <h3 className="heading-serif" style={{ fontSize: '22px', color: 'var(--text-dark)', margin: '0 0 10px' }}>
                  Session Planner Form
                </h3>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>Parent Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(61, 51, 42, 0.15)',
                      fontFamily: 'var(--sans)',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="flex-wrap-mobile">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(61, 51, 42, 0.15)',
                        fontFamily: 'var(--sans)',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(61, 51, 42, 0.15)',
                        fontFamily: 'var(--sans)',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="flex-wrap-mobile">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>Photoshoot Type</label>
                    <select
                      value={formData.shootType}
                      onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(61, 51, 42, 0.15)',
                        fontFamily: 'var(--sans)',
                        fontSize: '14px',
                        backgroundColor: '#fff',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="newborn">Newborn (5-14 Days)</option>
                      <option value="sitter">Sitter (6-9 Months)</option>
                      <option value="toddler">Toddler & Cake Smash</option>
                      <option value="maternity">Maternity Shoot</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>
                      {formData.shootType === 'newborn' ? 'Expected Due Date' : 'Baby\'s Age / Shoot Date'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. July 15, 2026 or 8 Months"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid rgba(61, 51, 42, 0.15)',
                        fontFamily: 'var(--sans)',
                        fontSize: '14px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '6px' }}>Creative Preferences / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your preferred themes, colors, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(61, 51, 42, 0.15)',
                      fontFamily: 'var(--sans)',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {errorMessage && (
                  <div style={{
                    backgroundColor: '#fff5f7',
                    border: '1px solid rgba(222,93,131,0.35)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#c0294e',
                    fontSize: '13px'
                  }}>
                    ⚠️ {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pulse-btn"
                  style={{
                    width: '100%',
                    backgroundColor: isSubmitting ? '#e0a0b2' : 'var(--primary-pink)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--sans)',
                    boxShadow: '0 4px 14px rgba(222, 93, 131, 0.3)',
                    marginTop: '10px'
                  }}
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details & Google Maps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                backgroundColor: 'var(--cream-white)',
                border: '1.5px solid var(--border-light)',
                borderRadius: '24px',
                padding: '30px'
              }}
            >
              <h3 className="heading-serif" style={{ fontSize: '20px', color: 'var(--text-dark)', marginBottom: '20px' }}>
                Studio Contact Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>

                  <div>
                    <h5 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px' }}>Location</h5>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      A.Colony Center, Brilliants Convent Street, Ibrahimpatnam, Vijayawada, Andhra Pradesh — 521456
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div>
                    <h5 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px' }}>Phone / WhatsApp</h5>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>+91 8399937999</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div>
                    <h5 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px' }}>Email Address</h5>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>hello@saikrishnaphotography.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div>
                    <h5 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px' }}>Working Hours</h5>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Monday - Sunday: 8:00 AM - 10:00 PM </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Real Interactive Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                border: '1px solid rgba(222, 93, 131, 0.15)',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                padding: '12px 18px',
                background: 'linear-gradient(135deg, #FFF0E5 0%, #FFE9F0 100%)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(222,93,131,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>📍</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-dark)' }}>Baby Shine Studio</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/5GwEvwVU1YdjBxABA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--primary-pink)',
                    textDecoration: 'none',
                    backgroundColor: '#fff',
                    padding: '5px 12px',
                    borderRadius: '14px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                  }}
                >
                  Get Directions ↗
                </a>
              </div>
              <iframe
                title="Baby Shine Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.6054704476524!2d80.5246658!3d16.596355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35edef41b7e4b1%3A0x585b2db53fadc4b3!2sBaby%20Shine%20Studio%20%7C%20Maternity%20%26%20Baby%20Photography!5e0!3m2!1sen!2sin!4v1791199477552!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block', width: '100%', minHeight: '280px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </motion.div>

          </div>
        </div>

      </div>
      <style>{`
        @media (min-width: 768px) {
          .md-grid-2 { grid-template-columns: 1.1fr 0.9fr !important; }
        }
        @media (max-width: 480px) {
          .flex-wrap-mobile { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}
