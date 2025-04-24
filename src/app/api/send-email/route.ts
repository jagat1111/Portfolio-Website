import { NextResponse } from 'next/server';
import React from 'react';
import { Resend } from 'resend';

import ContactFormEmail from '@/common/components/sections/contact/_components/contact-form-email';
import { validateString } from '@/common/lib/utils';

// Only initialize Resend if we have an API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 },
      );
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['yadavjatin923@gmail.com'],
      subject: 'Message from contact form | PORTFOLIO',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
} 