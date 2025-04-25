import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if all required env vars are set
    const envVars = {
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY,
    };

    // Log environment variables (masking sensitive data)
    const maskedEnvVars = {
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY: EMAILJS_PUBLIC_KEY 
        ? `${EMAILJS_PUBLIC_KEY.substring(0, 3)}...${EMAILJS_PUBLIC_KEY.substring(EMAILJS_PUBLIC_KEY.length - 3)}` 
        : undefined,
    };

    // Prepare data for EmailJS
    const data = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_email: "test@example.com",
        message: "This is a test message from the API route"
      }
    };

    // Try to send a test email
    let emailResponse = null;
    let emailError = null;
    
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const responseText = await response.text();
      emailResponse = {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      };
    } catch (error) {
      emailError = error instanceof Error ? error.message : String(error);
    }

    return NextResponse.json({
      env: maskedEnvVars,
      emailResponse,
      emailError
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Test failed' },
      { status: 500 },
    );
  }
} 