import { NextResponse } from 'next/server';

const MAX_MESSAGE_LENGTH = 4000;

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;',
  }[character]));
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const cleanName = typeof name === 'string' ? name.trim() : '';
    const cleanEmail = typeof email === 'string' ? email.trim() : '';
    const cleanMessage = typeof message === 'string' ? message.trim() : '';

    if (!cleanName || !cleanEmail || !cleanMessage || cleanMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: 'Please complete all fields with a valid message.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL = 'virendrasingh6011@gmail.com' } = process.env;
    if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
      console.error('Contact mail is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.');
      return NextResponse.json({ error: 'Email service is not configured yet. Please use the email address shown on this page.' }, { status: 503 });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'virendra-portfolio-contact-form',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: cleanEmail,
        subject: `Portfolio message from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
        html: `<h2>New portfolio message</h2><p><strong>Name:</strong> ${escapeHtml(cleanName)}</p><p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p><p>${escapeHtml(cleanMessage).replace(/\n/g, '<br />')}</p>`,
      }),
    });

    if (!response.ok) {
      console.error('Resend rejected contact message:', await response.text());
      return NextResponse.json({ error: 'Unable to send your message right now. Please try again shortly.' }, { status: 502 });
    }
    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact request failed:', error);
    return NextResponse.json({ error: 'Unable to send your message right now. Please try again shortly.' }, { status: 500 });
  }
}
