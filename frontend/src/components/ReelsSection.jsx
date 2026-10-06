import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const INSTAGRAM_URL = 'https://www.instagram.com/babyshine_studio?stkn=MTZkZTk5eWpjcm1uYw%3D%3D&utm_source=qr';

const reels = [
  { id: 1, src: '/reels/reel1.mp4', label: 'Reel 1', tag: 'Newborn Story' },
  { id: 2, src: '/reels/reel2.mp4', label: 'Reel 2', tag: 'Milestone Moments' },
  { id: 3, src: '/reels/reel3.mp4', label: 'Reel 3', tag: 'Cake Smash Joy' },
  { id: 4, src: '/reels/reel4.mp4', label: 'Reel 4', tag: 'Studio Magic' },
];

function PhoneReelCard({ reel, index }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px'
      }}
    >
      {/* Phone Frame */}
      <div
        onClick={togglePlay}
        style={{
          position: 'relative',
          width: '160px',
          borderRadius: '22px',
          background: '#0d0d0d',
          boxShadow: '0 0 0 3px #1a1a1a, 0 0 0 5px #333, 0 20px 60px rgba(0,0,0,0.45)',
          overflow: 'hidden',
          cursor: 'pointer',
          aspectRatio: '9/16',
        }}
      >
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50px',
          height: '10px',
          background: '#111',
          borderRadius: '6px',
          zIndex: 10,
        }} />

        {/* Video */}
        <video
          ref={videoRef}
          src={reel.src}
          muted={muted}
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          onEnded={() => setPlaying(false)}
        />

        {/* Overlay gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: playing
            ? 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 50%)',
          transition: 'background 0.3s',
          pointerEvents: 'none',
        }} />

        {/* Play / Pause icon */}
        {!playing && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.5)',
          }}>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
              <path d="M2 1.5l12 7-12 7V1.5z" />
            </svg>
          </div>
        )}

        {/* Bottom bar: mute + tag */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '8px 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          <span style={{
            color: 'white',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.5px',
            textShadow: '0 1px 4px rgba(0,0,0,0.8)',
            maxWidth: '100px',
            lineHeight: 1.2,
          }}>
            {reel.tag}
          </span>

          <button
            onClick={toggleMute}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
            }}
          >
            {muted ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/>
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Watch button */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '7px 16px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
          color: 'white',
          fontSize: '11px',
          fontWeight: 700,
          textDecoration: 'none',
          letterSpacing: '0.3px',
          boxShadow: '0 4px 14px rgba(253,29,29,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(253,29,29,0.45)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(253,29,29,0.3)';
        }}
      >
        {/* Instagram icon */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        Watch
      </a>
    </motion.div>
  );
}

export default function ReelsSection() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #0d0d0d 0%, #1a0a12 40%, #0d0d0d 100%)',
      padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 40px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: '300px', height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(131,58,180,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', right: '-60px',
        width: '280px', height: '280px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(253,29,29,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 56px)', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            {/* Instagram gradient icon */}
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <span style={{
              fontSize: '13px', fontWeight: 700, letterSpacing: '2px',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              @photographyby_sai_krishna
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(26px, 4.5vw, 46px)',
            fontWeight: 800,
            color: 'white',
            margin: '0 0 14px',
            fontFamily: 'Playfair Display, Georgia, serif',
            lineHeight: 1.2,
          }}>
            Behind the Lens — Our Reels
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Watch the magic unfold. Real sessions, real emotions, captured frame by frame at our studio.
          </p>
        </motion.div>
      </div>

      {/* Reels Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(20px, 3vw, 36px)',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {reels.map((reel, index) => (
          <PhoneReelCard key={reel.id} reel={reel} index={index} />
        ))}
      </div>

      {/* CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          marginTop: 'clamp(40px, 5vw, 60px)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', margin: 0 }}>
          ❤️ Enjoying our content? Follow us for daily updates from the studio!
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 28px',
            borderRadius: '40px',
            background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
            color: 'white',
            fontWeight: 700,
            fontSize: '15px',
            textDecoration: 'none',
            boxShadow: '0 8px 28px rgba(253,29,29,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(253,29,29,0.5)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(253,29,29,0.35)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Visit Our Profile
        </a>
      </motion.div>
    </section>
  );
}
