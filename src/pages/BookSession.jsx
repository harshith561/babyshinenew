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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) {
      alert('Please fill out your Name and Phone Number.');
      return;
    }
    setIsSubmitted(true);
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

                <button
                  type="submit"
                  className="pulse-btn"
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--primary-pink)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
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
                      Sai Krishna Buildings, MG Road, Opp. PWD Grounds, Vijayawada, Andhra Pradesh - 520010
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>

                  <div>
                    <h5 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px' }}>Phone / WhatsApp</h5>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>+91 99999 99999 / +91 88888 88888</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>

                  <div>
                    <h5 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px' }}>Email Address</h5>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>hello@babyshine.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>

                  <div>
                    <h5 className="heading-sans" style={{ margin: '0 0 2px', fontSize: '15px' }}>Working Hours</h5>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>Tuesday - Sunday: 9:30 AM - 6:30 PM (Mondays Closed)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Simulated Google Maps Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                aspectRatio: '16/9',
                position: 'relative',
                border: '1px solid rgba(61, 51, 42, 0.08)',
                backgroundColor: '#e5e3df'
              }}
            >
              {/* Map background styling */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle, #f0f0f0 10%, transparent 11%), radial-gradient(circle, #e9e9e9 10%, transparent 11%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}>

                <div style={{
                  backgroundColor: 'white',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  marginTop: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-dark)'
                }}>
                  Baby Shine Studio, MG Road
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: 'blue',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                View on Google Maps
              </a>
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
