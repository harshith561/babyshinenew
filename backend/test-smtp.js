require('dotenv').config({ path: __dirname + '/.env' });
const nodemailer = require('nodemailer');

const emailUser = process.env.SMTP_EMAIL || process.env.SMTP_USER;
const emailPass = process.env.SMTP_PASS;
const adminEmail = process.env.ADMIN_EMAIL || process.env.RECIPIENT_EMAIL;

console.log('Testing SMTP for:', emailUser);
console.log('Target recipient:', adminEmail);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

transporter.verify(async (err, success) => {
  if (err) {
    console.error('❌ SMTP verification failed:', err.message);
    process.exit(1);
  }
  console.log('✅ SMTP connection successfully authenticated with Google!');

  try {
    const info = await transporter.sendMail({
      from: `"Sai Krishna Photography" <${emailUser}>`,
      to: adminEmail,
      subject: '✅ SMTP Test Successful — Sai Krishna Photography',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #DE5D83; border-radius: 8px;">
          <h2 style="color: #DE5D83;">🌸 Sai Krishna Photography — SMTP Working!</h2>
          <p>Your Gmail SMTP setup has been verified and is working perfectly.</p>
          <p><strong>Admin Email:</strong> ${adminEmail}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      `
    });
    console.log('✅ Test email sent! Message ID:', info.messageId);
    console.log('🎉 SMTP IS 100% OPERATIONAL!');
    process.exit(0);
  } catch (sendErr) {
    console.error('❌ Error sending test email:', sendErr.message);
    process.exit(1);
  }
});
