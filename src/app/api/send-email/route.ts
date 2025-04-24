import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';
import ContactFormEmail from '@/common/components/sections/contact/_components/contact-form-email';
import { validateString } from '@/common/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { senderEmail, message } = body;

    if (!validateString(senderEmail, 500)) {
      return NextResponse.json(
        { error: 'Invalid sender email' },
        { status: 400 }
      );
    }
    if (!validateString(message, 5000)) {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
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
      { status: 500 }
    );
  }
} 