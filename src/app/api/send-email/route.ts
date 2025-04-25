import { NextResponse } from 'next/server';
import { validateString } from '@/common/lib/utils';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { senderEmail, message } = body;

    if (!validateString(senderEmail, 500)) {
      return NextResponse.json(
        { error: 'Invalid sender email' },
        { status: 400 },
      );
    }
    if (!validateString(message, 5000)) {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 },
      );
    }

    // Check if the EmailJS configuration is set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS configuration');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 },
      );
    }

    // Prepare data for EmailJS
    const data = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_email: senderEmail,
        message: message,
      }
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 },
    );
  }
}
