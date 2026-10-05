require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

const emailUser = process.env.SMTP_EMAIL || process.env.SMTP_USER;
const emailPass = process.env.SMTP_PASS;
const adminEmail = process.env.ADMIN_EMAIL || process.env.RECIPIENT_EMAIL;

// ── Middleware ──────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: true, // Allow requests from any local frontend port (5173, 5174, etc.)
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// ── Nodemailer Transporter ──────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false, // 587 uses STARTTLS
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

// Verify transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ SMTP connection error:', error.message);
  } else {
    console.log(`✅ SMTP server authenticated (${emailUser}) -> leads go to (${adminEmail})`);
  }
});

// ── Health Check ────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    studio: process.env.STUDIO_NAME || 'Sai Krishna Photography',
    adminEmail,
    smtpUser: emailUser
  });
});

// ── Verify SMTP Endpoint ────────────────────────────────
app.get('/api/verify-smtp', async (req, res) => {
  try {
    await transporter.verify();
    res.json({ success: true, message: 'SMTP is active and ready to deliver emails!', email: emailUser });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── Contact / Booking Form Endpoint ─────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, phone, email, babyAge, category, date, message } = req.body;

  // Validation
  if (!name || (!phone && !email) || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill in all required fields (Name, Phone/Email, and Message).'
    });
  }

  const categoryLabels = {
    newborn: 'Newborn Photography (5-14 Days)',
    milestone: 'Baby Milestone Shoot (3-12 Months)',
    cakesmash: 'Cake Smash Session (First Birthday)',
    other: 'Other / Custom Combination'
  };

  const categoryLabel = categoryLabels[category] || category || 'General Inquiry';
  const studioName = process.env.STUDIO_NAME || 'Sai Krishna Photography';

  // ── Email to Studio Owner ──
  const ownerMailOptions = {
    from: `"${studioName} Website" <${emailUser}>`,
    to: adminEmail,
    subject: `📸 New Booking Enquiry — ${name} (${categoryLabel})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #f0e4e8; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #DE5D83, #e8748a); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">${studioName}</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 14px;">New Client Enquiry / Session Booking</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #888; font-size: 13px; width: 160px;">👤 Client Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; font-weight: 600; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #888; font-size: 13px;">📞 Phone / WhatsApp</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; font-weight: 600; color: #333;">${phone || 'Not provided'}</td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #888; font-size: 13px;">✉️ Email Address</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; font-weight: 600; color: #333;">${email}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #888; font-size: 13px;">🍼 Baby Age / Due Date</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #333;">${babyAge || 'Not specified'}</td>
            </tr>
            ${date ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #888; font-size: 13px;">📅 Preferred Date</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #333;">${date}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #888; font-size: 13px;">📷 Shoot Category</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f5f0f2; color: #333;">
                <span style="background: #fde8ef; color: #DE5D83; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">${categoryLabel}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top; padding-top: 16px;">💬 Message / Details</td>
              <td style="padding: 12px 0; color: #333; line-height: 1.6;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 14px; background: #fdf8fa; border-radius: 8px; font-size: 12px; color: #888;">
            📅 Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })}
          </div>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    console.log(`✅ Enquiry from ${name} (${phone || email}) sent to ${adminEmail}`);

    res.json({
      success: true,
      message: 'Your enquiry has been successfully sent! Our team will contact you within 24 hours.'
    });
  } catch (error) {
    console.error('❌ Email send error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again or call us directly at our phone number.'
    });
  }
});

// ── Start Server ────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════════╗
  ║   🌸 Sai Krishna Photography Backend       ║
  ║   Running on http://localhost:${PORT}        ║
  ║   SMTP: ${emailUser}             ║
  ║   Admin Recipient: ${adminEmail} ║
  ╚════════════════════════════════════════════╝
  `);
});
