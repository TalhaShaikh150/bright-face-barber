import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter your full name.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Please enter your message (at least 5 characters).' },
        { status: 400 }
      );
    }

    const contactRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || 'Not provided',
      reason: reason || 'General Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    console.log('[CONTACT MESSAGE RECEIVED]:', contactRecord);

    // Optional Webhook notification (Zapier, Make, Slack, or custom CRM)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'new_contact_message',
            data: contactRecord,
          }),
        });
      } catch (webhookErr) {
        console.error('[CONTACT WEBHOOK ERROR]:', webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received by our Fitzrovia front-of-house team. We will review and reply within 2–4 hours.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[API CONTACT ERROR]:', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while sending your note. Please call 020 7637 9288 or try again.' },
      { status: 500 }
    );
  }
}
