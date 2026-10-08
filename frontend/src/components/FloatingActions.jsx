import { useState } from 'react';

const services = [
  'Newborn Photoshoot',
  'Milestone Shoot',
  'Cake Smash',
  'Packages & Pricing',
  'Book a Session',
];

const WHATSAPP_NUMBER = '918399937999';
const INSTAGRAM_URL = 'https://www.instagram.com/babyshine_studio';

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  const link = (service) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I want to know about ${service}.`)}`;

  const circle = {
    width: 52,
    height: 52,
    borderRadius: '50%',
    border: 'none',
    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            right: 0,
            marginBottom: 14,
            width: 240,
            background: '#fff',
            border: '1px solid #FFD5E5',
            borderRadius: 16,
            padding: 16,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transformOrigin: 'bottom right',
            transition: 'all 0.25s ease',
            opacity: open ? 1 : 0,
            transform: open ? 'scale(1)' : 'scale(0.95)',
            visibility: open ? 'visible' : 'hidden',
            pointerEvents: open ? 'auto' : 'none',
          }}
        >
          <h4 style={{ margin: '0 0 10px', paddingBottom: 8, borderBottom: '1px solid #FFD5E5', fontSize: 16, color: '#1E1915' }}>
            How can we help?
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {services.map((s) => (
              <a
                key={s}
                href={link(s)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                style={{ padding: '8px 10px', borderRadius: 8, fontSize: 14, color: '#4a4039', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#FFF0F6')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <button aria-label="Open WhatsApp menu" onClick={() => setOpen(!open)} style={{ ...circle, background: '#22c55e' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </button>
      </div>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        style={{ ...circle, background: 'linear-gradient(45deg, #facc15, #ef4444, #a855f7)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>
    </div>
  );
}