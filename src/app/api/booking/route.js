import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, telephone, service, date, timeWindow, notes } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid full name.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!date) {
      return NextResponse.json(
        { success: false, error: 'Please select a preferred appointment date.' },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Please select a service.' },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const reference = `BFB-${Math.floor(10000 + Math.random() * 90000)}`;
    const timestamp = new Date().toISOString();

    const bookingRecord = {
      reference,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      telephone: telephone?.trim() || 'Not provided',
      service: service.trim(),
      date,
      timeWindow: timeWindow || 'Standard (Any available)',
      notes: notes?.trim() || '',
      status: 'pending_confirmation',
      createdAt: timestamp,
    };

    console.log('[BOOKING REQUEST RECEIVED]:', bookingRecord);

    // Optional Webhook notification (Zapier, Make, Slack, or custom CRM)
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'new_booking_request',
            data: bookingRecord,
          }),
        });
      } catch (webhookErr) {
        console.error('[BOOKING WEBHOOK ERROR]:', webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        reference,
        message: 'Your chair reservation request has been received. Our concierge will review availability and send confirmation.',
        booking: bookingRecord,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[API BOOKING ERROR]:', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while processing your booking. Please try again or call 020 7637 9288.' },
      { status: 500 }
    );
  }
}
